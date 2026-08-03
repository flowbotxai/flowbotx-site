const ALLOWED_FIELDS = [
  'first_name', 'last_name', 'business_name', 'phone', 'email', 'website',
  'address', 'message', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term',
  'utm_content', 'gclid', 'gbraid', 'wbraid', 'fbclid', 'landing_page', 'referrer'
];

const REQUIRED_FIELDS = ['first_name', 'last_name', 'business_name', 'phone', 'email', 'message'];
const DEFAULT_ALLOWED_HOSTS = new Set(['snapflowsolutions.com', 'www.snapflowsolutions.com']);
const MAX_BODY_BYTES = 32_000;
const MAX_FIELD_LENGTH = 4_000;

function response(statusCode, message) {
  return {
    statusCode,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store'
    },
    body: JSON.stringify({ ok: statusCode >= 200 && statusCode < 300, message })
  };
}

function allowedHosts() {
  const configured = (process.env.CONTACT_FORM_ALLOWED_HOSTS || '')
    .split(',')
    .map((host) => host.trim().toLowerCase())
    .filter(Boolean);
  return configured.length ? new Set(configured) : DEFAULT_ALLOWED_HOSTS;
}

function requestHost(event) {
  const headers = event.headers || {};
  const source = headers.origin || headers.Origin || headers.referer || headers.Referer;
  if (!source) return null;

  try {
    return new URL(source).hostname.toLowerCase();
  } catch {
    return null;
  }
}

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { ...response(405, 'Method not allowed'), headers: { ...response(405, '').headers, allow: 'POST' } };
  }

  const host = requestHost(event);
  if (!host || !allowedHosts().has(host)) return response(403, 'Request origin not allowed');

  const rawBody = event.isBase64Encoded
    ? Buffer.from(event.body || '', 'base64').toString('utf8')
    : (event.body || '');
  if (!rawBody || Buffer.byteLength(rawBody, 'utf8') > MAX_BODY_BYTES) {
    return response(400, 'Invalid submission');
  }

  const input = new URLSearchParams(rawBody);
  if (input.get('company_fax')) return response(200, 'Submission received');

  for (const field of REQUIRED_FIELDS) {
    if (!(input.get(field) || '').trim()) return response(400, 'Please complete all required fields');
  }

  const email = (input.get('email') || '').trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return response(400, 'Please enter a valid email');

  const output = new URLSearchParams();
  for (const field of ALLOWED_FIELDS) {
    const value = (input.get(field) || '').trim();
    if (value.length > MAX_FIELD_LENGTH) return response(400, 'A field is too long');
    output.set(field, value);
  }

  const webhookUrl = process.env.GHL_CONTACT_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error('GHL_CONTACT_WEBHOOK_URL is not configured');
    return response(503, 'Contact form is temporarily unavailable');
  }

  try {
    const upstream = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded;charset=UTF-8' },
      body: output.toString(),
      signal: AbortSignal.timeout(10_000)
    });

    if (!upstream.ok) throw new Error(`GHL rejected submission with status ${upstream.status}`);
    return response(200, 'Submission received');
  } catch (error) {
    console.error('Contact form delivery failed', error instanceof Error ? error.message : 'unknown error');
    return response(502, 'Unable to deliver submission');
  }
}
