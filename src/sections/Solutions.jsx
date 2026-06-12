import { useState } from 'react';
import { T } from '../context/LangContext';

const materialToFilter = {
  'HydroTape': 'seal', 'BentoFlex': 'seal', 'Pro Inject 403': 'seal',
  'HydroBloc PU 500': 'resins', 'HydroBloc 575 Integral': 'resins',
  'HydroBloc Rapid 570': 'resins', 'HydroBloc EP 811': 'resins',
  'Silox Injection 811 nt': 'resins', 'PU Ankerharz 640': 'resins',
  'HydroBloc Injekt 583': 'resins', 'HydroBloc 500-15': 'resins',
  'HydroBloc Rapid 572': 'resins', 'HydroBloc AC 502': 'foam',
  'HydroBloc Schaum 510': 'foam', 'HydroBloc AC 555': 'foam',
  'HydroBloc Gel 530': 'foam', 'HydroBloc Add 540': 'foam',
  'HydroBloc Schaum 516': 'foam', 'GeoRock 181': 'mortar',
  'SealFix 930': 'mortar', 'Silox EP 800': 'mortar',
  'Planfloor 595': 'mortar', 'Cembond 863': 'coating',
  'HydroCoat 750': 'coating', 'Remafix 709': 'barrier', 'Remafix 715': 'barrier',
};

/* SVG иконки — stroke на тёмном primary цвете, работают на светлом фоне */
const icons = {
  joints: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="8" height="12" rx="1"/>
      <rect x="14" y="6" width="8" height="12" rx="1"/>
      <line x1="10" y1="9" x2="14" y2="9" strokeDasharray="2 1.5"/>
      <line x1="10" y1="12" x2="14" y2="12" strokeDasharray="2 1.5"/>
      <line x1="10" y1="15" x2="14" y2="15" strokeDasharray="2 1.5"/>
    </svg>
  ),
  expansion: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="7" height="12" rx="1"/>
      <rect x="15" y="6" width="7" height="12" rx="1"/>
      <path d="M9 9 L11 12 L9 15 M15 9 L13 12 L15 15"/>
    </svg>
  ),
  curtain: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <line x1="8" y1="3" x2="8" y2="21" strokeDasharray="3 2"/>
      <line x1="12" y1="3" x2="12" y2="21" strokeDasharray="3 2"/>
      <line x1="16" y1="3" x2="16" y2="21" strokeDasharray="3 2"/>
    </svg>
  ),
  cracks: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="2"/>
      <path d="M9 2 L11 9 L7 14 L13 22"/>
    </svg>
  ),
  waterstop: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2 C12 2 5 10 5 15 a7 7 0 0 0 14 0 C19 10 12 2 12 2z"/>
      <line x1="9" y1="12" x2="15" y2="18"/>
      <line x1="15" y1="12" x2="9" y2="18"/>
    </svg>
  ),
  cavity: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="2"/>
      <ellipse cx="12" cy="12" rx="5" ry="4"/>
      <circle cx="7" cy="7" r="2"/>
      <circle cx="18" cy="17" r="1.5"/>
    </svg>
  ),
  pipes: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="6" rx="9" ry="3"/>
      <path d="M3 6 L3 18 Q3 21 12 21 Q21 21 21 18 L21 6"/>
      <ellipse cx="12" cy="18" rx="9" ry="3"/>
    </svg>
  ),
  structural: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <line x1="3" y1="9" x2="21" y2="9"/>
      <line x1="3" y1="15" x2="21" y2="15"/>
      <line x1="9" y1="3" x2="9" y2="21"/>
      <line x1="15" y1="3" x2="15" y2="21"/>
    </svg>
  ),
  barrier: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="2"/>
      <rect x="2" y="10" width="20" height="4" rx="0" fill="currentColor" fillOpacity="0.15"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M6 14 Q7 18 8 20 M12 14 Q13 18 14 20 M18 14 Q19 18 20 20" strokeDasharray="none"/>
    </svg>
  ),
};

const problems = [
  { id: 'joints',     titleBg: 'Уплътняване на работни фуги',      titleEn: 'Construction Joint Sealing',
    descBg: 'Запечатване на студени фуги между бетонови отливки. Предотвратява проникване на вода.',
    descEn: 'Sealing cold joints between concrete pours. Prevents water ingress through construction joints.',
    materials: ['HydroBloc PU 500', 'HydroBloc 575 Integral', 'HydroBloc AC 502', 'HydroBloc Injekt 583'],
    params: { pressure: { val: 30, bg: 'Нисък дебит', en: 'Low flow' }, spacing: { val: 60, bg: '15-20 см', en: '15-20 cm' }, difficulty: { val: 40, bg: 'Стандартна', en: 'Standard' } },
    tagBg: 'Фуги', tagEn: 'Joints' },
  { id: 'expansion',  titleBg: 'Дилатационни фуги',                titleEn: 'Expansion Joint Sealing',
    descBg: 'Еластично уплътняване на подвижни фуги. Издържа на многократни цикли на свиване и разширяване.',
    descEn: 'Elastic sealing of moving joints. Withstands repeated contraction and expansion cycles.',
    materials: ['HydroBloc PU 500', 'HydroBloc Rapid 570', 'HydroBloc Gel 530'],
    params: { pressure: { val: 50, bg: 'Средно', en: 'Medium' }, spacing: { val: 80, bg: '10-15 см', en: '10-15 cm' }, difficulty: { val: 75, bg: 'Висока', en: 'High' } },
    tagBg: 'Фуги', tagEn: 'Joints' },
  { id: 'curtain',    titleBg: 'Завесна инжекция',                 titleEn: 'Curtain Injection',
    descBg: 'Създаване на водонепропусклива бариера зад конструкцията. За тунели, подземни паркинги.',
    descEn: 'Creating waterproof barrier behind the structure. For tunnels, underground parking.',
    materials: ['HydroBloc Gel 530', 'HydroBloc Add 540', 'HydroBloc EP 811'],
    params: { pressure: { val: 80, bg: 'Високо', en: 'High' }, spacing: { val: 50, bg: '25-30 см', en: '25-30 cm' }, difficulty: { val: 95, bg: 'Изключително висока', en: 'Extreme' } },
    tagBg: 'Бариера', tagEn: 'Barrier' },
  { id: 'cracks',     titleBg: 'Запълване на пукнатини',           titleEn: 'Crack Injection',
    descBg: 'Инжектиране на пукнатини в бетон и зидария. Възстановява водоплътност и носеща способност.',
    descEn: 'Injecting cracks in concrete and masonry. Restores watertightness and load-bearing capacity.',
    materials: ['HydroBloc PU 500', 'HydroBloc 575 Integral', 'Silox EP 800', 'HydroBloc AC 555'],
    params: { pressure: { val: 65, bg: 'Средно-високо', en: 'Medium-high' }, spacing: { val: 60, bg: '15-25 см', en: '15-25 cm' }, difficulty: { val: 60, bg: 'Средна', en: 'Medium' } },
    tagBg: 'Пукнатини', tagEn: 'Cracks' },
  { id: 'waterstop',  titleBg: 'Спиране на активни течове',        titleEn: 'Water Leak Stoppage',
    descBg: 'Аварийно спиране на активни течове под налягане. Бързореагиращи пени и гелове.',
    descEn: 'Emergency stopping of active leaks under pressure. Fast-reacting foams and gels.',
    materials: ['HydroBloc Schaum 510', 'HydroBloc Rapid 570', 'HydroBloc Schaum 516'],
    params: { pressure: { val: 100, bg: 'Много високо', en: 'Extreme' }, spacing: { val: 90, bg: '5-10 см', en: '5-10 cm' }, difficulty: { val: 90, bg: 'Критична', en: 'Critical' } },
    tagBg: 'Аварийно', tagEn: 'Emergency' },
  { id: 'cavity',     titleBg: 'Запълване на кухини',              titleEn: 'Cavity Filling',
    descBg: 'Запълване на празнини зад облицовки, в почви и скали. Стабилизация на плочи.',
    descEn: 'Filling voids behind linings, in soils and rocks. Slab stabilization.',
    materials: ['HydroBloc Schaum 510', 'GeoRock 181', 'SealFix 930', 'Planfloor 595'],
    params: { pressure: { val: 20, bg: 'Ниско', en: 'Low' }, spacing: { val: 30, bg: '50+ см', en: '50+ cm' }, difficulty: { val: 50, bg: 'Средна', en: 'Medium' } },
    tagBg: 'Кухини', tagEn: 'Cavities' },
  { id: 'pipes',      titleBg: 'Канали и тръбни проходи',          titleEn: 'Pipes & Penetrations',
    descBg: 'Ремонт и уплътняване на тръбни проходи, канализация и шахти без разкопаване.',
    descEn: 'Repair and sealing of pipe penetrations and sewer pipes without excavation.',
    materials: ['HydroBloc Rapid 570', 'HydroBloc Gel 530', 'HydroBloc Add 540'],
    params: { pressure: { val: 55, bg: 'Средно', en: 'Medium' }, spacing: { val: 60, bg: '15-20 см', en: '15-20 cm' }, difficulty: { val: 70, bg: 'Висока', en: 'High' } },
    tagBg: 'Тръби', tagEn: 'Pipes' },
  { id: 'structural', titleBg: 'Конструктивно укрепване',          titleEn: 'Structural Reinforcement',
    descBg: 'Възстановяване на носеща способност на бетонови конструкции. Залепване на пукнатини.',
    descEn: 'Restoring load-bearing capacity of concrete structures. Structural bonding of cracks.',
    materials: ['Silox EP 800', 'HydroBloc EP 811', 'GeoRock 181'],
    params: { pressure: { val: 75, bg: 'Високо', en: 'High' }, spacing: { val: 60, bg: '15-20 см', en: '15-20 cm' }, difficulty: { val: 80, bg: 'Висока', en: 'High' } },
    tagBg: 'Конструкции', tagEn: 'Structural' },
  { id: 'barrier',    titleBg: 'Хоризонтална преграда',            titleEn: 'Horizontal Barrier',
    descBg: 'Спиране на капилярна влага в тухлена зидария. Инжекционна бариера без разрушаване.',
    descEn: 'Stopping capillary moisture in brick masonry. Injection barrier without demolition.',
    materials: ['Remafix 709', 'Remafix 715'],
    params: { pressure: { val: 15, bg: 'Ниско (Гравитация)', en: 'Low (Gravity)' }, spacing: { val: 85, bg: '10-12 см', en: '10-12 cm' }, difficulty: { val: 45, bg: 'Средно ниска', en: 'Low-Medium' } },
    tagBg: 'Влага', tagEn: 'Damp' },
];

const difficultyColor = (val) => {
  if (val >= 80) return '#EF4444';
  if (val >= 60) return '#F59E0B';
  return 'var(--primary)';
};

export default function Solutions() {
  const [selectedId, setSelectedId] = useState(problems[0].id);
  const active = problems.find(p => p.id === selectedId) || problems[0];

  const handleSelect = (id) => {
    setSelectedId(id);
    if (window.innerWidth < 992) {
      setTimeout(() => {
        document.getElementById('solution-details-card')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 50);
    }
  };

  const handleMaterialClick = (mat) => {
    const filter = materialToFilter[mat] || 'all';
    window.dispatchEvent(new CustomEvent('setProductFilter', { detail: { filter } }));
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleRequestAdvice = () => {
    localStorage.setItem('prefilledTab', 'services');
    localStorage.setItem('prefilledDescription',
      `Здравейте, интересува ни консултация относно: ${active.titleBg}.`
    );
    window.dispatchEvent(new Event('prefillContactForm'));
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section solutions-section" id="solutions">
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>

        {/* Header */}
        <div className="solutions-header" data-reveal>
          <div className="eyebrow"><T bg="Интерактивна Матрица" en="Interactive Matrix" /></div>
          <h2 className="h2" style={{ marginTop: 8, marginBottom: 12 }}>
            <T bg="Диагностика & " en="Diagnosis & " />
            <span className="accent"><T bg="Решения" en="Solutions" /></span>
          </h2>
          <p className="lead" style={{ maxWidth: 580 }}>
            <T
              bg="Изберете вид проблем и вижте препоръчани материали и параметри."
              en="Select a problem type to see recommended materials and parameters."
            />
          </p>
        </div>

        {/* Dashboard */}
        <div className="sol-layout" data-reveal>

          {/* LEFT — scrollable list */}
          <nav className="sol-list" role="tablist" aria-label="Типове проблеми">
            {problems.map(p => (
              <button
                key={p.id}
                role="tab"
                aria-selected={p.id === selectedId}
                className={`sol-item${p.id === selectedId ? ' sol-item--active' : ''}`}
                onClick={() => handleSelect(p.id)}
              >
                <span className="sol-item__icon" aria-hidden="true">
                  {icons[p.id]}
                </span>
                <span className="sol-item__body">
                  <span className="sol-item__title">
                    <T bg={p.titleBg} en={p.titleEn} />
                  </span>
                  <span className="sol-item__tag">
                    <T bg={p.tagBg} en={p.tagEn} />
                  </span>
                </span>
                <svg className="sol-item__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </button>
            ))}
          </nav>

          {/* RIGHT — detail panel */}
          <div className="sol-detail" id="solution-details-card" key={active.id} role="tabpanel">

            {/* Title row */}
            <div className="sol-detail__head">
              <span className="sol-detail__icon" aria-hidden="true">{icons[active.id]}</span>
              <div>
                <span className="sol-detail__eyebrow">
                  <T bg="Техническо решение" en="Technical Solution" />
                </span>
                <h3 className="sol-detail__title">
                  <T bg={active.titleBg} en={active.titleEn} />
                </h3>
              </div>
            </div>

            <p className="sol-detail__desc">
              <T bg={active.descBg} en={active.descEn} />
            </p>

            <hr className="sol-divider" />

            {/* Parameters */}
            <div className="sol-params">
              <h5 className="sol-section-label">
                <T bg="Параметри на приложението" en="Application Parameters" />
              </h5>
              <div className="sol-gauges">
                {/* Pressure */}
                <div className="sol-gauge">
                  <div className="sol-gauge__meta">
                    <span className="sol-gauge__name"><T bg="Налягане" en="Pressure" /></span>
                    <span className="sol-gauge__val"><T bg={active.params.pressure.bg} en={active.params.pressure.en} /></span>
                  </div>
                  <div className="sol-gauge__track">
                    <div className="sol-gauge__fill sol-gauge__fill--blue" style={{ width: `${active.params.pressure.val}%` }} />
                  </div>
                </div>
                {/* Spacing */}
                <div className="sol-gauge">
                  <div className="sol-gauge__meta">
                    <span className="sol-gauge__name"><T bg="Интервал пакери" en="Packer spacing" /></span>
                    <span className="sol-gauge__val"><T bg={active.params.spacing.bg} en={active.params.spacing.en} /></span>
                  </div>
                  <div className="sol-gauge__track">
                    <div className="sol-gauge__fill sol-gauge__fill--teal" style={{ width: `${active.params.spacing.val}%` }} />
                  </div>
                </div>
                {/* Difficulty */}
                <div className="sol-gauge">
                  <div className="sol-gauge__meta">
                    <span className="sol-gauge__name"><T bg="Сложност" en="Difficulty" /></span>
                    <span className="sol-gauge__val"><T bg={active.params.difficulty.bg} en={active.params.difficulty.en} /></span>
                  </div>
                  <div className="sol-gauge__track">
                    <div className="sol-gauge__fill" style={{ width: `${active.params.difficulty.val}%`, background: difficultyColor(active.params.difficulty.val) }} />
                  </div>
                </div>
              </div>
            </div>

            <hr className="sol-divider" />

            {/* Materials */}
            <div className="sol-materials">
              <h5 className="sol-section-label">
                <T bg="Препоръчани продукти ARCAN" en="Recommended ARCAN Products" />
              </h5>
              <p className="sol-materials__hint">
                <T bg="Кликнете за филтриране в каталога →" en="Click to filter in catalogue →" />
              </p>
              <div className="sol-materials__list">
                {active.materials.map((mat, i) => (
                  <button key={i} className="sol-mat-tag" onClick={() => handleMaterialClick(mat)}
                    title={`Виж в каталог: ${mat}`} aria-label={`Филтрирай ${mat}`}>
                    <span className="sol-mat-tag__dot" aria-hidden="true" />
                    {mat}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button onClick={handleRequestAdvice} className="btn btn-primary sol-cta" type="button">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              <T bg="Запитване за Инженерна Консултация" en="Request Engineering Advice" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
