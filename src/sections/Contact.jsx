import { useState, useEffect } from 'react';
import { T } from '../context/LangContext';

const FORMSPREE_URL = 'https://formspree.io/f/xredbrjz';

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
  const [activeTab, setActiveTab]     = useState('materials');
  const [submitted, setSubmitted]     = useState(false);
  const [selectedMaterial, setMat]    = useState('');
  const [selectedService, setSvc]     = useState('');
  const [projectDesc, setDesc]        = useState('');
  const [enquiredProducts, setProds]  = useState([]); // [{name, badge}]
  const [highlight, setHighlight]     = useState(false);

  /* ── Listen: product card "Запитване" ── */
  useEffect(() => {
    function onAdd(e) {
      const { name, badge } = e.detail || {};
      if (!name) return;
      setActiveTab('materials');
      setProds(prev => prev.find(p => p.name === name) ? prev : [...prev, { name, badge }]);
      setHighlight(true);
      setTimeout(() => setHighlight(false), 2000);
    }
    window.addEventListener('addProductEnquiry', onAdd);
    return () => window.removeEventListener('addProductEnquiry', onAdd);
  }, []);

  /* ── Listen: filter category → set material type ── */
  useEffect(() => {
    function onFilter(e) {
      const filter = e.detail?.filter;
      if (!filter || filter === 'all') return;
      const mat = FILTER_TO_MATERIAL[filter];
      if (mat) { setActiveTab('materials'); setMat(mat); setHighlight(true); setTimeout(() => setHighlight(false), 2000); }
    }
    window.addEventListener('setProductFilter', onFilter);
    return () => window.removeEventListener('setProductFilter', onFilter);
  }, []);

  /* ── Listen: Solutions consultation prefill ── */
  useEffect(() => {
    function onPrefill() {
      const tab  = localStorage.getItem('prefilledTab');
      const desc = localStorage.getItem('prefilledDescription');
      if (tab)  { setActiveTab(tab); localStorage.removeItem('prefilledTab'); }
      if (desc) { setDesc(desc);     localStorage.removeItem('prefilledDescription'); }
      setHighlight(true); setTimeout(() => setHighlight(false), 2000);
    }
    window.addEventListener('prefillContactForm', onPrefill);
    onPrefill();
    return () => window.removeEventListener('prefillContactForm', onPrefill);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    if (enquiredProducts.length > 0) {
      data.selected_products = enquiredProducts.map(p => p.name).join(', ');
    }
    try {
      await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
    } catch {}
    setSubmitted(true);
  }

  const removeProduct = (name) => setProds(prev => prev.filter(p => p.name !== name));

  return (
    <section id="contact" className="ct-section">

      {/* ── Blue background top ── */}
      <div className="ct-hero">
        <div className="ct-hero__pattern" aria-hidden="true" />
        <div className="container ct-hero__inner">
          <div className="ct-hero__text">
            <div className="ct-eyebrow"><T bg="Свържете се с нас" en="Get in touch" /></div>
            <h2 className="ct-hero__h">
              <T bg={<>Изпратете <span className="ct-hero__h--accent">Запитване</span></>}
                 en={<>Send Your <span className="ct-hero__h--accent">Enquiry</span></>} />
            </h2>
            <p className="ct-hero__sub">
              <T bg="Само B2B — строителни фирми, проектанти, дистрибутори." en="B2B only — construction firms, designers, distributors." />
            </p>
          </div>
          <div className="ct-hero__stats">
            {[
              { num:'24h', lbl:['Отговор','Response'] },
              { num:'B2B', lbl:['Само едро','Wholesale'] },
              { num:'DE',  lbl:['Произход','Origin'] },
            ].map((s,i) => (
              <div className="ct-hero__stat" key={i}>
                <span className="ct-hero__stat-num">{s.num}</span>
                <span className="ct-hero__stat-lbl"><T bg={s.lbl[0]} en={s.lbl[1]} /></span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="container ct-body">
        <div className="ct-layout">

          {/* LEFT info */}
          <div className="ct-info">
            {[
              { icon:'phone', labelBg:'Телефон', labelEn:'Phone', value:'+359 89 980 9607', href:'tel:+35989980960' },
              { icon:'mail',  labelBg:'Email',   labelEn:'Email',  value:'bodexbg@gmail.com', href:'mailto:bodexbg@gmail.com' },
              { icon:'clock', labelBg:'Работно Време', labelEn:'Hours', valueBg:'Пон–Пет, 09:00–18:00', valueEn:'Mon–Fri, 09:00–18:00' },
              { icon:'map',   labelBg:'Офис', labelEn:'Office', valueBg:'София, България', valueEn:'Sofia, Bulgaria' },
            ].map((d,i) => (
              <div className="ct-info__item" key={i}>
                <div className="ct-info__icon" aria-hidden="true">
                  {d.icon==='phone' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.21 2 2 0 012.22 0h3a2 2 0 012 1.72 12 12 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.57-1.57a2 2 0 012.11-.45 12 12 0 002.81.7A2 2 0 0122 16.92z"/></svg>}
                  {d.icon==='mail'  && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>}
                  {d.icon==='clock' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>}
                  {d.icon==='map'   && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>}
                </div>
                <div>
                  <div className="ct-info__label"><T bg={d.labelBg} en={d.labelEn} /></div>
                  {d.href
                    ? <a href={d.href} className="ct-info__val ct-info__val--link">{d.value}</a>
                    : <div className="ct-info__val"><T bg={d.valueBg} en={d.valueEn} /></div>
                  }
                </div>
              </div>
            ))}

            {/* Partner */}
            <a
              href="https://www.arcan-waterproofing.com/"
              target="_blank" rel="noreferrer"
              className="ct-partner"
              aria-label="ARCAN Waterproofing — официален партньор"
            >
              <img src="/arcan-logo-w-sub.png" alt="ARCAN Waterproofing" className="ct-partner__logo" />
              <div>
                <div className="ct-partner__label"><T bg="Официален партньор" en="Official Partner" /></div>
                <div className="ct-partner__name">ARCAN Waterproofing</div>
              </div>
            </a>
          </div>

          {/* RIGHT form */}
          <div className={`ct-form-card${highlight ? ' ct-form-card--hl' : ''}`}>

            {submitted ? (
              <div className="ct-success">
                <div className="ct-success__icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3><T bg="Изпратено успешно!" en="Sent successfully!" /></h3>
                <p><T bg="Ще се свържем с вас до 24 работни часа." en="We'll contact you within 24 working hours." /></p>
              </div>
            ) : (
              <>
                {/* Tabs */}
                <div className="ct-tabs">
                  {['materials','services'].map(tab => (
                    <button key={tab} className={`ct-tab${activeTab===tab?' ct-tab--active':''}`} onClick={()=>setActiveTab(tab)}>
                      {tab==='materials'
                        ? <><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg><T bg="Материали" en="Materials" /></>
                        : <><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg><T bg="Услуги" en="Services" /></>
                      }
                    </button>
                  ))}
                </div>

                {/* Selected products list */}
                {activeTab === 'materials' && enquiredProducts.length > 0 && (
                  <div className="ct-products-list">
                    <div className="ct-products-list__label">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
                      <T bg="Избрани продукти" en="Selected products" />
                      <span className="ct-products-list__count">{enquiredProducts.length}</span>
                    </div>
                    <div className="ct-products-list__items">
                      {enquiredProducts.map((p,i) => (
                        <div className="ct-prod-tag" key={i}>
                          <span className="ct-prod-tag__badge">{p.badge}</span>
                          <span className="ct-prod-tag__name">{p.name}</span>
                          <button className="ct-prod-tag__rm" onClick={() => removeProduct(p.name)} aria-label={`Премахни ${p.name}`}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* MATERIALS FORM */}
                {activeTab === 'materials' && (
                  <form className="ct-form" onSubmit={handleSubmit}>
                    <input type="hidden" name="form_type" value="materials" />
                    {enquiredProducts.length > 0 && (
                      <input type="hidden" name="selected_products" value={enquiredProducts.map(p=>p.name).join(', ')} />
                    )}
                    <div className="ct-row">
                      <div className="ct-field"><label htmlFor="mf-co"><T bg="Фирма *" en="Company *" /></label><input id="mf-co" type="text" name="company" required autoComplete="organization" /></div>
                      <div className="ct-field"><label htmlFor="mf-cn"><T bg="Лице за контакт *" en="Contact *" /></label><input id="mf-cn" type="text" name="contact" required autoComplete="name" /></div>
                    </div>
                    <div className="ct-row">
                      <div className="ct-field"><label htmlFor="mf-em">Email *</label><input id="mf-em" type="email" name="email" required autoComplete="email" /></div>
                      <div className="ct-field"><label htmlFor="mf-ph"><T bg="Телефон" en="Phone" /></label><input id="mf-ph" type="tel" name="phone" autoComplete="tel" /></div>
                    </div>
                    <div className={`ct-field ct-field--full${highlight && selectedMaterial ? ' ct-field--hl' : ''}`}>
                      <label htmlFor="mf-mt">
                        <T bg="Вид материал" en="Material type" />
                        {highlight && selectedMaterial && <span className="ct-hl-badge"><T bg="Избрано" en="Selected" /></span>}
                      </label>
                      <select id="mf-mt" name="material_type" value={selectedMaterial} onChange={e=>setMat(e.target.value)}>
                        <option value="">— <T bg="изберете" en="select" /> —</option>
                        <option>Полиуретанова смола / PU Resin</option>
                        <option>Епоксидна смола / Epoxy Resin</option>
                        <option>Инжекционна пяна / Injection Foam</option>
                        <option>Инжекционен гел / Injection Gel</option>
                        <option>Минерален разтвор / Mineral Mortar</option>
                        <option>Набъбваща лента / Swellable Tape</option>
                        <option>Покритие / Coating</option>
                        <option>Хоризонтална бариера / Horizontal Barrier</option>
                        <option>Оборудване / Equipment</option>
                      </select>
                    </div>
                    <div className="ct-row">
                      <div className="ct-field"><label htmlFor="mf-qt"><T bg="Количество" en="Quantity" /></label><input id="mf-qt" type="text" name="quantity" placeholder="напр. 200 кг" /></div>
                      <div className="ct-field"><label htmlFor="mf-dt"><T bg="Срок" en="Required by" /></label><input id="mf-dt" type="date" name="delivery_date" /></div>
                    </div>
                    <div className="ct-field ct-field--full">
                      <label htmlFor="mf-ds"><T bg="Описание на проекта" en="Project description" /></label>
                      <textarea id="mf-ds" name="description" rows="3" value={projectDesc} onChange={e=>setDesc(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary ct-submit">
                      <T bg="Изпратете Запитване" en="Send Enquiry" />
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </button>
                  </form>
                )}

                {/* SERVICES FORM */}
                {activeTab === 'services' && (
                  <form className="ct-form" onSubmit={handleSubmit}>
                    <input type="hidden" name="form_type" value="services" />
                    <div className="ct-row">
                      <div className="ct-field"><label htmlFor="sf-co"><T bg="Фирма *" en="Company *" /></label><input id="sf-co" type="text" name="company" required autoComplete="organization" /></div>
                      <div className="ct-field"><label htmlFor="sf-cn"><T bg="Лице за контакт *" en="Contact *" /></label><input id="sf-cn" type="text" name="contact" required autoComplete="name" /></div>
                    </div>
                    <div className="ct-row">
                      <div className="ct-field"><label htmlFor="sf-em">Email *</label><input id="sf-em" type="email" name="email" required autoComplete="email" /></div>
                      <div className="ct-field"><label htmlFor="sf-ph"><T bg="Телефон *" en="Phone *" /></label><input id="sf-ph" type="tel" name="phone" required autoComplete="tel" /></div>
                    </div>
                    <div className="ct-field ct-field--full">
                      <label htmlFor="sf-sv"><T bg="Вид услуга" en="Service type" /></label>
                      <select id="sf-sv" name="service_type" value={selectedService} onChange={e=>setSvc(e.target.value)}>
                        <option value="">—</option>
                        <option>Укрепване на фундамент / Foundation reinforcement</option>
                        <option>Ремонт на пукнатини / Crack repair</option>
                        <option>Хидроизолация / Waterproofing</option>
                        <option>Уплътняване на фуги / Joint sealing</option>
                        <option>Спиране на течове / Leak stopping</option>
                        <option>Инженерна консултация / Engineering consultation</option>
                      </select>
                    </div>
                    <div className="ct-row">
                      <div className="ct-field">
                        <label htmlFor="sf-ob"><T bg="Вид обект" en="Object type" /></label>
                        <select id="sf-ob" name="object_type">
                          <option value="">—</option>
                          <option>Жилищна сграда</option><option>Търговски обект</option>
                          <option>Промишлена сграда</option><option>Инфраструктура</option>
                          <option>Обществена сграда</option>
                        </select>
                      </div>
                      <div className="ct-field"><label htmlFor="sf-ad"><T bg="Адрес на обекта" en="Site address" /></label><input id="sf-ad" type="text" name="site_address" /></div>
                    </div>
                    <div className="ct-field ct-field--full">
                      <label htmlFor="sf-ds"><T bg="Описание / Текущо състояние" en="Description / Current condition" /></label>
                      <textarea id="sf-ds" name="description" rows="3" value={projectDesc} onChange={e=>setDesc(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary ct-submit">
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
