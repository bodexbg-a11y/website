import { T } from '../context/LangContext';

const kits = [
  {
    id: 'mini',
    cans: '2',
    priceBg: '279 €', priceEn: '279 €',
    titleBg: 'Стартов Тестов Комплект', titleEn: 'Starter Test Kit',
    tagBg: 'За запознаване с материала', tagEn: 'First material introduction',
    descBg: 'Две канистри за първа проба — реакция на пяната, работа през помпа, поведение в пукнатина. Не за обект.',
    descEn: 'Two canisters for a first trial — foam reaction, pump flow, crack behaviour. Not for a full project.',
    items: [
      { nameBg: 'HydroBloc 510-2 — микропяна', nameEn: 'HydroBloc 510-2 — microfoam', qty: '2 × 10 kg' },
      { nameBg: 'Техническа инструкция PDF', nameEn: 'Technical instruction PDF', qty: '✓' },
      { nameBg: 'Консултация по приложение', nameEn: 'Application consultation', qty: '15 мин.' },
    ],
    color: '#2452A4', light: '#EEF4FF', border: '#BFDBFE',
    icon: (
      <svg width="26" height="26" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="3" width="9" height="26" rx="2.5"/>
        <rect x="18" y="3" width="9" height="26" rx="2.5"/>
      </svg>
    ),
  },
  {
    id: 'standard',
    cans: '5',
    priceBg: '499 €', priceEn: '499 €',
    titleBg: 'Стандартен Тестов Комплект', titleEn: 'Standard Test Kit',
    tagBg: 'За малък реален участък', tagEn: 'For a small real-site area',
    descBg: 'Пет канистри — пяна и основна PU смола. За малък реален участък или сравнение на два материала.',
    descEn: 'Five canisters — foam and base PU resin. For a small real area or comparing two materials.',
    items: [
      { nameBg: 'HydroBloc 510-2 — микропяна', nameEn: 'HydroBloc 510-2 — microfoam', qty: '2 × 10 kg' },
      { nameBg: 'HydroBloc PU 500 A+B — набъбваща смола', nameEn: 'HydroBloc PU 500 A+B — swelling resin', qty: '1 компл. ~21 kg' },
      { nameBg: 'HydroSolv 520 — почистващ разтворител', nameEn: 'HydroSolv 520 — cleaner', qty: '1 × 10 kg' },
      { nameBg: 'Техническа консултация + подбор', nameEn: 'Technical consultation + selection', qty: '✓' },
    ],
    color: '#059669', light: '#ECFDF5', border: '#A7F3D0',
    featured: true,
    icon: (
      <svg width="26" height="26" viewBox="0 0 40 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1"  y="3" width="7" height="26" rx="2"/>
        <rect x="11" y="3" width="7" height="26" rx="2"/>
        <rect x="21" y="3" width="7" height="26" rx="2"/>
        <rect x="31" y="8" width="7" height="16" rx="2"/>
      </svg>
    ),
  },
  {
    id: 'object',
    cans: '10',
    priceBg: '999 €', priceEn: '999 €',
    titleBg: 'Обектов Тестов Комплект', titleEn: 'Object Test Kit',
    tagBg: 'За реална проба на конкретен обект', tagEn: 'Full real-site test',
    descBg: 'Десет канистри за реален обект — два типа материали и почистващ разтворител. Консултация и препоръка включени.',
    descEn: 'Ten canisters for a real site — two material types and cleaner. Consultation and site recommendation included.',
    items: [
      { nameBg: 'HydroBloc 510-2 — микропяна', nameEn: 'HydroBloc 510-2 — microfoam', qty: '4 × 10 kg' },
      { nameBg: 'HydroBloc PU 500 A+B — набъбваща смола', nameEn: 'HydroBloc PU 500 A+B — swelling resin', qty: '2 компл. ~42 kg' },
      { nameBg: 'HydroSolv 520 — почистващ разтворител', nameEn: 'HydroSolv 520 — cleaner', qty: '2 × 10 kg' },
      { nameBg: 'Техническа консултация', nameEn: 'Technical consultation', qty: '30–45 мин.' },
      { nameBg: 'Препоръка за конкретния обект', nameEn: 'Site-specific recommendation', qty: '✓' },
      { nameBg: 'Отстъпка за следваща поръчка', nameEn: 'Discount on next order', qty: '5–10%' },
    ],
    color: '#7C3AED', light: '#F5F3FF', border: '#DDD6FE',
    icon: (
      <svg width="26" height="26" viewBox="0 0 56 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1"  y="3" width="6" height="26" rx="1.5"/>
        <rect x="9"  y="3" width="6" height="26" rx="1.5"/>
        <rect x="17" y="3" width="6" height="26" rx="1.5"/>
        <rect x="25" y="3" width="6" height="26" rx="1.5"/>
        <rect x="33" y="3" width="6" height="26" rx="1.5"/>
        <rect x="41" y="3" width="6" height="26" rx="1.5"/>
        <rect x="49" y="3" width="6" height="26" rx="1.5"/>
      </svg>
    ),
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
              <T
                bg={<>Опитайте Материалите <span className="accent">Преди Голяма Поръчка</span></>}
                en={<>Try the Materials <span className="accent">Before a Large Order</span></>}
              />
            </h2>
          </div>
          <p className="lead tk-sub">
            <T
              bg="Не купувайте сляпо. Изберете обем — 2, 5 или 10 канистри. Цените са без ДДС. Доставката не е включена."
              en="Don't buy blind. Choose a volume — 2, 5 or 10 canisters. Prices ex VAT. Delivery not included."
            />
          </p>
        </div>

        {/* Flexible materials note */}
        <div className="tk-flex-note">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <polyline points="9 12 11 14 15 10"/>
          </svg>
          <span>
            <T
              bg="В тестовия комплект могат да бъдат включени всякакви материали по ваш избор. Материалите се уточняват с мениджъра при запитване."
              en="Any materials of your choice can be included in the test kit. Materials are confirmed with the manager upon enquiry."
            />
          </span>
        </div>

        <div className="tk-grid">
          {kits.map((k, i) => (
            <div
              key={k.id}
              className={`tk-card${k.featured ? ' tk-card--featured' : ''}`}
              style={{ '--c': k.color, '--bg': k.light, '--bdr': k.border }}
              data-reveal data-d={String(i)}
            >
              {k.featured && (
                <div className="tk-best"><T bg="Най-популярен" en="Most popular" /></div>
              )}

              {/* Head: icon + canister count */}
              <div className="tk-card__head">
                <div className="tk-card__icon" aria-hidden="true">{k.icon}</div>
                <div className="tk-cans-pill">
                  <span className="tk-cans-pill__num">{k.cans}</span>
                  <span className="tk-cans-pill__lbl"><T bg="канистри" en="canisters" /></span>
                </div>
              </div>

              <h3 className="tk-card__title"><T bg={k.titleBg} en={k.titleEn} /></h3>
              <p className="tk-card__tag"><T bg={k.tagBg} en={k.tagEn} /></p>
              <p className="tk-card__desc"><T bg={k.descBg} en={k.descEn} /></p>

              <div className="tk-items">
                <div className="tk-items__label"><T bg="Материали в комплекта" en="Kit contents" /></div>
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

        <div className="tk-notes">
          <div className="tk-delivery-note">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
            <T bg="Доставката не е включена. Стойността зависи от вашия регион." en="Delivery not included. Cost depends on your region." />
          </div>
          <div className="tk-disclaimer">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <p><T
              bg="Тестовият комплект е предназначен за първоначална проба и запознаване с материала. За гарантирано техническо решение на конкретен обект е необходим предварителен анализ, снимки и информация за проблема."
              en="The test kit is for initial trial only. For a guaranteed technical solution, preliminary analysis and problem information are required."
            /></p>
          </div>
        </div>

      </div>
    </section>
  );
}
