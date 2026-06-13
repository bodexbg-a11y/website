import { useState } from 'react';
import { T } from '../context/LangContext';

const materialToFilter = {
  'HydroTape':'seal','BentoFlex':'seal','Pro Inject 403':'seal',
  'HydroBloc PU 500':'resins','HydroBloc 575 Integral':'resins',
  'HydroBloc Rapid 570':'resins','HydroBloc EP 811':'resins',
  'Silox Injection 811 nt':'resins','PU Ankerharz 640':'resins',
  'HydroBloc Injekt 583':'resins','HydroBloc 500-15':'resins',
  'HydroBloc Rapid 572':'resins','HydroBloc AC 502':'foam',
  'HydroBloc Schaum 510':'foam','HydroBloc AC 555':'foam',
  'HydroBloc Gel 530':'foam','HydroBloc Add 540':'foam',
  'HydroBloc Schaum 516':'foam','GeoRock 181':'mortar',
  'SealFix 930':'mortar','Silox EP 800':'mortar',
  'Planfloor 595':'mortar','Cembond 863':'coating',
  'HydroCoat 750':'coating','Remafix 709':'barrier','Remafix 715':'barrier',
};

const problems = [
  {
    id:'joints', color:'#3B6FD4', glow:'rgba(59,111,212,0.25)',
    tagBg:'Фуги', tagEn:'Joints',
    titleBg:'Уплътняване на работни фуги', titleEn:'Construction Joint Sealing',
    descBg:'Запечатване на студени фуги между бетонови отливки. Предотвратява проникване на вода.',
    descEn:'Sealing cold joints between pours. Prevents water ingress through construction joints.',
    materials:['HydroBloc PU 500','HydroBloc 575 Integral','HydroBloc AC 502','HydroBloc Injekt 583'],
    params:{pressure:{val:30,bg:'Нисък дебит',en:'Low flow'},spacing:{val:60,bg:'15-20 см',en:'15-20 cm'},difficulty:{val:40,bg:'Стандартна',en:'Standard'}},
    icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="8" height="12" rx="1"/><rect x="14" y="6" width="8" height="12" rx="1"/><line x1="10" y1="9" x2="14" y2="9" strokeDasharray="2 1.5"/><line x1="10" y1="12" x2="14" y2="12" strokeDasharray="2 1.5"/><line x1="10" y1="15" x2="14" y2="15" strokeDasharray="2 1.5"/></svg>,
  },
  {
    id:'expansion', color:'#7C3AED', glow:'rgba(124,58,237,0.22)',
    tagBg:'Фуги', tagEn:'Joints',
    titleBg:'Дилатационни фуги', titleEn:'Expansion Joints',
    descBg:'Еластично уплътняване на подвижни фуги. Издържа на многократни деформации.',
    descEn:'Elastic sealing of moving joints. Withstands repeated deformation cycles.',
    materials:['HydroBloc PU 500','HydroBloc Rapid 570','HydroBloc Gel 530'],
    params:{pressure:{val:50,bg:'Средно',en:'Medium'},spacing:{val:80,bg:'10-15 см',en:'10-15 cm'},difficulty:{val:75,bg:'Висока',en:'High'}},
    icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="7" height="12" rx="1"/><rect x="15" y="6" width="7" height="12" rx="1"/><path d="M9 9l2 3-2 3M15 9l-2 3 2 3"/></svg>,
  },
  {
    id:'curtain', color:'#0EA5E9', glow:'rgba(14,165,233,0.22)',
    tagBg:'Бариера', tagEn:'Barrier',
    titleBg:'Завесна инжекция', titleEn:'Curtain Injection',
    descBg:'Водонепропусклива бариера зад конструкцията. За тунели и подземни паркинги.',
    descEn:'Waterproof barrier behind the structure. For tunnels and underground parking.',
    materials:['HydroBloc Gel 530','HydroBloc Add 540','HydroBloc EP 811'],
    params:{pressure:{val:85,bg:'Много високо',en:'Very high'},spacing:{val:50,bg:'25-30 см',en:'25-30 cm'},difficulty:{val:95,bg:'Критична',en:'Critical'}},
    icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="8" y1="3" x2="8" y2="21" strokeDasharray="3 2"/><line x1="12" y1="3" x2="12" y2="21" strokeDasharray="3 2"/><line x1="16" y1="3" x2="16" y2="21" strokeDasharray="3 2"/></svg>,
  },
  {
    id:'cracks', color:'#EF4444', glow:'rgba(239,68,68,0.22)',
    tagBg:'Пукнатини', tagEn:'Cracks',
    titleBg:'Запълване на пукнатини', titleEn:'Crack Injection',
    descBg:'Инжектиране на пукнатини в бетон. Възстановява водоплътност и носеща способност.',
    descEn:'Injecting cracks in concrete. Restores watertightness and load-bearing capacity.',
    materials:['HydroBloc PU 500','HydroBloc 575 Integral','Silox EP 800','HydroBloc AC 555'],
    params:{pressure:{val:65,bg:'Средно-високо',en:'Medium-high'},spacing:{val:60,bg:'15-25 см',en:'15-25 cm'},difficulty:{val:60,bg:'Средна',en:'Medium'}},
    icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2"/><path d="M9 2l-2 7 3 3-4 10"/></svg>,
  },
  {
    id:'waterstop', color:'#F59E0B', glow:'rgba(245,158,11,0.22)',
    tagBg:'Аварийно', tagEn:'Emergency',
    titleBg:'Спиране на активни течове', titleEn:'Active Leak Stoppage',
    descBg:'Аварийно спиране на течове под налягане. Бързореагиращи пени ~10 сек.',
    descEn:'Emergency stopping of active leaks under pressure. Fast-reacting foams ~10 sec.',
    materials:['HydroBloc Schaum 510','HydroBloc Rapid 570','HydroBloc Schaum 516'],
    params:{pressure:{val:100,bg:'Екстремно',en:'Extreme'},spacing:{val:90,bg:'5-10 см',en:'5-10 cm'},difficulty:{val:90,bg:'Критична',en:'Critical'}},
    icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C12 2 5 10 5 15a7 7 0 0014 0C19 10 12 2 12 2z"/><line x1="9" y1="12" x2="15" y2="18"/><line x1="15" y1="12" x2="9" y2="18"/></svg>,
  },
  {
    id:'cavity', color:'#059669', glow:'rgba(5,150,105,0.22)',
    tagBg:'Кухини', tagEn:'Cavities',
    titleBg:'Запълване на кухини', titleEn:'Cavity Filling',
    descBg:'Запълване на празнини зад облицовки и в почви. Стабилизация на плочи.',
    descEn:'Filling voids behind linings and in soils. Slab stabilization.',
    materials:['HydroBloc Schaum 510','GeoRock 181','SealFix 930','Planfloor 595'],
    params:{pressure:{val:20,bg:'Ниско',en:'Low'},spacing:{val:30,bg:'50+ см',en:'50+ cm'},difficulty:{val:50,bg:'Средна',en:'Medium'}},
    icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2"/><ellipse cx="12" cy="12" rx="5" ry="4"/><circle cx="7" cy="7" r="1.5"/><circle cx="18" cy="17" r="1"/></svg>,
  },
  {
    id:'pipes', color:'#6366F1', glow:'rgba(99,102,241,0.22)',
    tagBg:'Тръби', tagEn:'Pipes',
    titleBg:'Канали и тръбни проходи', titleEn:'Pipes & Penetrations',
    descBg:'Ремонт и уплътняване на тръбни проходи и шахти без разкопаване.',
    descEn:'Repair and sealing of pipe penetrations without excavation.',
    materials:['HydroBloc Rapid 570','HydroBloc Gel 530','HydroBloc Add 540'],
    params:{pressure:{val:55,bg:'Средно',en:'Medium'},spacing:{val:60,bg:'15-20 см',en:'15-20 cm'},difficulty:{val:70,bg:'Висока',en:'High'}},
    icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="6" rx="9" ry="3"/><path d="M3 6v12q0 3 9 3t9-3V6"/></svg>,
  },
  {
    id:'structural', color:'#DC2626', glow:'rgba(220,38,38,0.22)',
    tagBg:'Конструкции', tagEn:'Structural',
    titleBg:'Конструктивно укрепване', titleEn:'Structural Reinforcement',
    descBg:'Възстановяване на носеща способност. Епоксидно залепване на пукнатини.',
    descEn:'Restoring load-bearing capacity. Epoxy bonding of structural cracks.',
    materials:['Silox EP 800','HydroBloc EP 811','GeoRock 181'],
    params:{pressure:{val:75,bg:'Високо',en:'High'},spacing:{val:60,bg:'15-20 см',en:'15-20 cm'},difficulty:{val:80,bg:'Висока',en:'High'}},
    icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="1"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>,
  },
  {
    id:'barrier', color:'#D97706', glow:'rgba(217,119,6,0.22)',
    tagBg:'Влага', tagEn:'Damp',
    titleBg:'Хоризонтална преграда', titleEn:'Horizontal Barrier',
    descBg:'Капилярна влага в зидария. Инжекционна бариера без разрушаване.',
    descEn:'Stopping capillary moisture in masonry. Injection barrier without demolition.',
    materials:['Remafix 709','Remafix 715'],
    params:{pressure:{val:15,bg:'Гравитация',en:'Gravity'},spacing:{val:85,bg:'10-12 см',en:'10-12 cm'},difficulty:{val:45,bg:'Ниска',en:'Low'}},
    icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2"/><rect x="2" y="10" width="20" height="4" fill="currentColor" fillOpacity=".15"/><line x1="2" y1="12" x2="22" y2="12"/></svg>,
  },
];

function DiffBar({ val, color }) {
  return (
    <div className="diag-bar__track">
      <div className="diag-bar__fill" style={{ width: `${val}%`, background: color }} />
    </div>
  );
}

export default function Solutions() {
  const [activeId, setActiveId] = useState(problems[0].id);
  const active = problems.find(p => p.id === activeId) || problems[0];

  const handleMat = (mat) => {
    const filter = materialToFilter[mat] || 'all';
    window.dispatchEvent(new CustomEvent('setProductFilter', { detail: { filter } }));
    setTimeout(() => document.getElementById('products')?.scrollIntoView({ behavior:'smooth', block:'start' }), 60);
  };

  const handleCta = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior:'smooth' });
  };

  return (
    <section className="section diag-section" id="solutions">
      <div className="container">
        {/* Header */}
        <div className="diag-hdr">
          <div>
            <div className="eyebrow"><T bg="Интерактивна матрица" en="Interactive Matrix" /></div>
            <h2 className="h2" style={{ marginTop:8 }}>
              <T bg={<>Диагностика &amp; <span className="accent">Решения</span></>}
                 en={<>Diagnosis &amp; <span className="accent">Solutions</span></>} />
            </h2>
          </div>
          <p className="lead diag-sub">
            <T bg="Изберете проблем — вижте препоръчани материали и параметри." en="Select a problem — see recommended materials and parameters." />
          </p>
        </div>

        {/* Main panel */}
        <div className="diag-panel">

          {/* LEFT — problem grid */}
          <nav className="diag-nav" role="tablist" aria-label="Типове проблеми">
            {problems.map(p => (
              <button
                key={p.id}
                role="tab" aria-selected={p.id === activeId}
                className={`diag-nav__item${p.id === activeId ? ' diag-nav__item--active' : ''}`}
                style={ p.id === activeId ? { '--c': p.color, '--g': p.glow } : {} }
                onClick={() => setActiveId(p.id)}
              >
                <span className="diag-nav__icon" style={ p.id === activeId ? { background: p.color } : {} }
                  aria-hidden="true">{p.icon}</span>
                <span className="diag-nav__text">
                  <span className="diag-nav__title"><T bg={p.titleBg} en={p.titleEn} /></span>
                  <span className="diag-nav__tag"><T bg={p.tagBg} en={p.tagEn} /></span>
                </span>
              </button>
            ))}
          </nav>

          {/* RIGHT — detail */}
          <div className="diag-detail" key={active.id} role="tabpanel">

            {/* Detail header */}
            <div className="diag-detail__head">
              <div className="diag-detail__icon" style={{ background: active.color, boxShadow:`0 8px 24px ${active.glow}` }}>
                {active.icon}
              </div>
              <div>
                <span className="diag-detail__eyebrow"><T bg="Техническо решение" en="Technical Solution" /></span>
                <h3 className="diag-detail__title"><T bg={active.titleBg} en={active.titleEn} /></h3>
              </div>
            </div>

            <p className="diag-detail__desc"><T bg={active.descBg} en={active.descEn} /></p>

            <div className="diag-sep" />

            {/* Params */}
            <div className="diag-params">
              <div className="diag-params__label"><T bg="Параметри на приложението" en="Application Parameters" /></div>
              <div className="diag-gauges">
                <div className="diag-gauge">
                  <div className="diag-gauge__head">
                    <span className="diag-gauge__key"><T bg="Налягане" en="Pressure" /></span>
                    <span className="diag-gauge__val" style={{ color: active.color }}><T bg={active.params.pressure.bg} en={active.params.pressure.en} /></span>
                  </div>
                  <DiffBar val={active.params.pressure.val} color={active.color} />
                </div>
                <div className="diag-gauge">
                  <div className="diag-gauge__head">
                    <span className="diag-gauge__key"><T bg="Интервал пакери" en="Packer spacing" /></span>
                    <span className="diag-gauge__val" style={{ color: active.color }}><T bg={active.params.spacing.bg} en={active.params.spacing.en} /></span>
                  </div>
                  <DiffBar val={active.params.spacing.val} color={active.color} />
                </div>
                <div className="diag-gauge">
                  <div className="diag-gauge__head">
                    <span className="diag-gauge__key"><T bg="Сложност" en="Difficulty" /></span>
                    <span className="diag-gauge__val" style={{ color: active.color }}><T bg={active.params.difficulty.bg} en={active.params.difficulty.en} /></span>
                  </div>
                  <DiffBar val={active.params.difficulty.val} color={active.color} />
                </div>
              </div>
            </div>

            <div className="diag-sep" />

            {/* Materials */}
            <div className="diag-mats">
              <div className="diag-mats__label"><T bg="Препоръчани продукти ARCAN" en="Recommended ARCAN Products" /></div>
              <p className="diag-mats__hint"><T bg="Кликнете за филтриране в каталога →" en="Click to filter in catalogue →" /></p>
              <div className="diag-mats__list">
                {active.materials.map((m,i) => (
                  <button key={i} className="diag-mat" style={{ '--c': active.color, '--g': active.glow }} onClick={() => handleMat(m)}>
                    <span className="diag-mat__dot" style={{ background: active.color }} />
                    {m}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button className="btn btn-primary diag-cta" onClick={handleCta}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
              <T bg="Запитване за Инженерна Консултация" en="Request Engineering Consultation" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
