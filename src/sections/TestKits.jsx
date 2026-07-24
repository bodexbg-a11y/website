import { T } from '../context/LangContext';

/* ── Цени от доставчик (EUR, без ДДС) ── */
const PRICES = {
  hydro570:  22.00,   // HydroBloc 570 пяна 6.5kg/канистра (оценка — уточни!)
  hydro575:  20.74,   // HydroBloc 575 Integral 6.5kg/уп (от фактура)
  hydrosolv: 82.00,   // HydroSolv 520 туба 10kg (от фактура)
  packer100: 215.00,  // Packer PK-6 кутия 100 бр. (от фактура)
};

/* Пресмятане на себестойност */
function calcCost({ cans570, cans575, solv, packers }) {
  return (
    cans570  * PRICES.hydro570  +
    cans575  * PRICES.hydro575  +
    solv     * PRICES.hydrosolv +
    (packers / 100) * PRICES.packer100
  );
}

const kits = [
  {
    id: 'mini',
    badge: 'MINI · 2 канистри',
    priceBg: '149 €', priceEn: '149 €',
    titleBg: 'Мини Тестов Комплект', titleEn: 'Mini Test Kit',
    tagBg: 'За запознаване с материала', tagEn: 'First material introduction',
    descBg: 'Мини тестов комплект за запознаване с материала. Не за обект — за проба на реакцията на пяната, работата през помпа и поведението в пукнатина.',
    descEn: 'Mini test kit for first material introduction. Not for a full project — to test foam reaction, pump flow and crack behaviour.',
    cost: calcCost({ cans570: 2, cans575: 0, solv: 0, packers: 25 }),
    items: [
      { nameBg: 'HydroBloc 570 — пяна за спиране на течове', nameEn: 'HydroBloc 570 — leak-stop foam', qty: '2 канистри × 6,5 kg' },
      { nameBg: 'Пакери PK-6', nameEn: 'Packers PK-6', qty: '25 бр.' },
      { nameBg: 'Техническа инструкция PDF', nameEn: 'Technical instruction PDF', qty: '✓' },
      { nameBg: 'Консултация по приложение', nameEn: 'Application consultation', qty: '15 мин.' },
    ],
    color: '#2452A4', light: '#EEF4FF', border: '#BFDBFE',
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/></svg>,
  },
  {
    id: 'standard',
    badge: 'STANDARD · 5 канистри',
    priceBg: '399 €', priceEn: '399 €',
    titleBg: 'Стандартен Тестов Комплект', titleEn: 'Standard Test Kit',
    tagBg: 'За малък участък или сравнение на 2 материала', tagEn: 'Small area or comparing two materials',
    descBg: 'Стандартен тестов комплект за малък участък или сравнение на два материала. Клиентът получава избор — пяна + основен материал.',
    descEn: 'Standard test kit for a small area or comparing two materials. Client gets a choice — foam + base resin.',
    cost: calcCost({ cans570: 2, cans575: 3, solv: 0, packers: 100 }),
    items: [
      { nameBg: 'HydroBloc 570 — пяна', nameEn: 'HydroBloc 570 — foam', qty: '2 канистри × 6,5 kg' },
      { nameBg: 'HydroBloc 575 Integral — основна смола', nameEn: 'HydroBloc 575 Integral — base resin', qty: '3 канистри × 6,5 kg' },
      { nameBg: 'Пакери PK-6', nameEn: 'Packers PK-6', qty: '100 бр.' },
      { nameBg: 'Техническа консултация + подбор', nameEn: 'Technical consultation + selection', qty: '✓' },
    ],
    color: '#059669', light: '#ECFDF5', border: '#A7F3D0',
    featured: true,
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,
  },
  {
    id: 'object',
    badge: 'OBJECT · 10 канистри',
    priceBg: '849 €', priceEn: '849 €',
    titleBg: 'Обектов Тестов Комплект', titleEn: 'Object Test Kit',
    tagBg: 'За реална проба на конкретен проблемен участък', tagEn: 'Real-site test on specific problem area',
    descBg: 'Обектов тестов комплект за реална проба на конкретен проблемен участък. Пълен набор + консултация + препоръка + отстъпка за следваща поръчка.',
    descEn: 'Object test kit for real-site testing. Full set + consultation + recommendation + discount on next order.',
    cost: calcCost({ cans570: 5, cans575: 5, solv: 1, packers: 200 }),
    items: [
      { nameBg: 'HydroBloc 570 — пяна', nameEn: 'HydroBloc 570 — foam', qty: '5 канистри × 6,5 kg' },
      { nameBg: 'HydroBloc 575 Integral — основна смола', nameEn: 'HydroBloc 575 Integral — base resin', qty: '5 канистри × 6,5 kg' },
      { nameBg: 'HydroSolv 520 — почистващ разтворител', nameEn: 'HydroSolv 520 — cleaner/solvent', qty: '1 туба × 10 kg' },
      { nameBg: 'Пакери PK-6', nameEn: 'Packers PK-6', qty: '200 бр.' },
      { nameBg: 'Техническа консултация', nameEn: 'Technical consultation', qty: '30–45 мин.' },
      { nameBg: 'Препоръка за конкретния обект', nameEn: 'Site-specific recommendation', qty: '✓' },
      { nameBg: 'Отстъпка за следваща поръчка', nameEn: 'Discount on next order', qty: '5–10%' },
    ],
    color: '#7C3AED', light: '#F5F3FF', border: '#DDD6FE',
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M7 8l2 2 4-4"/></svg>,
  },
];

function CostBreakdown({ cost, price, color }) {
  const priceNum = parseFloat(price);
  const margin = priceNum - cost;
  return (
    <div className="tk-breakdown">
      <div className="tk-breakdown__row">
        <span><T bg="Материали (ориент.)" en="Materials (approx.)" /></span>
        <span>~{cost.toFixed(0)} €</span>
      </div>
      <div className="tk-breakdown__row tk-breakdown__row--margin">
        <span><T bg="Услуга + марж" en="Service + margin" /></span>
        <span style={{ color }}>+{margin.toFixed(0)} €</span>
      </div>
    </div>
  );
}

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
            <div className="eyebrow"><T bg="Тестови комплекти · 2 / 5 / 10 канистри" en="Test Kits · 2 / 5 / 10 canisters" /></div>
            <h2 className="h2" style={{ marginTop:8 }}>
              <T bg={<>Опитайте Материалите <span className="accent">Преди Голяма Поръчка</span></>}
                 en={<>Try the Materials <span className="accent">Before a Large Order</span></>} />
            </h2>
          </div>
          <p className="lead tk-sub">
            <T
              bg="Не купувайте сляпо. Тествайте реакцията на материала на малък участък преди пълен обем. Цените са без ДДС. Доставката не е включена — стойността зависи от вашия регион."
              en="Don't buy blind. Test material reaction on a small area before full-scale commitment. Prices exclude VAT. Delivery not included — cost depends on your region."
            />
          </p>
        </div>

        {/* Comparison table header */}
        <div className="tk-compare-bar">
          <span className="tk-compare-bar__item">
            <span className="tk-compare-dot" style={{ background:'#2452A4' }} />
            <T bg="2 канистри — Mini" en="2 canisters — Mini" />
          </span>
          <span className="tk-compare-bar__sep" aria-hidden="true">→</span>
          <span className="tk-compare-bar__item">
            <span className="tk-compare-dot" style={{ background:'#059669' }} />
            <T bg="5 канистри — Standard" en="5 canisters — Standard" />
          </span>
          <span className="tk-compare-bar__sep" aria-hidden="true">→</span>
          <span className="tk-compare-bar__item">
            <span className="tk-compare-dot" style={{ background:'#7C3AED' }} />
            <T bg="10 канистри — Object" en="10 canisters — Object" />
          </span>
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
                <div className="tk-best"><T bg="Най-продаван" en="Best seller" /></div>
              )}

              <div className="tk-card__head">
                <div className="tk-card__icon" aria-hidden="true">{k.icon}</div>
                <span className="tk-badge">{k.badge}</span>
              </div>

              <h3 className="tk-card__title"><T bg={k.titleBg} en={k.titleEn} /></h3>
              <p className="tk-card__tag"><T bg={k.tagBg} en={k.tagEn} /></p>
              <p className="tk-card__desc"><T bg={k.descBg} en={k.descEn} /></p>

              {/* Composition */}
              <div className="tk-items">
                <div className="tk-items__label"><T bg="Състав на комплекта" en="Kit contents" /></div>
                {k.items.map((item, j) => (
                  <div className="tk-item" key={j}>
                    <svg className="tk-item__check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                    <span className="tk-item__name"><T bg={item.nameBg} en={item.nameEn} /></span>
                    <span className="tk-item__qty">{item.qty}</span>
                  </div>
                ))}
              </div>

              {/* Cost breakdown */}
              <CostBreakdown cost={k.cost} price={k.priceBg} color={k.color} />

              {/* Price + CTA */}
              <div className="tk-card__foot">
                <div className="tk-price">
                  <span className="tk-price__num"><T bg={k.priceBg} en={k.priceEn} /></span>
                  <span className="tk-price__vat"><T bg="без ДДС · без доставка" en="ex VAT · delivery extra" /></span>
                </div>
                <button className="tk-btn" style={{ background: k.color }} onClick={() => handleOrder(k.titleBg)}>
                  <T bg="Поръчайте" en="Order kit" />
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Delivery note */}
        <div className="tk-delivery-note">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
          <T
            bg="Доставката не е включена в цената. Стойността зависи от вашия регион и начин на доставка. Свържете се с нас за точна оферта с доставка."
            en="Delivery is not included in the price. Cost depends on your region and delivery method. Contact us for an exact quote including delivery."
          />
        </div>

        {/* Disclaimer */}
        <div className="tk-disclaimer">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <p><T
            bg="Тестовият комплект е предназначен за първоначална проба и запознаване с материала. За гарантирано техническо решение на конкретен обект е необходим предварителен анализ, снимки и информация за проблема."
            en="The test kit is intended for initial trial and material introduction. For a guaranteed technical solution on a specific site, preliminary analysis, photos and problem information are required."
          /></p>
        </div>

      </div>
    </section>
  );
}
