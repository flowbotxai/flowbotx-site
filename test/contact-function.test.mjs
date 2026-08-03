import assert from 'node:assert/strict';
import test from 'node:test';
import { handler } from '../netlify/functions/contact.mjs';

const validBody = new URLSearchParams({
  first_name: 'Chris', last_name: 'Pearce', business_name: 'Snap Flow',
  phone: '586-555-0100', email: 'chris@example.com', message: 'Please call me.'
}).toString();

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
  const result = await handler(event('first_name=Chris'));
  assert.equal(result.statusCode, 400);
});

test('forwards only approved fields to the configured GHL webhook', async () => {
  process.env.GHL_CONTACT_WEBHOOK_URL = 'https://example.test/secret-webhook';
  let request;
  globalThis.fetch = async (url, options) => {
    request = { url, options };
    return { ok: true, status: 200 };
  };

  const result = await handler(event(validBody + '&admin=true'));
  assert.equal(result.statusCode, 200);
  assert.equal(request.url, process.env.GHL_CONTACT_WEBHOOK_URL);
  assert.equal(new URLSearchParams(request.options.body).get('admin'), null);
  assert.equal(new URLSearchParams(request.options.body).get('email'), 'chris@example.com');
});
