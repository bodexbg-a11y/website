import { T } from '../context/LangContext';

const sectors = [
  {
    titleBg: 'Инфраструктура', titleEn: 'Infrastructure',
    descBg: 'Мостове, тунели, пътища, диги, водни съоръжения',
    descEn: 'Bridges, tunnels, roads, dams, water structures',
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" className="sector-svg">
        <path d="M6 40 Q6 22 28 22 Q50 22 50 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.85"/>
        <line x1="6" y1="40" x2="50" y2="40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.85"/>
        <line x1="6" y1="36" x2="6" y2="44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.7"/>
        <line x1="50" y1="36" x2="50" y2="44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.7"/>
        <line x1="28" y1="22" x2="28" y2="40" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3,3" strokeOpacity="0.4"/>
        <line x1="18" y1="26" x2="18" y2="40" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" strokeOpacity="0.3"/>
        <line x1="38" y1="26" x2="38" y2="40" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" strokeOpacity="0.3"/>
      </svg>
    ),
  },
  {
    titleBg: 'Търговски', titleEn: 'Commercial',
    descBg: 'Офис сгради, молове, hotels, логистични центрове',
    descEn: 'Office buildings, malls, hotels, logistics centers',
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" className="sector-svg">
        <rect x="12" y="14" width="22" height="32" rx="2" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" strokeOpacity="0.85"/>
        <rect x="30" y="22" width="16" height="24" rx="2" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6"/>
        <rect x="16" y="20" width="5" height="5" rx="1" fill="currentColor" fillOpacity="0.4"/>
        <rect x="23" y="20" width="5" height="5" rx="1" fill="currentColor" fillOpacity="0.4"/>
        <rect x="16" y="28" width="5" height="5" rx="1" fill="currentColor" fillOpacity="0.4"/>
        <rect x="23" y="28" width="5" height="5" rx="1" fill="currentColor" fillOpacity="0.4"/>
        <rect x="34" y="28" width="4" height="4" rx="1" fill="currentColor" fillOpacity="0.3"/>
        <rect x="34" y="36" width="4" height="4" rx="1" fill="currentColor" fillOpacity="0.3"/>
        <line x1="8" y1="46" x2="48" y2="46" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5"/>
      </svg>
    ),
  },
  {
    titleBg: 'Промишлени', titleEn: 'Industrial',
    descBg: 'Заводи, складове, хранилища, производствени обекти',
    descEn: 'Factories, warehouses, storage, production facilities',
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" className="sector-svg">
        <rect x="8" y="28" width="40" height="18" rx="2" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="2" strokeOpacity="0.85"/>
        <polyline points="8,28 8,18 20,28" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeOpacity="0.7"/>
        <polyline points="20,28 20,18 32,28" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeOpacity="0.7"/>
        <rect x="32" y="18" width="16" height="10" rx="1" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6"/>
        <line x1="36" y1="10" x2="36" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.5"/>
        <line x1="44" y1="12" x2="44" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.5"/>
        <rect x="20" y="36" width="8" height="10" rx="1" fill="currentColor" fillOpacity="0.2"/>
      </svg>
    ),
  },
  {
    titleBg: 'Обществени', titleEn: 'Public',
    descBg: 'Болници, училища, администрация, музеи',
    descEn: 'Hospitals, schools, administration, museums',
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" className="sector-svg">
        <rect x="8" y="26" width="40" height="20" rx="2" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="2" strokeOpacity="0.85"/>
        <polygon points="28,10 6,26 50,26" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeOpacity="0.7"/>
        <line x1="16" y1="26" x2="16" y2="46" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.35"/>
        <line x1="28" y1="26" x2="28" y2="46" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.35"/>
        <line x1="40" y1="26" x2="40" y2="46" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.35"/>
        <rect x="23" y="36" width="10" height="10" rx="1" fill="currentColor" fillOpacity="0.2"/>
      </svg>
    ),
  },
  {
    titleBg: 'Жилищни', titleEn: 'Residential',
    descBg: 'Жилищни сгради, мазета, подземни паркинги',
    descEn: 'Residential buildings, basements, underground parking',
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" className="sector-svg">
        <rect x="10" y="28" width="36" height="18" rx="2" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="2" strokeOpacity="0.85"/>
        <polyline points="28,12 6,28 50,28" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeOpacity="0.75"/>
        <rect x="16" y="34" width="8" height="12" rx="1" fill="currentColor" fillOpacity="0.2"/>
        <rect x="32" y="34" width="8" height="8" rx="1" fill="currentColor" fillOpacity="0.15"/>
        <line x1="28" y1="12" x2="28" y2="16" stroke="currentColor" strokeWidth="2" strokeOpacity="0.4"/>
      </svg>
    ),
  },
];

export default function Sectors() {
  return (
    <section id="sectors" className="section">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <div className="eyebrow" data-reveal style={{ justifyContent: 'center' }}>
            <T bg="Обекти" en="Sectors" />
          </div>
          <h2 className="h2" data-reveal>
            <T bg={<>С Какво <span className="accent">Работим</span></>} en={<>What We <span className="accent">Work With</span></>} />
          </h2>
          <p className="lead sectors-lead" data-reveal>
            <T
              bg="От инфраструктурни до комерсиални обекти — нашите решения се адаптират към всеки тип строителство."
              en="From infrastructure to commercial projects — our solutions adapt to any type of construction."
            />
          </p>
        </div>
        <div className="sectors-grid">
          {sectors.map((s, i) => (
            <div className="sector-item" data-reveal data-d={i > 0 ? String(i) : undefined} key={s.titleEn}>
              <span className="sector-icon-wrap">{s.icon}</span>
              <h3><T bg={s.titleBg} en={s.titleEn} /></h3>
              <p><T bg={s.descBg} en={s.descEn} /></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
