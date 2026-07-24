import { T } from '../context/LangContext';

const kits = [
  {
    id: 'mini',
    badge: 'MINI',
    priceBg: '279 €', priceEn: '279 €',
    titleBg: 'Мини Тестов Комплект', titleEn: 'Mini Test Kit',
    tagBg: 'За запознаване с материала', tagEn: 'First material introduction',
    descBg: 'За проба на реакцията на пяната, работата през помпа и поведението в пукнатина. Не за обект.',
    descEn: 'To test foam reaction, pump flow and crack behaviour. Not for a full project.',
    items: [
      { nameBg: 'HydroBloc 510-2 — микропяна', nameEn: 'HydroBloc 510-2 — microfoam', qty: '1 × 10 kg' },
      { nameBg: 'Пакери PK-6', nameEn: 'Packers PK-6', qty: '100 бр.' },
      { nameBg: 'Техническа инструкция PDF', nameEn: 'Technical instruction PDF', qty: '✓' },
      { nameBg: 'Консултация по приложение', nameEn: 'Application consultation', qty: '15 мин.' },
    ],
    color: '#2452A4', light: '#EEF4FF', border: '#BFDBFE',
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/></svg>,
  },
  {
    id: 'standard',
    badge: 'STANDARD',
    priceBg: '499 €', priceEn: '499 €',
    titleBg: 'Стандартен Тестов Комплект', titleEn: 'Standard Test Kit',
    tagBg: 'За малък участък или сравнение на 2 материала', tagEn: 'Small area or comparing two materials',
    descBg: 'За малък реален участък — пяна + основна PU смола. Клиентът получава избор и може да сравни два материала.',
    descEn: 'For a small real area — foam + base PU resin. Client gets a choice and can compare two materials.',
    items: [
      { nameBg: 'HydroBloc PU 500 A+B — набъбваща PU смола', nameEn: 'HydroBloc PU 500 A+B — swelling PU resin', qty: '1 комплект ~20 kg' },
      { nameBg: 'HydroBloc 510-2 — микропяна', nameEn: 'HydroBloc 510-2 — microfoam', qty: '1 × 10 kg' },
      { nameBg: 'Пакери PK-6', nameEn: 'Packers PK-6', qty: '100 бр.' },
      { nameBg: 'Техническа консултация + подбор', nameEn: 'Technical consultation + selection', qty: '✓' },
    ],
    color: '#059669', light: '#ECFDF5', border: '#A7F3D0',
    featured: true,
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,
  },
  {
    id: 'object',
    badge: 'OBJECT',
    priceBg: '999 €', priceEn: '999 €',
    titleBg: 'Обектов Тестов Комплект', titleEn: 'Object Test Kit',
    tagBg: 'За реална проба на конкретен проблемен участък', tagEn: 'Real-site test on specific problem area',
    descBg: 'Пълен набор за реален обект — два типа материали, почистващ разтворител, 200 пакера. Консултация и препоръка включени.',
    descEn: 'Full set for a real site — two material types, cleaner, 200 packers. Consultation and recommendation included.',
    items: [
      { nameBg: 'HydroBloc PU 500 A+B — набъбваща PU смола', nameEn: 'HydroBloc PU 500 A+B', qty: '2 комплекта ~40 kg' },
      { nameBg: 'HydroBloc 510-2 — микропяна', nameEn: 'HydroBloc 510-2 — microfoam', qty: '2 × 10 kg' },
      { nameBg: 'HydroSolv 520 — почистващ разтворител', nameEn: 'HydroSolv 520 — cleaner', qty: '1 × 10 kg' },
      { nameBg: 'Пакери PK-6', nameEn: 'Packers PK-6', qty: '200 бр.' },
      { nameBg: 'Техническа консултация', nameEn: 'Technical consultation', qty: '30–45 мин.' },
      { nameBg: 'Препоръка за конкретния обект', nameEn: 'Site-specific recommendation', qty: '✓' },
      { nameBg: 'Отстъпка за следваща поръчка', nameEn: 'Discount on next order', qty: '5–10%' },
    ],
    color: '#7C3AED', light: '#F5F3FF', border: '#DDD6FE',
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M7 8l2 2 4-4"/></svg>,
  },
];

export default function TestKits() {
  const handleOrder = (titleBg) => {
    window.dispatchEvent(new CustomEvent('addProductEnquiry', {
      detail: { name: titleBg, badge: 'TEST KIT', cat: 'equip' }
    }));
    setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior:'smooth', block:'start' }), 80);
  };

  return (
    <section id="test-kits" className="section tk-section">
      <div className="container">
        <div className="tk-hdr">
          <div>
            <div className="eyebrow"><T bg="Тестови комплекти" en="Test Kits" /></div>
            <h2 className="h2" style={{ marginTop:8 }}>
              <T bg={<>Опитайте Материалите <span className="accent">Преди Голяма Поръчка</span></>}
                 en={<>Try the Materials <span className="accent">Before a Large Order</span></>} />
            </h2>
          </div>
          <p className="lead tk-sub">
            <T
              bg="Не купувайте сляпо. Тествайте реакцията на материала на малък участък преди пълен обем. Цените са без ДДС. Доставката не е включена."
              en="Don't buy blind. Test material reaction on a small area before full-scale commitment. Prices ex VAT. Delivery not included." />
          </p>
        </div>

        <div className="tk-grid">
          {kits.map((k, i) => (
            <div key={k.id}
              className={`tk-card${k.featured ? ' tk-card--featured' : ''}`}
              style={{ '--c': k.color, '--bg': k.light, '--bdr': k.border }}
              data-reveal data-d={String(i)}
            >
              {k.featured && <div className="tk-best"><T bg="Най-продаван" en="Best seller" /></div>}

              <div className="tk-card__head">
                <div className="tk-card__icon" aria-hidden="true">{k.icon}</div>
                <span className="tk-badge">{k.badge}</span>
              </div>

              <h3 className="tk-card__title"><T bg={k.titleBg} en={k.titleEn} /></h3>
              <p className="tk-card__tag"><T bg={k.tagBg} en={k.tagEn} /></p>
              <p className="tk-card__desc"><T bg={k.descBg} en={k.descEn} /></p>

              <div className="tk-items">
                <div className="tk-items__label"><T bg="Състав" en="Contents" /></div>
                {k.items.map((item, j) => (
                  <div className="tk-item" key={j}>
                    <svg className="tk-item__check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                    <span className="tk-item__name"><T bg={item.nameBg} en={item.nameEn} /></span>
                    <span className="tk-item__qty">{item.qty}</span>
                  </div>
                ))}
              </div>

              <div className="tk-card__foot">
                <div className="tk-price">
                  <span className="tk-price__num"><T bg={k.priceBg} en={k.priceEn} /></span>
                  <span className="tk-price__vat"><T bg="без ДДС · без доставка" en="ex VAT · delivery extra" /></span>
                </div>
                <button className="tk-btn" style={{ background: k.color }} onClick={() => handleOrder(k.titleBg)}>
                  <T bg="Поръчайте" en="Order" />
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="tk-delivery-note">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
          <T bg="Доставката не е включена. Стойността зависи от вашия регион. Свържете се с нас за точна оферта с доставка."
             en="Delivery not included. Cost depends on your region. Contact us for a quote including delivery." />
        </div>

        <div className="tk-disclaimer">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <p><T
            bg="Тестовият комплект е предназначен за първоначална проба и запознаване с материала. За гарантирано техническо решение на конкретен обект е необходим предварителен анализ, снимки и информация за проблема."
            en="The test kit is for initial trial only. For a guaranteed technical solution on a specific site, preliminary analysis and problem information are required." /></p>
        </div>
      </div>
    </section>
  );
}
