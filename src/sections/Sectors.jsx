import { T } from '../context/LangContext';

/* Градиенты для каждого сектора */
const sectors = [
  {
    titleBg: 'Инфраструктура', titleEn: 'Infrastructure',
    descBg: 'Мостове, тунели, пътища, диги, водни съоръжения',
    descEn: 'Bridges, tunnels, roads, dams, water structures',
    from: '#0B1C3E', to: '#1A3A7A',
    num: '01',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 28 Q4 16 20 16 Q36 16 36 28" strokeOpacity=".9"/>
        <line x1="4" y1="28" x2="36" y2="28" strokeOpacity=".9"/>
        <line x1="4" y1="24" x2="4" y2="32" strokeOpacity=".7"/>
        <line x1="36" y1="24" x2="36" y2="32" strokeOpacity=".7"/>
        <line x1="20" y1="16" x2="20" y2="28" strokeDasharray="3 2" strokeOpacity=".4"/>
      </svg>
    ),
  },
  {
    titleBg: 'Търговски обекти', titleEn: 'Commercial',
    descBg: 'Офис сгради, молове, хотели, логистични центрове',
    descEn: 'Office buildings, malls, hotels, logistics centers',
    from: '#1A3A7A', to: '#2452A4',
    num: '02',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="10" width="16" height="24" rx="1" strokeOpacity=".9"/>
        <rect x="22" y="16" width="11" height="18" rx="1" strokeOpacity=".7"/>
        <rect x="11" y="14" width="4" height="4" rx=".5" fill="rgba(255,255,255,.3)"/>
        <rect x="17" y="14" width="4" height="4" rx=".5" fill="rgba(255,255,255,.3)"/>
        <rect x="11" y="21" width="4" height="4" rx=".5" fill="rgba(255,255,255,.3)"/>
        <line x1="4" y1="34" x2="36" y2="34" strokeOpacity=".4"/>
      </svg>
    ),
  },
  {
    titleBg: 'Промишлени', titleEn: 'Industrial',
    descBg: 'Заводи, складове, производствени обекти',
    descEn: 'Factories, warehouses, production facilities',
    from: '#0369A1', to: '#0EA5E9',
    num: '03',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="20" width="30" height="14" rx="1" strokeOpacity=".9"/>
        <polyline points="5,20 5,12 14,20" strokeOpacity=".7"/>
        <polyline points="14,20 14,12 23,20" strokeOpacity=".7"/>
        <rect x="23" y="13" width="12" height="7" rx="1" strokeOpacity=".6"/>
        <line x1="27" y1="7" x2="27" y2="13" strokeOpacity=".5"/>
        <line x1="32" y1="9" x2="32" y2="13" strokeOpacity=".5"/>
      </svg>
    ),
  },
  {
    titleBg: 'Обществени сгради', titleEn: 'Public Buildings',
    descBg: 'Болници, училища, административни сгради',
    descEn: 'Hospitals, schools, administration buildings',
    from: '#5B21B6', to: '#8B5CF6',
    num: '04',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="18" width="28" height="16" rx="1" strokeOpacity=".9"/>
        <polygon points="20,7 4,18 36,18" strokeOpacity=".8"/>
        <rect x="16" y="26" width="8" height="8" rx="1" fill="rgba(255,255,255,.25)"/>
        <line x1="20" y1="7" x2="20" y2="11" strokeOpacity=".4" strokeDasharray="2 2"/>
      </svg>
    ),
  },
  {
    titleBg: 'Жилищни сгради', titleEn: 'Residential',
    descBg: 'Жилищни сгради, мазета, подземни паркинги',
    descEn: 'Residential buildings, basements, underground parking',
    from: '#065F46', to: '#059669',
    num: '05',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="7" y="20" width="26" height="14" rx="1" strokeOpacity=".9"/>
        <polyline points="20,8 4,20 36,20" strokeOpacity=".8"/>
        <rect x="11" y="25" width="6" height="9" rx="1" fill="rgba(255,255,255,.25)"/>
        <rect x="23" y="25" width="6" height="6" rx="1" fill="rgba(255,255,255,.2)"/>
      </svg>
    ),
  },
];

export default function Sectors() {
  return (
    <section id="sectors" className="sectors-section section">
      <div className="container">
        <div className="sectors-hdr">
          <div>
            <div className="eyebrow"><T bg="Обекти" en="Sectors" /></div>
            <h2 className="h2" style={{ marginTop: 8 }}>
              <T bg={<>С Какво <span className="accent">Работим</span></>}
                 en={<>What We <span className="accent">Work With</span></>} />
            </h2>
          </div>
          <p className="lead sectors-sub">
            <T
              bg="От инфраструктурни до комерсиални обекти — нашите решения се адаптират към всеки тип строителство."
              en="From infrastructure to commercial — our solutions adapt to any type of construction."
            />
          </p>
        </div>

        {/* Горизонтален layout — большая карточка слева + 4 компактных справа */}
        <div className="sectors-mosaic">
          {/* Главная — первая */}
          <div
            className="sector-big"
            style={{ background: `linear-gradient(145deg, ${sectors[0].from} 0%, ${sectors[0].to} 100%)` }}
          >
            <div className="sector-big__num">{sectors[0].num}</div>
            <div className="sector-big__icon">{sectors[0].icon}</div>
            <div className="sector-big__body">
              <h3 className="sector-big__title"><T bg={sectors[0].titleBg} en={sectors[0].titleEn} /></h3>
              <p className="sector-big__desc"><T bg={sectors[0].descBg} en={sectors[0].descEn} /></p>
            </div>
          </div>

          {/* Правая колонка 2x2 */}
          <div className="sectors-right">
            {sectors.slice(1).map(s => (
              <div
                key={s.num}
                className="sector-sm"
                style={{ background: `linear-gradient(135deg, ${s.from} 0%, ${s.to} 100%)` }}
              >
                <div className="sector-sm__top">
                  <span className="sector-sm__num">{s.num}</span>
                  <span className="sector-sm__icon">{s.icon}</span>
                </div>
                <h3 className="sector-sm__title"><T bg={s.titleBg} en={s.titleEn} /></h3>
                <p className="sector-sm__desc"><T bg={s.descBg} en={s.descEn} /></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
