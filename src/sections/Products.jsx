import { useState } from 'react';
import { T } from '../context/LangContext';

const products = [
  {
    cat: 'seal', badge: 'WATER', name: 'HydroTape',
    bg: 'Полимерна набъбваща лента за работни фуги, тунели, тръбни проходи. Набъбване до 140%, работи и в солена вода.',
    en: 'Polymer swelling tape for construction joints, tunnels, pipe penetrations. Swelling up to 140%, works in salt water.',
    icon: <svg width="28" height="28" viewBox="0 0 28 28"><rect x="4" y="10" width="20" height="8" rx="4" fill="rgba(255,255,255,0.9)"/><rect x="8" y="12" width="12" height="4" rx="2" fill="rgba(53,71,184,0.6)"/><line x1="14" y1="4" x2="14" y2="10" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round"/><line x1="14" y1="18" x2="14" y2="24" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round"/></svg>,
  },
  {
    cat: 'seal', badge: 'MASONRY', name: 'BentoFlex',
    bg: 'Бентонитова набъбваща лента за строителни фуги. Макс. набъбване 160%. За тунели, тръби и сглобяеми елементи.',
    en: 'Bentonite swelling tape for construction joints. Max swelling 160%. For tunnels, pipes and prefab elements.',
    icon: <svg width="28" height="28" viewBox="0 0 28 28"><rect x="3" y="11" width="22" height="6" rx="3" fill="rgba(255,255,255,0.85)" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/><rect x="6" y="13" width="16" height="2" rx="1" fill="rgba(53,71,184,0.5)"/><path d="M3 14 Q7 10 14 14 Q21 18 25 14" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2"/></svg>,
  },
  {
    cat: 'seal', badge: 'WATER', name: 'Pro Inject 403',
    bg: 'Повторно инжектируем маркуч за работни фуги. Квадратна форма, позволява многократно инжектиране.',
    en: 'Re-injectable hose for construction joints. Square profile, allows repeated injection without new drilling.',
    icon: <svg width="28" height="28" viewBox="0 0 28 28"><path d="M4 14 Q8 8 14 14 Q20 20 24 14" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" strokeLinecap="round"/><circle cx="14" cy="14" r="3" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5"/><line x1="14" y1="4" x2="14" y2="11" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeDasharray="2,2"/></svg>,
  },
  {
    cat: 'resins', badge: 'WATER', name: 'HydroBloc 575 Integral',
    bg: 'Готова 1К набъбваща смола за пукнатини, фуги и маркучи. Не е пяна и не е гел. Подходяща за питейна вода (KTW).',
    en: 'Ready-to-use 1C swelling resin for cracks, joints and hoses. Not a foam, not a gel. Suitable for drinking water (KTW).',
    icon: <svg width="28" height="28" viewBox="0 0 28 28"><path d="M14 4 C14 4 6 13 6 18 C6 22.4 9.6 26 14 26 C18.4 26 22 22.4 22 18 C22 13 14 4 14 4Z" fill="rgba(255,255,255,0.85)"/><path d="M10 20 C10 19 11 17.5 13 17.5" stroke="rgba(53,71,184,0.5)" strokeWidth="1.5" strokeLinecap="round" fill="none"/></svg>,
  },
  {
    cat: 'resins', badge: 'WATER', name: 'HydroBloc PU 500',
    bg: 'Набъбваща PU смола за пукнатини и работни фуги. Набъбване до 150%, еластичност ~100%. DIN-EN 1504-5 и KTW.',
    en: 'Swelling PU resin for cracks and construction joints. Swelling up to 150%, elasticity ~100%. DIN-EN 1504-5 and KTW.',
    icon: <svg width="28" height="28" viewBox="0 0 28 28"><polygon points="14,3 24,10 24,21 14,27 4,21 4,10" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2"/><polygon points="14,3 24,10 14,14 4,10" fill="rgba(255,255,255,0.2)"/><line x1="14" y1="14" x2="14" y2="27" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/></svg>,
  },
  {
    cat: 'resins', badge: 'WATER · FAST', name: 'HydroBloc Rapid 570',
    bg: 'Много бързо реагираща набъбваща PU смола. За силни течове, пукнатини и дилатационни фуги под налягане.',
    en: 'Very fast-reacting swelling PU resin. For heavy leaks, cracks and dilation joints under pressure.',
    icon: <svg width="28" height="28" viewBox="0 0 28 28"><polygon points="14,2 17,11 26,11 19,17 22,26 14,20 6,26 9,17 2,11 11,11" fill="rgba(255,255,255,0.85)"/></svg>,
  },
  {
    cat: 'foam', badge: 'WATER · FAST', name: 'HydroBloc Schaum 510',
    bg: 'Бързо спиране на активни течове. Начало на реакция ~10 сек. Обем пяна до 40 л/кг. За последващо инжектиране.',
    en: 'Fast stop of active leaks. Reaction start ~10 sec. Foam volume up to 40 L/kg. Suitable for subsequent injection.',
    icon: <svg width="28" height="28" viewBox="0 0 28 28"><circle cx="14" cy="16" r="9" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.9)" strokeWidth="2"/><circle cx="10" cy="11" r="4.5" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5"/><circle cx="19" cy="9" r="3" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5"/><circle cx="8" cy="20" r="2" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/></svg>,
  },
  {
    cat: 'foam', badge: 'LOW TEMP', name: 'HydroBloc AC 555',
    bg: 'Акрилатна инжекционна смола за пукнатини и фуги при отрицателни температури. Стабилизация и анкериране.',
    en: 'Acrylic injection resin for cracks and joints at negative temperatures. Stabilization and anchoring applications.',
    icon: <svg width="28" height="28" viewBox="0 0 28 28"><path d="M14 4 Q18 8 22 14 Q18 20 14 24 Q10 20 6 14 Q10 8 14 4Z" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.9)" strokeWidth="2"/><line x1="8" y1="10" x2="20" y2="18" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="2,2"/></svg>,
  },
  {
    cat: 'mortar', badge: 'MASONRY', name: 'GeoRock 181',
    bg: 'Геополимерен разтвор без цимент за ремонт и реконструкция на подове и стени. Отлична адхезия дори върху влажни повърхности.',
    en: 'Cement-free geopolymer mortar for floor and wall repair. Excellent adhesion even on wet surfaces.',
    icon: <svg width="28" height="28" viewBox="0 0 28 28"><rect x="4" y="14" width="20" height="10" rx="2" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.9)" strokeWidth="2"/><rect x="8" y="10" width="12" height="6" rx="1.5" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5"/><rect x="11" y="7" width="6" height="5" rx="1" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5"/></svg>,
  },
  {
    cat: 'mortar', badge: 'WATER · FAST', name: 'SealFix 930',
    bg: 'Бърз минерален разтвор за запушване на активни течове преди инжектиране. Аварийни водоспиращи работи.',
    en: 'Fast mineral mortar for plugging active leaks before injection. Emergency water-stop works.',
    icon: <svg width="28" height="28" viewBox="0 0 28 28"><polygon points="14,2 17,11 26,11 19,17 22,26 14,20 6,26 9,17 2,11 11,11" fill="rgba(255,255,255,0.8)"/></svg>,
  },
  {
    cat: 'mortar', badge: 'STRUCTURAL', name: 'Silox EP 800',
    bg: 'Нисковискозна епоксидна смола за силово свързване, ремонт на пукнатини, консолидация. Без разтворители.',
    en: 'Low-viscosity epoxy resin for structural bonding, crack repair, consolidation. Solvent-free formula.',
    icon: <svg width="28" height="28" viewBox="0 0 28 28"><rect x="5" y="5" width="18" height="18" rx="3" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.9)" strokeWidth="2"/><line x1="5" y1="14" x2="23" y2="14" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/><line x1="14" y1="5" x2="14" y2="23" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/><circle cx="14" cy="14" r="3" fill="rgba(255,255,255,0.4)"/></svg>,
  },
  {
    cat: 'equip', badge: 'EQUIP', name: 'Jekto Pro-1 2K',
    bg: 'Професионална 2К помпа за двукомпонентни смоли и пяни. Фиксирано съотношение 1:1, налягане до 200 бара.',
    en: 'Professional 2C pump for two-component resins and foams. Fixed 1:1 ratio, pressure up to 200 bar.',
    icon: <svg width="28" height="28" viewBox="0 0 28 28"><rect x="8" y="7" width="12" height="16" rx="3" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.9)" strokeWidth="2"/><line x1="14" y1="3" x2="14" y2="7" stroke="rgba(255,255,255,0.8)" strokeWidth="2.5" strokeLinecap="round"/><line x1="20" y1="13" x2="24" y2="13" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round"/><circle cx="14" cy="15" r="3" fill="rgba(255,255,255,0.5)"/></svg>,
  },
  {
    cat: 'equip', badge: 'EQUIP', name: 'Jekto M-3 / M-4 1K',
    bg: 'Инжекционни помпи за еднокомпонентни смоли и пяни. Налягане до 220 бара. За строителни екипи на терен.',
    en: 'Injection pumps for single-component resins and foams. Pressure up to 220 bar. For field construction teams.',
    icon: <svg width="28" height="28" viewBox="0 0 28 28"><rect x="9" y="6" width="10" height="18" rx="3" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.9)" strokeWidth="2"/><line x1="14" y1="2" x2="14" y2="6" stroke="rgba(255,255,255,0.8)" strokeWidth="2.5" strokeLinecap="round"/><line x1="19" y1="12" x2="23" y2="12" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round"/><circle cx="14" cy="15" r="2.5" fill="rgba(255,255,255,0.45)"/></svg>,
  },
  {
    cat: 'equip', badge: 'EQUIP', nameBg: 'Пакери за Инжектиране', nameEn: 'Injection Packers',
    bg: 'Метални и специализирани пакери за различни диаметри и налягания. За бетон, зидария и тунели.',
    en: 'Metal and specialized packers for various diameters and pressures. For concrete, masonry and tunnels.',
    icon: <svg width="28" height="28" viewBox="0 0 28 28"><line x1="14" y1="3" x2="14" y2="25" stroke="rgba(255,255,255,0.9)" strokeWidth="3" strokeLinecap="round"/><rect x="10" y="10" width="8" height="8" rx="2" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5"/><circle cx="14" cy="8" r="2" fill="rgba(255,255,255,0.6)"/><circle cx="14" cy="20" r="2" fill="rgba(255,255,255,0.6)"/></svg>,
  },
];

const filters = [
  { key: 'all', bg: 'Всички', en: 'All' },
  { key: 'resins', bg: 'Смоли', en: 'Resins' },
  { key: 'foam', bg: 'Пени & Гелове', en: 'Foams & Gels' },
  { key: 'mortar', bg: 'Разтвори', en: 'Mortars' },
  { key: 'seal', bg: 'Уплътнители', en: 'Sealants' },
  { key: 'equip', bg: 'Оборудване', en: 'Equipment' },
];

export default function Products() {
  const [activeFilter, setActiveFilter] = useState('all');

  const visible = products.filter((p) => activeFilter === 'all' || p.cat === activeFilter);

  return (
    <section id="products" className="section">
      <div className="container">
        <div className="products-top">
          <div>
            <div className="eyebrow" data-reveal><T bg="Каталог продукти" en="Product catalogue" /></div>
            <h2 className="h2" data-reveal><T bg={<>Нашите <span className="accent">Продукти</span></>} en={<>Our <span className="accent">Products</span></>} /></h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href="/ARCAN_Injection_Matrix_BG.pdf"
              download="ARCAN_Injection_Matrix_BG.pdf"
              className="btn btn-outline-blue"
              data-reveal
              title="Изтегли инжекционна матрица"
              style={{ display: 'flex', alignItems: 'center', gap: '8px', whiteSpace: 'nowrap' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>
              </svg>
              <T bg="Инжекционна Матрица" en="Injection Matrix" />
            </a>
            <a
              href="/ARCAN_BODEX_Catalog_2026_BG.pdf"
              download="ARCAN_BODEX_Catalog_2026_BG.pdf"
              className="btn btn-outline-blue"
              data-reveal
              title="Изтегли каталог"
              style={{ display: 'flex', alignItems: 'center', gap: '8px', whiteSpace: 'nowrap' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              <T bg="Каталог PDF" en="Catalogue PDF" />
            </a>
            <a href="#contact" className="btn btn-outline-blue" data-reveal>
              <T bg="Заявете Пълен Каталог" en="Request Full Catalogue" />
            </a>
          </div>
        </div>
        <div className="filter-bar">
          {filters.map((f) => (
            <button
              key={f.key}
              className={`filter-btn${activeFilter === f.key ? ' active' : ''}`}
              onClick={() => setActiveFilter(f.key)}
            >
              <T bg={f.bg} en={f.en} />
            </button>
          ))}
        </div>
        <div className="product-grid" id="productGrid" key={activeFilter}>
          {visible.length > 0 ? (
            visible.map((p, index) => (
              <div className={`product-card${activeFilter !== 'all' ? ' revealed' : ''}`} data-reveal key={p.name || p.nameEn || index}>
                <span className="product-cat-badge">{p.badge}</span>
                <div className="product-icon-wrap">{p.icon}</div>
                <h3>{p.name ? p.name : <T bg={p.nameBg} en={p.nameEn} />}</h3>
                <p><T bg={p.bg} en={p.en} /></p>
                <a href="#contact" className="btn btn-outline-blue btn-sm">
                  <T bg="Запитване" en="Enquire" />
                </a>
              </div>
            ))
          ) : (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px', color: 'var(--muted)' }}>
              <T bg="Няма продукти в тази категория" en="No products in this category" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
