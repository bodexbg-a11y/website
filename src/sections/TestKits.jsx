import { T } from '../context/LangContext';

const kits = [
  {
    id: 'mini',
    cans: '2',
    badge: '2 канистри',
    titleBg: 'Стартов Тестов Комплект', titleEn: 'Starter Test Kit',
    tagBg: 'За запознаване с материала', tagEn: 'First material introduction',
    descBg: 'Две канистри за първа проба — реакция на пяната, работа през помпа, поведение в пукнатина. Не за обект.',
    descEn: 'Two canisters for a first trial — foam reaction, pump flow, crack behaviour. Not for a full project.',
    items: [
      { nameBg: 'HydroBloc 510-2 — микропяна', nameEn: 'HydroBloc 510-2 — microfoam', qty: '2 × 10 kg' },
      { nameBg: 'Пакери PK-6', nameEn: 'Packers PK-6', qty: '100 бр.' },
      { nameBg: 'Техническа инструкция PDF', nameEn: 'Technical instruction PDF', qty: '✓' },
      { nameBg: 'Консултация по приложение', nameEn: 'Application consultation', qty: '15 мин.' },
    ],
    color: '#2452A4', light: '#EEF4FF', border: '#BFDBFE',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="6" height="20" rx="2"/>
        <rect x="14" y="2" width="6" height="20" rx="2"/>
      </svg>
    ),
  },
  {
    id: 'standard',
    cans: '5',
    badge: '5 канистри',
    titleBg: 'Стандартен Тестов Комплект', titleEn: 'Standard Test Kit',
    tagBg: 'За малък реален участък', tagEn: 'For a small real-site area',
    descBg: 'Пет канистри — пяна и основна PU смола. За малък реален участък или сравнение на два материала.',
    descEn: 'Five canisters — foam and base PU resin. For a small real area or comparing two materials.',
    items: [
      { nameBg: 'HydroBloc 510-2 — микропяна', nameEn: 'HydroBloc 510-2 — microfoam', qty: '2 × 10 kg' },
      { nameBg: 'HydroBloc PU 500 A+B — набъбваща смола', nameEn: 'HydroBloc PU 500 A+B — swelling resin', qty: '1 комплект ~21 kg' },
      { nameBg: 'HydroSolv 520 — почистващ разтворител', nameEn: 'HydroSolv 520 — cleaner', qty: '1 × 10 kg' },
      { nameBg: 'Пакери PK-6', nameEn: 'Packers PK-6', qty: '100 бр.' },
      { nameBg: 'Техническа консултация + подбор', nameEn: 'Technical consultation + selection', qty: '✓' },
    ],
    color: '#059669', light: '#ECFDF5', border: '#A7F3D0',
    featured: true,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="4" height="16" rx="1.5"/>
        <rect x="7" y="4" width="4" height="16" rx="1.5"/>
        <rect x="13" y="4" width="4" height="16" rx="1.5"/>
        <rect x="19" y="7" width="4" height="10" rx="1.5"/>
        <rect x="19" y="7" width="4" height="10" rx="1.5"/>
      </svg>
    ),
  },
  {
    id: 'object',
    cans: '10',
    badge: '10 канистри',
    titleBg: 'Обектов Тестов Комплект', titleEn: 'Object Test Kit',
    tagBg: 'За реална проба на конкретен обект', tagEn: 'Full real-site test',
    descBg: 'Десет канистри за реален обект — два типа материали, почистващ разтворител, 200 пакера. Консултация и препоръка включени.',
    descEn: 'Ten canisters for a real site — two material types, cleaner, 200 packers. Consultation and site recommendation included.',
    items: [
      { nameBg: 'HydroBloc 510-2 — микропяна', nameEn: 'HydroBloc 510-2 — microfoam', qty: '4 × 10 kg' },
      { nameBg: 'HydroBloc PU 500 A+B — набъбваща смола', nameEn: 'HydroBloc PU 500 A+B — swelling resin', qty: '2 комплекта ~42 kg' },
      { nameBg: 'HydroSolv 520 — почистващ разтворител', nameEn: 'HydroSolv 520 — cleaner', qty: '2 × 10 kg' },
      { nameBg: 'Пакери PK-6', nameEn: 'Packers PK-6', qty: '200 бр.' },
      { nameBg: 'Техническа консултация', nameEn: 'Technical consultation', qty: '30–45 мин.' },
      { nameBg: 'Препоръка за конкретния обект', nameEn: 'Site-specific recommendation', qty: '✓' },
      { nameBg: 'Отстъпка за следваща поръчка', nameEn: 'Discount on next order', qty: '5–10%' },
    ],
    color: '#7C3AED', light: '#F5F3FF', border: '#DDD6FE',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="6" width="3" height="12" rx="1"/>
        <rect x="5.5" y="6" width="3" height="12" rx="1"/>
        <rect x="10" y="6" width="3" height="12" rx="1"/>
        <rect x="14.5" y="6" width="3" height="12" rx="1"/>
        <rect x="19" y="6" width="3" height="12" rx="1"/>
        <line x1="1" y1="4" x2="22" y2="4" strokeDasharray="2 1.5"/>
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

        {/* Header */}
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
              bg="Не купувайте сляпо. Изберете обем — 2, 5 или 10 канистри. Цената зависи от избрания комплект и се уточнява при запитване."
              en="Don't buy blind. Choose a volume — 2, 5 or 10 canisters. Price depends on selected kit and is confirmed on enquiry."
            />
          </p>
        </div>

        {/* Volume selector bar */}
        <div className="tk-vol-bar">
          {kits.map(k => (
            <div key={k.id} className="tk-vol-item" style={{ '--c': k.color }}>
              <span className="tk-vol-item__num">{k.cans}</span>
              <span className="tk-vol-item__lbl"><T bg="канистри" en="canisters" /></span>
            </div>
          ))}
          <div className="tk-vol-bar__line" aria-hidden="true"/>
        </div>

        {/* Cards */}
        <div className="tk-grid">
          {kits.map((k, i) => (
            <div
              key={k.id}
              className={`tk-card${k.featured ? ' tk-card--featured' : ''}`}
              style={{ '--c': k.color, '--bg': k.light, '--bdr': k.border }}
              data-reveal data-d={String(i)}
            >
              {k.featured && (
                <div className="tk-best">
                  <T bg="Най-популярен" en="Most popular" />
                </div>
              )}

              {/* Head */}
              <div className="tk-card__head">
                <div className="tk-card__icon" aria-hidden="true">{k.icon}</div>
                <span className="tk-badge">{k.badge}</span>
              </div>

              <h3 className="tk-card__title"><T bg={k.titleBg} en={k.titleEn} /></h3>
              <p className="tk-card__tag"><T bg={k.tagBg} en={k.tagEn} /></p>
              <p className="tk-card__desc"><T bg={k.descBg} en={k.descEn} /></p>

              {/* Contents */}
              <div className="tk-items">
                <div className="tk-items__label"><T bg="Материали в комплекта" en="Kit contents" /></div>
                {k.items.map((item, j) => (
                  <div className="tk-item" key={j}>
                    <svg className="tk-item__check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span className="tk-item__name"><T bg={item.nameBg} en={item.nameEn} /></span>
                    <span className="tk-item__qty">{item.qty}</span>
                  </div>
                ))}
              </div>

              {/* CTA — no price shown */}
              <div className="tk-card__foot">
                <p className="tk-price-on-request">
                  <T bg="Цена при запитване" en="Price on request" />
                </p>
                <button
                  className="tk-btn"
                  style={{ background: k.color }}
                  onClick={() => handleOrder(k.titleBg)}
                >
                  <T bg="Запитване" en="Enquire" />
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Notes */}
        <div className="tk-notes">
          <div className="tk-delivery-note">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
              <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
            </svg>
            <T
              bg="Доставката не е включена. Стойността зависи от вашия регион."
              en="Delivery not included. Cost depends on your region."
            />
          </div>
          <div className="tk-disclaimer">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <p>
              <T
                bg="Тестовият комплект е предназначен за първоначална проба и запознаване с материала. За гарантирано техническо решение на конкретен обект е необходим предварителен анализ, снимки и информация за проблема."
                en="The test kit is for initial trial only. For a guaranteed technical solution, preliminary analysis and problem information are required."
              />
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
