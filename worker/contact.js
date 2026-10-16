// Cloudflare Pages Function: POST /api/contact
// Sends the enquiry to info@vanguardprotection.lk using the Resend email API.
// Required secret:  RESEND_API_KEY   (Pages > Settings > Variables and Secrets)
// Optional:         MAIL_TO, MAIL_FROM  (the From domain must be verified in Resend)

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

const clean = (v, max) => String(v ?? '').replace(/[\r\n]+/g, ' ').trim().slice(0, max);

export async function onRequestPost({ request, env }) {
  let form;
  try {
    form = await request.formData();
  } catch {
    return json({ ok: false, error: 'bad_request' }, 400);
  }

  // Honeypot: bots fill the hidden "website" field. Pretend success.
  if (form.get('website')) return json({ ok: true });

  const name = clean(form.get('name'), 120);
  const email = clean(form.get('email'), 160);
  const phone = clean(form.get('phone'), 40);
  const topic = clean(form.get('topic'), 40) || 'general';
  const lang = clean(form.get('lang'), 5);
  const message = String(form.get('message') ?? '').trim().slice(0, 4000);

  if (!name || !message || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return json({ ok: false, error: 'invalid' }, 400);
  }
  if (!env.RESEND_API_KEY) return json({ ok: false, error: 'not_configured' }, 500);

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'content-type': 'application/json' },
    body: JSON.stringify({
      from: env.MAIL_FROM || 'Vanguard Website <website@vanguardprotection.lk>',
      to: [env.MAIL_TO || 'info@vanguardprotection.lk'],
      reply_to: email,
      subject: `Website enquiry (${topic}) from ${name}`,
      text: [`Name: ${name}`, `Email: ${email}`, `Phone: ${phone || '-'}`, `Topic: ${topic}`, `Site language: ${lang || '-'}`, '', message].join('\n'),
    }),
  });

  if (!res.ok) return json({ ok: false, error: 'send_failed' }, 502);
  return json({ ok: true });
}

export const onRequest = () => json({ ok: false, error: 'method_not_allowed' }, 405);
