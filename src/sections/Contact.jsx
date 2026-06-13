import { useState, useEffect } from 'react';
import { T } from '../context/LangContext';

const FORMSPREE_URL = 'https://formspree.io/f/xredbrjz';

/* Map product filter → material select value */
const FILTER_TO_MATERIAL = {
  resins:  'Полиуретанова смола / PU Resin',
  foam:    'Инжекционна пяна / Injection Foam',
  mortar:  'Минерален разтвор / Mineral Mortar',
  seal:    'Набъбваща лента / Swellable Tape',
  coating: 'Покритие / Coating',
  barrier: 'Хоризонтална бариера / Horizontal Barrier',
  equip:   'Оборудване / Equipment',
};

export default function Contact() {
  const [activeTab, setActiveTab]           = useState('materials');
  const [submitted, setSubmitted]           = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [selectedService, setSelectedService]   = useState('');
  const [projectDesc, setProjectDesc]           = useState('');
  const [highlight, setHighlight]               = useState(false); // flash effect on prefill

  /* ── Listen for product filter events ── */
  useEffect(() => {
    function onProductFilter(e) {
      const filter = e.detail?.filter;
      if (!filter || filter === 'all') return;
      const matVal = FILTER_TO_MATERIAL[filter];
      if (matVal) {
        setActiveTab('materials');
        setSelectedMaterial(matVal);
        setHighlight(true);
        setTimeout(() => setHighlight(false), 1800);
        /* scroll into view */
        setTimeout(() => {
          document.getElementById('contact')?.scrollIntoView({ behavior:'smooth', block:'start' });
        }, 100);
      }
    }
    window.addEventListener('setProductFilter', onProductFilter);
    return () => window.removeEventListener('setProductFilter', onProductFilter);
  }, []);

  /* ── Listen for Solutions prefill ── */
  useEffect(() => {
    function handlePrefill() {
      const tab  = localStorage.getItem('prefilledTab');
      const desc = localStorage.getItem('prefilledDescription');
      if (tab)  { setActiveTab(tab);   localStorage.removeItem('prefilledTab'); }
      if (desc) { setProjectDesc(desc); localStorage.removeItem('prefilledDescription'); }
      setHighlight(true);
      setTimeout(() => setHighlight(false), 1800);
    }
    window.addEventListener('prefillContactForm', handlePrefill);
    handlePrefill();
    return () => window.removeEventListener('prefillContactForm', handlePrefill);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    try {
      await fetch(FORMSPREE_URL, {
        method:'POST',
        headers:{ 'Content-Type':'application/json', Accept:'application/json' },
        body: JSON.stringify(data),
      });
    } catch {}
    setSubmitted(true);
  }

  const contactItems = [
    {
      icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.21 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.57-1.57a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
      labelBg:'Телефон', labelEn:'Phone', value:'+359 89 980 9607', href:'tel:+35989980960',
    },
    {
      icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
      labelBg:'Email', labelEn:'Email', value:'bodexbg@gmail.com', href:'mailto:bodexbg@gmail.com',
    },
    {
      icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>,
      labelBg:'Работно Време', labelEn:'Hours', valueBg:'Пон–Пет, 09:00–18:00', valueEn:'Mon–Fri, 09:00–18:00',
    },
    {
      icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
      labelBg:'Офис', labelEn:'Office', valueBg:'София, България', valueEn:'Sofia, Bulgaria',
    },
  ];

  return (
    <section id="contact" className="section contact2-section">
      <div className="container">

        {/* Section header */}
        <div className="contact2-hdr">
          <div>
            <div className="eyebrow"><T bg="Свържете се с нас" en="Get in touch" /></div>
            <h2 className="h2" style={{ marginTop:8 }}>
              <T bg={<>Изпратете <span className="accent">Запитване</span></>}
                 en={<>Send Your <span className="accent">Enquiry</span></>} />
            </h2>
          </div>
          <p className="lead contact2-sub">
            <T bg="Работим само с B2B клиенти — строителни фирми, проектанти, дистрибутори." en="We work exclusively with B2B clients — construction firms, designers, distributors." />
          </p>
        </div>

        {/* Two-column layout */}
        <div className="contact2-layout">

          {/* ── LEFT: info ── */}
          <div className="contact2-info">
            <div className="contact2-items">
              {contactItems.map((d,i) => (
                <div className="contact2-item" key={i}>
                  <div className="contact2-item__icon">{d.icon}</div>
                  <div>
                    <div className="contact2-item__label"><T bg={d.labelBg} en={d.labelEn} /></div>
                    {d.href
                      ? <a href={d.href} className="contact2-item__val contact2-item__val--link">{d.value}</a>
                      : <div className="contact2-item__val"><T bg={d.valueBg} en={d.valueEn} /></div>
                    }
                  </div>
                </div>
              ))}
            </div>

            {/* B2B notice */}
            <div className="contact2-b2b">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <p><T bg={<><strong>Само B2B:</strong> Работим само с регистрирани фирми. Физически лица не се обслужват.</>} en={<><strong>B2B Only:</strong> We work only with registered companies. No private individuals.</>} /></p>
            </div>

            {/* Partner badge */}
            <div className="contact2-partner">
              <div className="contact2-partner__logo">
                <img src="/arcan-logo-w-sub.png" alt="ARCAN Waterproofing" height="36" />
              </div>
              <div>
                <div className="contact2-partner__label"><T bg="Официален партньор" en="Official Partner" /></div>
                <div className="contact2-partner__name">ARCAN Waterproofing GmbH</div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: form ── */}
          <div className={`contact2-form-wrap${highlight ? ' contact2-form-wrap--highlight' : ''}`}>

            {submitted ? (
              <div className="contact2-success">
                <div className="contact2-success__icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3><T bg="Изпратено успешно!" en="Sent successfully!" /></h3>
                <p><T bg="Ще се свържем с вас до 24 работни часа." en="We'll get back to you within 24 working hours." /></p>
              </div>
            ) : (
              <>
                {/* Tabs */}
                <div className="contact2-tabs">
                  <button className={`contact2-tab${activeTab==='materials'?' contact2-tab--active':''}`} onClick={() => setActiveTab('materials')}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>
                    <T bg="Материали" en="Materials" />
                  </button>
                  <button className={`contact2-tab${activeTab==='services'?' contact2-tab--active':''}`} onClick={() => setActiveTab('services')}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
                    <T bg="Услуги" en="Services" />
                  </button>
                </div>

                {/* MATERIALS FORM */}
                {activeTab === 'materials' && (
                  <form className="contact2-form" onSubmit={handleSubmit}>
                    <input type="hidden" name="form_type" value="materials" />
                    <div className="contact2-row">
                      <div className="contact2-field">
                        <label htmlFor="cf-company"><T bg="Фирма" en="Company" /> <span aria-hidden="true">*</span></label>
                        <input id="cf-company" type="text" name="company" required autoComplete="organization" />
                      </div>
                      <div className="contact2-field">
                        <label htmlFor="cf-contact"><T bg="Лице за контакт" en="Contact person" /> <span aria-hidden="true">*</span></label>
                        <input id="cf-contact" type="text" name="contact" required autoComplete="name" />
                      </div>
                    </div>
                    <div className="contact2-row">
                      <div className="contact2-field">
                        <label htmlFor="cf-email">Email <span aria-hidden="true">*</span></label>
                        <input id="cf-email" type="email" name="email" required autoComplete="email" />
                      </div>
                      <div className="contact2-field">
                        <label htmlFor="cf-phone"><T bg="Телефон" en="Phone" /></label>
                        <input id="cf-phone" type="tel" name="phone" autoComplete="tel" />
                      </div>
                    </div>

                    {/* Material select — highlighted when prefilled */}
                    <div className={`contact2-field contact2-field--full${highlight && selectedMaterial ? ' contact2-field--prefilled' : ''}`}>
                      <label htmlFor="cf-material">
                        <T bg="Вид материал" en="Material type" />
                        {highlight && selectedMaterial && (
                          <span className="contact2-prefill-badge"><T bg="Автоматично избрано" en="Auto-selected" /></span>
                        )}
                      </label>
                      <select id="cf-material" name="material_type" value={selectedMaterial} onChange={e => setSelectedMaterial(e.target.value)}>
                        <option value="">—</option>
                        <option value="Полиуретанова смола / PU Resin">Полиуретанова смола / PU Resin</option>
                        <option value="Епоксидна смола / Epoxy Resin">Епоксидна смола / Epoxy Resin</option>
                        <option value="Инжекционна пяна / Injection Foam">Инжекционна пяна / Injection Foam</option>
                        <option value="Инжекционен гел / Injection Gel">Инжекционен гел / Injection Gel</option>
                        <option value="Минерален разтвор / Mineral Mortar">Минерален разтвор / Mineral Mortar</option>
                        <option value="Набъбваща лента / Swellable Tape">Набъбваща лента / Swellable Tape</option>
                        <option value="Покритие / Coating">Покритие / Coating</option>
                        <option value="Хоризонтална бариера / Horizontal Barrier">Хоризонтална бариера / Horizontal Barrier</option>
                        <option value="Оборудване / Equipment">Оборудване / Equipment</option>
                      </select>
                    </div>

                    <div className="contact2-row">
                      <div className="contact2-field">
                        <label htmlFor="cf-qty"><T bg="Количество" en="Quantity" /></label>
                        <input id="cf-qty" type="text" name="quantity" placeholder="напр. 200 кг" />
                      </div>
                      <div className="contact2-field">
                        <label htmlFor="cf-date"><T bg="Срок" en="Required by" /></label>
                        <input id="cf-date" type="date" name="delivery_date" />
                      </div>
                    </div>
                    <div className="contact2-field contact2-field--full">
                      <label htmlFor="cf-desc"><T bg="Описание на проекта" en="Project description" /></label>
                      <textarea id="cf-desc" name="description" rows="3" value={projectDesc} onChange={e => setProjectDesc(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary contact2-submit">
                      <T bg="Изпратете Запитване" en="Send Enquiry" />
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </button>
                  </form>
                )}

                {/* SERVICES FORM */}
                {activeTab === 'services' && (
                  <form className="contact2-form" onSubmit={handleSubmit}>
                    <input type="hidden" name="form_type" value="services" />
                    <div className="contact2-row">
                      <div className="contact2-field">
                        <label htmlFor="sf-company"><T bg="Фирма" en="Company" /> <span aria-hidden="true">*</span></label>
                        <input id="sf-company" type="text" name="company" required autoComplete="organization" />
                      </div>
                      <div className="contact2-field">
                        <label htmlFor="sf-contact"><T bg="Лице за контакт" en="Contact person" /> <span aria-hidden="true">*</span></label>
                        <input id="sf-contact" type="text" name="contact" required autoComplete="name" />
                      </div>
                    </div>
                    <div className="contact2-row">
                      <div className="contact2-field">
                        <label htmlFor="sf-email">Email <span aria-hidden="true">*</span></label>
                        <input id="sf-email" type="email" name="email" required autoComplete="email" />
                      </div>
                      <div className="contact2-field">
                        <label htmlFor="sf-phone"><T bg="Телефон *" en="Phone *" /></label>
                        <input id="sf-phone" type="tel" name="phone" required autoComplete="tel" />
                      </div>
                    </div>
                    <div className="contact2-field contact2-field--full">
                      <label htmlFor="sf-service"><T bg="Вид услуга" en="Service type" /></label>
                      <select id="sf-service" name="service_type" value={selectedService} onChange={e => setSelectedService(e.target.value)}>
                        <option value="">—</option>
                        <option value="Укрепване на фундамент">Укрепване на фундамент / Foundation reinforcement</option>
                        <option value="Ремонт на пукнатини">Ремонт на пукнатини / Crack repair</option>
                        <option value="Хидроизолация">Хидроизолация / Waterproofing</option>
                        <option value="Уплътняване на фуги">Уплътняване на фуги / Joint sealing</option>
                        <option value="Спиране на течове">Спиране на активни течове / Leak stopping</option>
                        <option value="Инженерна консултация">Инженерна консултация / Engineering consultation</option>
                      </select>
                    </div>
                    <div className="contact2-row">
                      <div className="contact2-field">
                        <label htmlFor="sf-obj"><T bg="Вид обект" en="Object type" /></label>
                        <select id="sf-obj" name="object_type">
                          <option value="">—</option>
                          <option>Жилищна сграда</option>
                          <option>Търговски обект</option>
                          <option>Промишлена сграда</option>
                          <option>Инфраструктура</option>
                          <option>Обществена сграда</option>
                        </select>
                      </div>
                      <div className="contact2-field">
                        <label htmlFor="sf-addr"><T bg="Адрес на обекта" en="Site address" /></label>
                        <input id="sf-addr" type="text" name="site_address" />
                      </div>
                    </div>
                    <div className="contact2-field contact2-field--full">
                      <label htmlFor="sf-desc"><T bg="Описание / Текущо състояние" en="Description / Current condition" /></label>
                      <textarea id="sf-desc" name="description" rows="3" value={projectDesc} onChange={e => setProjectDesc(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary contact2-submit">
                      <T bg="Заявете Оглед / Оферта" en="Request Site Visit / Quote" />
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </button>
                  </form>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
