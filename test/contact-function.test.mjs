import assert from 'node:assert/strict';
import test from 'node:test';
import { handler } from '../netlify/functions/contact.mjs';

const validBody = new URLSearchParams({
  first_name: 'Chris', last_name: 'Pearce', business_name: 'Snap Flow',
  phone: '586-555-0100', email: 'chris@example.com', message: 'Please call me.',
  'cf-turnstile-response': 'valid-test-token'
}).toString();

process.env.TURNSTILE_SECRET_KEY = 'test-secret';

function turnstileSuccess() {
  return { ok: true, status: 200, json: async () => ({
    success: true, hostname: 'snapflowsolutions.com', action: 'contact_form'
  }) };
}

function event(body = validBody, origin = 'https://snapflowsolutions.com') {
  return { httpMethod: 'POST', headers: { origin }, body, isBase64Encoded: false };
}

test('rejects cross-origin submissions before forwarding', async () => {
  const result = await handler(event(validBody, 'https://spam.example'));
  assert.equal(result.statusCode, 403);
});

test('accepts honeypot submissions without forwarding', async () => {
  let called = false;
  globalThis.fetch = async () => { called = true; };
  const body = new URLSearchParams({ company_fax: 'bot', first_name: 'Bot' }).toString();
  const result = await handler(event(body));
  assert.equal(result.statusCode, 200);
  assert.equal(called, false);
});

test('validates required fields', async () => {
  globalThis.fetch = async () => turnstileSuccess();
  const result = await handler(event('first_name=Chris&cf-turnstile-response=valid-test-token'));
  assert.equal(result.statusCode, 400);
});

test('rejects submissions without a Turnstile token', async () => {
  let called = false;
  globalThis.fetch = async () => { called = true; };
  const body = new URLSearchParams({
    first_name: 'Chris', last_name: 'Pearce', business_name: 'Snap Flow',
    phone: '586-555-0100', email: 'chris@example.com', message: 'Please call me.'
  }).toString();
  const result = await handler(event(body));
  assert.equal(result.statusCode, 403);
  assert.equal(called, false);
});

test('rejects invalid Turnstile verification before forwarding to GHL', async () => {
  let calls = 0;
  globalThis.fetch = async () => {
    calls += 1;
    return { ok: true, status: 200, json: async () => ({ success: false }) };
  };
  const result = await handler(event());
  assert.equal(result.statusCode, 403);
  assert.equal(calls, 1);
});

test('forwards only approved fields to the configured GHL webhook', async () => {
  process.env.GHL_CONTACT_WEBHOOK_URL = 'https://example.test/secret-webhook';
  let request;
  let verificationRequest;
  globalThis.fetch = async (url, options) => {
    if (url.includes('challenges.cloudflare.com')) {
      verificationRequest = { url, options };
      return turnstileSuccess();
    }
    request = { url, options };
    return { ok: true, status: 200 };
  };

  const result = await handler(event(validBody + '&admin=true'));
  assert.equal(result.statusCode, 200);
  assert.equal(request.url, process.env.GHL_CONTACT_WEBHOOK_URL);
  assert.equal(verificationRequest.url, 'https://challenges.cloudflare.com/turnstile/v0/siteverify');
  assert.equal(verificationRequest.options.body.get('secret'), 'test-secret');
  assert.equal(JSON.parse(request.options.body).admin, undefined);
  assert.equal(JSON.parse(request.options.body)['cf-turnstile-response'], undefined);
  assert.equal(JSON.parse(request.options.body).email, 'chris@example.com');
  assert.equal(request.options.headers['content-type'], 'application/json');
});
