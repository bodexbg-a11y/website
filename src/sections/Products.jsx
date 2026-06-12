import { useState, useEffect, useRef } from 'react';
import { useLang, T } from '../context/LangContext';

/* ── Цвета и иконки категорий ── */
const CATS = [
  {
    key: 'all',
    bg: 'Всички', en: 'All',
    color: '#2452A4', light: '#EEF4FF',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
        <rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
      </svg>
    ),
  },
  {
    key: 'resins',
    bg: 'Смоли', en: 'Resins',
    color: '#2452A4', light: '#EEF4FF',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C12 2 5 10 5 15a7 7 0 0014 0C19 10 12 2 12 2z"/>
      </svg>
    ),
  },
  {
    key: 'foam',
    bg: 'Пени & Гелове', en: 'Foams & Gels',
    color: '#0EA5E9', light: '#E0F2FE',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="16" r="6"/><circle cx="8" cy="10" r="4"/><circle cx="17" cy="9" r="3"/>
      </svg>
    ),
  },
  {
    key: 'mortar',
    bg: 'Разтвори', en: 'Mortars',
    color: '#8B5CF6', light: '#F5F3FF',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 20h18M5 20V8l7-5 7 5v12"/><rect x="9" y="13" width="6" height="7"/>
      </svg>
    ),
  },
  {
    key: 'seal',
    bg: 'Уплътнители', en: 'Sealants',
    color: '#059669', light: '#ECFDF5',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="8" width="20" height="8" rx="4"/>
        <line x1="12" y1="2" x2="12" y2="8"/><line x1="12" y1="16" x2="12" y2="22"/>
      </svg>
    ),
  },
  {
    key: 'coating',
    bg: 'Покрития', en: 'Coatings',
    color: '#D97706', light: '#FFFBEB',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M3 15h18"/>
      </svg>
    ),
  },
  {
    key: 'barrier',
    bg: 'Хоризонтална Бариера', en: 'Horizontal Barrier',
    color: '#DC2626', light: '#FEF2F2',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    key: 'equip',
    bg: 'Оборудване', en: 'Equipment',
    color: '#6B7280', light: '#F9FAFB',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
      </svg>
    ),
  },
];

/* ── Фото-плейсхолдеры по категориям (SVG data URI) ── */
const CARD_BG = {
  resins:  { from: '#1A3FA8', to: '#2452A4', pattern: 'drop' },
  foam:    { from: '#0369A1', to: '#0EA5E9', pattern: 'bubble' },
  mortar:  { from: '#5B21B6', to: '#8B5CF6', pattern: 'grid' },
  seal:    { from: '#065F46', to: '#059669', pattern: 'wave' },
  coating: { from: '#92400E', to: '#D97706', pattern: 'stripe' },
  barrier: { from: '#991B1B', to: '#DC2626', pattern: 'shield' },
  equip:   { from: '#374151', to: '#6B7280', pattern: 'gear' },
};

function ProductCardImage({ cat, name }) {
  const c = CARD_BG[cat] || CARD_BG.resins;
  return (
    <div className="pcard__img" style={{ background: `linear-gradient(135deg, ${c.from} 0%, ${c.to} 100%)` }}>
      <div className="pcard__img-pattern" aria-hidden="true" />
      <div className="pcard__img-label" aria-hidden="true">{name}</div>
    </div>
  );
}

/* ── Данные продуктов (упрощённая иконка — теперь внутри цветного фото) ── */
const products = [
  { cat:'seal',    badge:'WATER',        name:'HydroTape',
    bg:'Полимерна набъбваща лента за работни фуги, тунели, тръбни проходи. Набъбване до 140%.',
    en:'Polymer swelling tape for construction joints, tunnels, pipe penetrations. Swelling up to 140%.',
    specsBg:['Набъбване 140%','За фуги и тръби'], specsEn:['140% Swelling','For joints & pipes'] },
  { cat:'seal',    badge:'MASONRY',      name:'BentoFlex',
    bg:'Бентонитова набъбваща лента за строителни фуги. Макс. набъбване 160%.',
    en:'Bentonite swelling tape for construction joints. Max swelling 160%.',
    specsBg:['Бентонит','Набъбване 160%'], specsEn:['Bentonite','160% Swelling'] },
  { cat:'seal',    badge:'WATER',        name:'Pro Inject 403',
    bg:'Повторно инжектируем маркуч за работни фуги. Квадратна форма, многократно инжектиране.',
    en:'Re-injectable hose for construction joints. Square profile, repeated injection.',
    specsBg:['Многократно инж.','Маркуч'], specsEn:['Multi-injection','Hose'] },
  { cat:'resins',  badge:'WATER',        name:'HydroBloc 575 Integral',
    bg:'Готова 1К набъбваща смола. Подходяща за питейна вода (KTW).',
    en:'Ready 1C swelling resin. Suitable for drinking water (KTW).',
    specsBg:['1К смола','Питейна вода KTW'], specsEn:['1C resin','Drinking water KTW'] },
  { cat:'resins',  badge:'WATER',        name:'HydroBloc PU 500',
    bg:'Набъбваща PU смола. Набъбване до 150%, еластичност ~100%. DIN-EN 1504-5 и KTW.',
    en:'Swelling PU resin. Swelling up to 150%, elasticity ~100%. DIN-EN 1504-5 and KTW.',
    specsBg:['PU 150%','DIN-EN 1504-5'], specsEn:['PU 150%','DIN-EN 1504-5'] },
  { cat:'resins',  badge:'WATER · FAST', name:'HydroBloc Rapid 570',
    bg:'Много бързо реагираща PU смола. За силни течове под налягане.',
    en:'Very fast-reacting PU resin. For heavy leaks under pressure.',
    specsBg:['Бърза реакция','Под налягане'], specsEn:['Fast reaction','Under pressure'] },
  { cat:'foam',    badge:'WATER · FAST', name:'HydroBloc Schaum 510',
    bg:'Бързо спиране на активни течове. Реакция ~10 сек. Разпенване до 40 л/кг.',
    en:'Fast stop of active leaks. Reaction ~10 sec. Foam volume up to 40 L/kg.',
    specsBg:['Реакция ~10s','Разпенване 40x'], specsEn:['Reaction ~10s','40x Expansion'] },
  { cat:'foam',    badge:'LOW TEMP',     name:'HydroBloc AC 555',
    bg:'Акрилатна смола за пукнатини при отрицателни температури.',
    en:'Acrylic resin for cracks at negative temperatures.',
    specsBg:['Акрилат','Работа под 0°C'], specsEn:['Acrylic','Sub-zero'] },
  { cat:'foam',    badge:'GEL',          name:'HydroBloc Gel 530',
    bg:'Акрилатен гел за фуги и пукнатини. Постоянна еластичност.',
    en:'Acrylate gel for joints and cracks. Permanent elasticity.',
    specsBg:['Акрилатен гел','Еластичен'], specsEn:['Acrylate gel','Elastic'] },
  { cat:'foam',    badge:'WATER · FAST', name:'HydroBloc Schaum 516',
    bg:'2К PU пяна за аварийно спиране на силни течове.',
    en:'2C PU foam for emergency stopping of heavy leaks.',
    specsBg:['2К PU','Аварийна'], specsEn:['2C PU','Emergency'] },
  { cat:'mortar',  badge:'MASONRY',      name:'GeoRock 181',
    bg:'Геополимерен разтвор без цимент. Адхезия и върху влажни повърхности.',
    en:'Cement-free geopolymer mortar. Adhesion even on wet surfaces.',
    specsBg:['Геополимер','Без цимент'], specsEn:['Geopolymer','Cement-free'] },
  { cat:'mortar',  badge:'WATER · FAST', name:'SealFix 930',
    bg:'Бърз минерален разтвор за запушване преди инжектиране.',
    en:'Fast mineral mortar for plugging before injection.',
    specsBg:['Бърз разтвор','Водоспиращ'], specsEn:['Rapid mortar','Water-stop'] },
  { cat:'mortar',  badge:'STRUCTURAL',   name:'Silox EP 800',
    bg:'Нисковискозна епоксидна смола за силово свързване. Без разтворители.',
    en:'Low-viscosity epoxy resin for structural bonding. Solvent-free.',
    specsBg:['Епоксид','Силово залепване'], specsEn:['Epoxy','Structural bond'] },
  { cat:'mortar',  badge:'LIFTING',      name:'Planfloor 595',
    bg:'2К PU пяна с висока твърдост за вдигане на плочи.',
    en:'2C rigid PU foam for slab lifting and stabilisation.',
    specsBg:['Твърда пяна','Вдигане плочи'], specsEn:['Rigid foam','Slab lifting'] },
  { cat:'coating', badge:'MEMBRANE',     name:'Cembond 863',
    bg:'Циментова хидроизолационна мембрана. За резервоари и тунели.',
    en:'Cementitious waterproof slurry membrane. For tanks and tunnels.',
    specsBg:['Циментова','Мокра основа'], specsEn:['Cementitious','Damp substrates'] },
  { cat:'coating', badge:'WATERPROOF',   name:'HydroCoat 750',
    bg:'Еластична полимерна боя за тераси и покриви. UV стабилна.',
    en:'Elastic polymer waterproof paint. UV stable.',
    specsBg:['Полимерна боя','UV устойчива'], specsEn:['Polymer paint','UV resistant'] },
  { cat:'barrier', badge:'BARRIER',      name:'Remafix 709',
    bg:'Течен препарат за хоризонтална инжекция срещу капилярна влага.',
    en:'Liquid product for horizontal injection against rising damp.',
    specsBg:['Течна бариера','Капилярна влага'], specsEn:['Liquid barrier','Rising damp'] },
  { cat:'barrier', badge:'BARRIER',      name:'Remafix 715',
    bg:'Крем за хоризонтална преградна инжекция. За стари зидани сгради.',
    en:'Cream for horizontal barrier injection. For old masonry buildings.',
    specsBg:['Крем бариера','Лесно инж.'], specsEn:['Barrier cream','Easy injection'] },
  { cat:'equip',   badge:'EQUIP',        name:'Jekto Pro-1 2K',
    bg:'Професионална 2К помпа. Съотношение 1:1, налягане до 200 бара.',
    en:'Professional 2C pump. 1:1 ratio, pressure up to 200 bar.',
    specsBg:['2К Помпа','200 бара'], specsEn:['2C Pump','200 bar'] },
  { cat:'equip',   badge:'EQUIP',        name:'Jekto M-3 / M-4 1K',
    bg:'Инжекционни помпи за 1К смоли. Налягане до 220 бара.',
    en:'Injection pumps for 1C resins. Pressure up to 220 bar.',
    specsBg:['1К Помпа','220 бара'], specsEn:['1C Pump','220 bar'] },
  { cat:'equip',   badge:'EQUIP',        nameBg:'Пакери за Инжектиране', nameEn:'Injection Packers',
    bg:'Метални и специализирани пакери за всички диаметри.',
    en:'Metal and specialized packers for all diameters.',
    specsBg:['Стомана / Месинг','Всички размери'], specsEn:['Steel / Brass','All sizes'] },
  { cat:'resins',  badge:'STRUCTURAL',   name:'HydroBloc EP 811',
    bg:'Свръхнисковискозна епоксидна смола при мокри условия.',
    en:'Super low viscosity epoxy for wet conditions.',
    specsBg:['Нисък вискозитет','Мокър бетон'], specsEn:['Low viscosity','Wet concrete'] },
  { cat:'foam',    badge:'ADDITIVE',     name:'HydroBloc Add 540',
    bg:'Добавка-ускорител за акрилатни гелове. Регулира времето на реакция.',
    en:'Accelerator additive for acrylate gels. Controls reaction time.',
    specsBg:['Ускорител','Контрол реакция'], specsEn:['Accelerator','Reaction control'] },
];

export default function Products() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery]   = useState('');
  const { lang } = useLang();
  const gridRef = useRef(null);

  /* Внешний фильтр (из Solutions) */
  useEffect(() => {
    function onFilterChange(e) {
      if (e.detail?.filter) {
        setActiveFilter(e.detail.filter);
        setSearchQuery('');
        setTimeout(() => document.getElementById('prod-grid-anchor')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
      }
    }
    window.addEventListener('setProductFilter', onFilterChange);
    return () => window.removeEventListener('setProductFilter', onFilterChange);
  }, []);

  const handleCatClick = (key) => {
    setActiveFilter(key);
    setSearchQuery('');
    setTimeout(() => document.getElementById('prod-grid-anchor')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
  };

  const catInfo = (key) => CATS.find(c => c.key === key) || CATS[0];

  const visible = products.filter(p => {
    const matchCat = activeFilter === 'all' || p.cat === activeFilter;
    const name = p.name || (lang === 'bg' ? p.nameBg : p.nameEn) || '';
    const desc = lang === 'bg' ? p.bg : p.en;
    return matchCat && (
      name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      desc.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const countFor = (key) => key === 'all' ? products.length : products.filter(p => p.cat === key).length;

  return (
    <section id="products" className="section products-section">
      <div className="container">

        {/* Header */}
        <div className="prod-hdr">
          <div>
            <div className="eyebrow" data-reveal><T bg="Каталог продукти" en="Product catalogue" /></div>
            <h2 className="h2" data-reveal>
              <T bg={<>Нашите <span className="accent">Продукти</span></>}
                 en={<>Our <span className="accent">Products</span></>} />
            </h2>
          </div>
          <div className="prod-hdr__actions" data-reveal>
            <a href="/ARCAN_Injection_Matrix_BG.pdf" download className="btn btn-outline-blue">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>
              </svg>
              <T bg="Матрица" en="Matrix" />
            </a>
            <a href="/ARCAN_BODEX_Catalog_2026_BG.pdf" download className="btn btn-outline-blue">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              <T bg="Каталог PDF" en="Catalogue PDF" />
            </a>
          </div>
        </div>

        {/* Categories grid */}
        <div className="cat-grid" data-reveal role="tablist" aria-label="Категории продукти">
          {CATS.map(c => {
            const active = activeFilter === c.key;
            return (
              <button
                key={c.key}
                role="tab"
                aria-selected={active}
                className={`cat-card${active ? ' cat-card--active' : ''}`}
                style={active ? { '--cat-color': c.color, '--cat-light': c.light } : { '--cat-color': c.color, '--cat-light': c.light }}
                onClick={() => handleCatClick(c.key)}
              >
                <span className="cat-card__icon" aria-hidden="true">{c.icon}</span>
                <span className="cat-card__name"><T bg={c.bg} en={c.en} /></span>
                <span className="cat-card__count">{countFor(c.key)}</span>
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="search-bar-wrap" data-reveal>
          <div className="search-input-container">
            <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              type="search"
              className="search-input"
              placeholder={lang === 'bg' ? 'Търсене (напр. смола, помпа, лента)…' : 'Search (e.g. resin, pump, tape)…'}
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              aria-label={lang === 'bg' ? 'Търсене на продукти' : 'Search products'}
            />
            {searchQuery && (
              <button className="search-clear-btn" onClick={() => setSearchQuery('')} aria-label="Clear search">✕</button>
            )}
          </div>
        </div>

        {/* Active category label + scroll anchor */}
        <div id="prod-grid-anchor" style={{ scrollMarginTop: '84px' }} />
        {activeFilter !== 'all' && (
          <div className="active-cat-label">
            <span className="active-cat-label__dot" style={{ background: catInfo(activeFilter).color }} aria-hidden="true" />
            <span className="active-cat-label__name" style={{ color: catInfo(activeFilter).color }}>
              <T bg={catInfo(activeFilter).bg} en={catInfo(activeFilter).en} />
            </span>
            <span className="active-cat-label__count">— {visible.length} <T bg="продукта" en="products" /></span>
          </div>
        )}

        {/* Grid */}
        <div className="pgrid-4" id="productGrid" key={activeFilter + searchQuery}>
          {visible.length > 0 ? visible.map((p, i) => {
            const name = p.name || (lang === 'bg' ? p.nameBg : p.nameEn);
            const ci = catInfo(p.cat);
            return (
              <article
                className="pcard pcard--visible"
                key={name + i}
                style={{ '--cat-color': ci.color, '--cat-light': ci.light }}
              >
                {/* Фото-шапка */}
                <ProductCardImage cat={p.cat} name={name} />

                {/* Бейдж */}
                <div className="pcard__badges">
                  <span className="pcard__badge" style={{ background: ci.color }}>{p.badge}</span>
                </div>

                {/* Контент */}
                <div className="pcard__body">
                  <h3 className="pcard__name">{name}</h3>
                  <p className="pcard__desc"><T bg={p.bg} en={p.en} /></p>
                  {p.specsBg && (
                    <div className="pcard__specs">
                      <T
                        bg={p.specsBg.map((s, si) => <span key={si} className="pcard__spec">{s}</span>)}
                        en={p.specsEn.map((s, si) => <span key={si} className="pcard__spec">{s}</span>)}
                      />
                    </div>
                  )}
                  <a href="#contact" className="pcard__cta" aria-label={`Запитване за ${name}`}>
                    <T bg="Запитване" en="Enquire" />
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </a>
                </div>
              </article>
            );
          }) : (
            <div className="pgrid-empty" role="status">
              <T bg="Няма намерени продукти" en="No products found" />
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
