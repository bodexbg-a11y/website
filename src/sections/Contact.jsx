import { useState, useEffect } from 'react';
import { T } from '../context/LangContext';

const FORMSPREE_URL = 'https://formspree.io/f/xredbrjz';

export default function Contact() {
  const [activeTab, setActiveTab] = useState('materials');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Add JSON-LD structured data for contact
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ContactPoint",
      "contactType": "Sales Support",
      "telephone": "+359 89 980 9607",
      "email": "bodexbg@gmail.com",
      "availableLanguage": ["bg", "en"]
    });
    document.head.appendChild(script);
    return () => script.remove();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = Object.fromEntries(new FormData(form));
    try {
      await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div style={{ marginBottom: 52 }}>
          <div className="eyebrow" data-reveal><T bg="Свържете се с нас" en="Get in touch" /></div>
          <h2 className="h2" data-reveal>
            <T bg={<>Изпратете <span className="accent">Запитване</span></>} en={<>Send Your <span className="accent">Enquiry</span></>} />
          </h2>
        </div>
        <div className="contact-wrap">
          {/* Info column */}
          <div data-reveal>
            <p className="lead" style={{ marginBottom: 36 }}>
              <T
                bg="Работим само с B2B клиенти — строителни фирми, проектанти, дистрибутори. Свържете се с нас за оферта."
                en="We work exclusively with B2B clients — construction firms, designers, distributors. Contact us for a quote."
              />
            </p>
            <div className="contact-details">
              {[
                {
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.21 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.57-1.57a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
                  labelBg: 'Телефон', labelEn: 'Phone',
                  value: '+359 89 980 9607',
                },
                {
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
                  labelBg: 'Email', labelEn: 'Email',
                  value: 'bodexbg@gmail.com',
                },
                {
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
                  labelBg: 'Офис', labelEn: 'Office',
                  valueBg: 'София, България', valueEn: 'Sofia, Bulgaria',
                },
                {
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>,
                  labelBg: 'Работно Време', labelEn: 'Working Hours',
                  valueBg: 'Пон–Пет: 09:00–18:00', valueEn: 'Mon–Fri: 09:00–18:00',
                },
              ].map((d, i) => (
                <div className="contact-detail" key={i}>
                  <div className="contact-icon">{d.icon}</div>
                  <div className="contact-detail-text">
                    <strong><T bg={d.labelBg} en={d.labelEn} /></strong>
                    <span>{d.value ? d.value : <T bg={d.valueBg} en={d.valueEn} />}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="b2b-notice">
              <p>
                <T
                  bg={<><strong>⚠ Само B2B:</strong> Работим САМО с регистрирани фирми. Физически лица не се обслужват. Минимална поръчка по договаряне.</>}
                  en={<><strong>⚠ B2B Only:</strong> We work ONLY with registered companies. No private individuals. Minimum order by negotiation.</>}
                />
              </p>
            </div>
          </div>

          {/* Form column */}
          <div data-reveal data-d="1">
            <div className="form-card">
              {submitted ? (
                <div className="form-success">
                  <div style={{ fontSize: '3rem', marginBottom: 16 }}>✅</div>
                  <h3><T bg="Изпратено!" en="Sent!" /></h3>
                  <p><T bg="Ще се свържем с вас до 24 работни часа." en="We'll get back to you within 24 business hours." /></p>
                </div>
              ) : (
                <>
                  <div className="form-tabs">
                    <button className={`form-tab${activeTab === 'materials' ? ' active' : ''}`} onClick={() => setActiveTab('materials')}>
                      <T bg="Материали" en="Materials" />
                    </button>
                    <button className={`form-tab${activeTab === 'services' ? ' active' : ''}`} onClick={() => setActiveTab('services')}>
                      <T bg="Услуги" en="Services" />
                    </button>
                  </div>

                  {activeTab === 'materials' && (
                    <form onSubmit={handleSubmit}>
                      <div className="form-row">
                        <div className="form-group"><label><T bg="Фирма *" en="Company *" /></label><input type="text" name="company" required /></div>
                        <div className="form-group"><label><T bg="Лице за контакт *" en="Contact person *" /></label><input type="text" name="contact" required /></div>
                      </div>
                      <div className="form-row">
                        <div className="form-group"><label>Email *</label><input type="email" name="email" required /></div>
                        <div className="form-group"><label><T bg="Телефон" en="Phone" /></label><input type="tel" name="phone" /></div>
                      </div>
                      <div className="form-group">
                        <label><T bg="Вид материал" en="Material type" /></label>
                        <select name="material_type">
                          <option value="" disabled defaultValue>—</option>
                          <option>Полиуретанова смола / PU Resin</option>
                          <option>Епоксидна смола / Epoxy Resin</option>
                          <option>Инжекционна пяна / Injection Foam</option>
                          <option>Инжекционен гел / Injection Gel</option>
                          <option>Минерален разтвор / Mineral Mortar</option>
                          <option>Набъбваща лента / Swellable Tape</option>
                          <option>Оборудване / Equipment</option>
                        </select>
                      </div>
                      <div className="form-row">
                        <div className="form-group"><label><T bg="Количество" en="Quantity" /></label><input type="text" name="quantity" placeholder="напр. 200 кг" /></div>
                        <div className="form-group"><label><T bg="Срок" en="Required by" /></label><input type="date" name="delivery_date" /></div>
                      </div>
                      <div className="form-group"><label><T bg="Описание на проекта" en="Project description" /></label><textarea name="description" /></div>
                      <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                        <T bg="Изпратете Запитване →" en="Send Enquiry →" />
                      </button>
                    </form>
                  )}

                  {activeTab === 'services' && (
                    <form onSubmit={handleSubmit}>
                      <div className="form-row">
                        <div className="form-group"><label><T bg="Фирма *" en="Company *" /></label><input type="text" name="company" required /></div>
                        <div className="form-group"><label><T bg="Лице за контакт *" en="Contact person *" /></label><input type="text" name="contact" required /></div>
                      </div>
                      <div className="form-row">
                        <div className="form-group"><label>Email *</label><input type="email" name="email" required /></div>
                        <div className="form-group"><label><T bg="Телефон *" en="Phone *" /></label><input type="tel" name="phone" required /></div>
                      </div>
                      <div className="form-group">
                        <label><T bg="Вид услуга" en="Service type" /></label>
                        <select name="service_type">
                          <option value="" disabled defaultValue>—</option>
                          <option>Укрепване на фундамент / Foundation reinforcement</option>
                          <option>Ремонт на пукнатини / Crack repair</option>
                          <option>Хидроизолация / Waterproofing</option>
                          <option>Уплътняване на фуги / Joint sealing</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label><T bg="Вид обект" en="Object type" /></label>
                        <select name="object_type">
                          <option value="" disabled defaultValue>—</option>
                          <option>Жилищна сграда</option>
                          <option>Търговски обект</option>
                          <option>Промишлена сграда</option>
                          <option>Инфраструктура</option>
                          <option>Обществена сграда</option>
                        </select>
                      </div>
                      <div className="form-group"><label><T bg="Адрес на обекта" en="Site address" /></label><input type="text" name="site_address" /></div>
                      <div className="form-group"><label><T bg="Описание / Текущо състояние" en="Description / Current condition" /></label><textarea name="description" style={{ minHeight: 110 }} /></div>
                      <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                        <T bg="Заявете Оглед / Оферта →" en="Request Site Visit / Quote →" />
                      </button>
                    </form>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
