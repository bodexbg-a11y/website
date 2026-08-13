/**
 * Vercel Serverless Function — /api/submit-lead
 * Принимает данные формы, пересылает в CRM с сервера (ключ скрыт)
 * + параллельно отправляет в Formspree как бэкап
 */

const CRM_URL      = 'https://virtual-office-f48m.onrender.com/api/website-leads/webhook';
const CRM_KEY      = process.env.CRM_WEBHOOK_KEY || '78bf5a9e3b2c86b80a3b45012b90eb8bb636734584bd6a5f';
const FORMSPREE_URL = 'https://formspree.io/f/xredbrjz';

export default async function handler(req, res) {
  /* Only POST */
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = req.body || {};

  /* Map form fields → CRM schema */
  const crmPayload = {
    company_name:  body.company       || '',
    contact_name:  body.contact       || '',
    phone:         body.phone         || '',
    email:         body.email         || '',
    city:          body.site_address  || '',
    object_type:   body.object_type   || body.service_type  || '',
    timing:        body.delivery_date || '',
    executor:      body.form_type === 'services'
                     ? 'Трябва ми изпълнител'
                     : 'Търся материали',
    area:          body.quantity      || '',
    // Extra context passed to CRM as optional fields
    ...(body.material_type     && { material_type:     body.material_type }),
    ...(body.selected_products && { selected_products: body.selected_products }),
    ...(body.description       && { description:       body.description }),
    source: 'bodexbg.com',
  };

  /* Fire both requests in parallel */
  const [crmResult, formspreeResult] = await Promise.allSettled([
    fetch(CRM_URL, {
      method:  'POST',
      headers: {
        'Content-Type':  'application/json',
        'X-Webhook-Key': CRM_KEY,
      },
      body: JSON.stringify(crmPayload),
    }),
    fetch(FORMSPREE_URL, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body:    JSON.stringify(body),
    }),
  ]);

  const crmOk       = crmResult.status       === 'fulfilled' && crmResult.value.ok;
  const formspreeOk = formspreeResult.status === 'fulfilled' && formspreeResult.value.ok;

  console.log(`CRM: ${crmOk ? 'OK' : 'FAILED'} | Formspree: ${formspreeOk ? 'OK' : 'FAILED'}`);

  /* Always return 200 to user — don't block UX if CRM is down */
  return res.status(200).json({ ok: true, crm: crmOk, formspree: formspreeOk });
}
