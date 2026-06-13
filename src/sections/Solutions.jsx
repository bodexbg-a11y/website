import { useState } from 'react';
import { T } from '../context/LangContext';

const materialToFilter = {
  'HydroTape':'seal','BentoFlex':'seal','Pro Inject 403':'seal',
  'HydroBloc PU 500':'resins','HydroBloc 575 Integral':'resins',
  'HydroBloc Rapid 570':'resins','HydroBloc EP 811':'resins',
  'HydroBloc Injekt 583':'resins','HydroBloc AC 502':'foam',
  'HydroBloc Schaum 510':'foam','HydroBloc AC 555':'foam',
  'HydroBloc Gel 530':'foam','HydroBloc Add 540':'foam',
  'HydroBloc Schaum 516':'foam','GeoRock 181':'mortar',
  'SealFix 930':'mortar','Silox EP 800':'mortar',
  'Planfloor 595':'mortar','Remafix 709':'barrier','Remafix 715':'barrier',
};

const problems = [
  { id:'joints',     color:'#2452A4', bg:'#EEF4FF', border:'#BFDBFE',
    tagBg:'Фуги',       tagEn:'Joints',
    titleBg:'Работни фуги',             titleEn:'Construction Joints',
    descBg:'Запечатване на студени фуги между бетонови отливки. Предотвратява проникване на вода.',
    descEn:'Sealing cold joints between concrete pours. Prevents water ingress.',
    materials:['HydroBloc PU 500','HydroBloc 575 Integral','HydroBloc AC 502','HydroBloc Injekt 583'],
    params:[{k:'Налягане',e:'Pressure',v:30,l:'Нисък дебит',le:'Low flow'},{k:'Интервал',e:'Spacing',v:60,l:'15-20 см',le:'15-20 cm'},{k:'Сложност',e:'Difficulty',v:40,l:'Стандартна',le:'Standard'}],
    icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="8" height="14" rx="1"/><rect x="14" y="5" width="8" height="14" rx="1"/><line x1="10" y1="9" x2="14" y2="9" strokeDasharray="2 1.5"/><line x1="10" y1="12" x2="14" y2="12" strokeDasharray="2 1.5"/><line x1="10" y1="15" x2="14" y2="15" strokeDasharray="2 1.5"/></svg>,
  },
  { id:'expansion',  color:'#7C3AED', bg:'#F5F3FF', border:'#DDD6FE',
    tagBg:'Фуги',       tagEn:'Joints',
    titleBg:'Дилатационни фуги',         titleEn:'Expansion Joints',
    descBg:'Еластично уплътняване на подвижни фуги. Издържа на многократни деформационни цикли.',
    descEn:'Elastic sealing of moving joints. Withstands repeated deformation cycles.',
    materials:['HydroBloc PU 500','HydroBloc Rapid 570','HydroBloc Gel 530'],
    params:[{k:'Налягане',e:'Pressure',v:50,l:'Средно',le:'Medium'},{k:'Интервал',e:'Spacing',v:80,l:'10-15 см',le:'10-15 cm'},{k:'Сложност',e:'Difficulty',v:75,l:'Висока',le:'High'}],
    icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="7" height="14" rx="1"/><rect x="15" y="5" width="7" height="14" rx="1"/><path d="M9 9l2 3-2 3M15 9l-2 3 2 3"/></svg>,
  },
  { id:'curtain',    color:'#0369A1', bg:'#E0F2FE', border:'#BAE6FD',
    tagBg:'Бариера',    tagEn:'Barrier',
    titleBg:'Завесна инжекция',          titleEn:'Curtain Injection',
    descBg:'Водонепропусклива бариера зад конструкцията. За тунели и подземни паркинги.',
    descEn:'Waterproof barrier behind the structure. For tunnels and underground parking.',
    materials:['HydroBloc Gel 530','HydroBloc Add 540','HydroBloc EP 811'],
    params:[{k:'Налягане',e:'Pressure',v:85,l:'Много високо',le:'Very high'},{k:'Интервал',e:'Spacing',v:50,l:'25-30 см',le:'25-30 cm'},{k:'Сложност',e:'Difficulty',v:95,l:'Критична',le:'Critical'}],
    icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="8" y1="3" x2="8" y2="21" strokeDasharray="3 2"/><line x1="12" y1="3" x2="12" y2="21" strokeDasharray="3 2"/><line x1="16" y1="3" x2="16" y2="21" strokeDasharray="3 2"/></svg>,
  },
  { id:'cracks',     color:'#DC2626', bg:'#FEF2F2', border:'#FECACA',
    tagBg:'Пукнатини',  tagEn:'Cracks',
    titleBg:'Пукнатини в бетон',         titleEn:'Concrete Cracks',
    descBg:'Инжектиране на пукнатини. Възстановява водоплътност и носеща способност.',
    descEn:'Injecting cracks in concrete. Restores watertightness and load-bearing capacity.',
    materials:['HydroBloc PU 500','HydroBloc 575 Integral','Silox EP 800','HydroBloc AC 555'],
    params:[{k:'Налягане',e:'Pressure',v:65,l:'Средно-високо',le:'Med-high'},{k:'Интервал',e:'Spacing',v:60,l:'15-25 см',le:'15-25 cm'},{k:'Сложност',e:'Difficulty',v:60,l:'Средна',le:'Medium'}],
    icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2"/><path d="M9 2l-2 7 3 3-4 10"/></svg>,
  },
  { id:'waterstop',  color:'#B45309', bg:'#FFFBEB', border:'#FDE68A',
    tagBg:'Аварийно',   tagEn:'Emergency',
    titleBg:'Активни течове',            titleEn:'Active Leaks',
    descBg:'Аварийно спиране на течове под налягане. Бързореагиращи пени ~10 секунди.',
    descEn:'Emergency stopping of leaks under pressure. Fast-reacting foams ~10 seconds.',
    materials:['HydroBloc Schaum 510','HydroBloc Rapid 570','HydroBloc Schaum 516'],
    params:[{k:'Налягане',e:'Pressure',v:100,l:'Екстремно',le:'Extreme'},{k:'Интервал',e:'Spacing',v:90,l:'5-10 см',le:'5-10 cm'},{k:'Сложност',e:'Difficulty',v:90,l:'Критична',le:'Critical'}],
    icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C12 2 5 10 5 15a7 7 0 0014 0C19 10 12 2 12 2z"/><line x1="9" y1="12" x2="15" y2="18"/><line x1="15" y1="12" x2="9" y2="18"/></svg>,
  },
  { id:'cavity',     color:'#059669', bg:'#ECFDF5', border:'#A7F3D0',
    tagBg:'Кухини',     tagEn:'Cavities',
    titleBg:'Кухини и пори',             titleEn:'Voids & Cavities',
    descBg:'Запълване на кухини зад облицовки и в почви. Стабилизация на плочи.',
    descEn:'Filling voids behind linings and in soils. Slab stabilization.',
    materials:['HydroBloc Schaum 510','GeoRock 181','SealFix 930','Planfloor 595'],
    params:[{k:'Налягане',e:'Pressure',v:20,l:'Ниско',le:'Low'},{k:'Интервал',e:'Spacing',v:30,l:'50+ см',le:'50+ cm'},{k:'Сложност',e:'Difficulty',v:50,l:'Средна',le:'Medium'}],
    icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2"/><ellipse cx="12" cy="12" rx="5" ry="4"/><circle cx="7" cy="7" r="1.5"/></svg>,
  },
  { id:'pipes',      color:'#6366F1', bg:'#EEF2FF', border:'#C7D2FE',
    tagBg:'Тръби',      tagEn:'Pipes',
    titleBg:'Тръбни проходи',            titleEn:'Pipe Penetrations',
    descBg:'Ремонт и уплътняване на тръбни проходи и шахти без разкопаване.',
    descEn:'Repair and sealing of pipe penetrations and shafts without excavation.',
    materials:['HydroBloc Rapid 570','HydroBloc Gel 530','HydroBloc Add 540'],
    params:[{k:'Налягане',e:'Pressure',v:55,l:'Средно',le:'Medium'},{k:'Интервал',e:'Spacing',v:60,l:'15-20 см',le:'15-20 cm'},{k:'Сложност',e:'Difficulty',v:70,l:'Висока',le:'High'}],
    icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="6" rx="9" ry="3"/><path d="M3 6v12q0 3 9 3t9-3V6"/></svg>,
  },
  { id:'structural', color:'#9F1239', bg:'#FFF1F2', border:'#FECDD3',
    tagBg:'Конструкции', tagEn:'Structural',
    titleBg:'Укрепване на конструкции',  titleEn:'Structural Reinforcement',
    descBg:'Възстановяване на носеща способност. Епоксидно залепване на пукнатини.',
    descEn:'Restoring load-bearing capacity. Epoxy bonding of structural cracks.',
    materials:['Silox EP 800','HydroBloc EP 811','GeoRock 181'],
    params:[{k:'Налягане',e:'Pressure',v:75,l:'Високо',le:'High'},{k:'Интервал',e:'Spacing',v:60,l:'15-20 см',le:'15-20 cm'},{k:'Сложност',e:'Difficulty',v:80,l:'Висока',le:'High'}],
    icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="1"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>,
  },
  { id:'barrier',    color:'#C2410C', bg:'#FFF7ED', border:'#FED7AA',
    tagBg:'Влага',      tagEn:'Damp',
    titleBg:'Хоризонтална бариера',      titleEn:'Horizontal Barrier',
    descBg:'Спиране на капилярна влага в зидария. Инжекция без разрушаване на зида.',
    descEn:'Stopping capillary moisture in masonry. Injection without wall demolition.',
    materials:['Remafix 709','Remafix 715'],
    params:[{k:'Налягане',e:'Pressure',v:15,l:'Гравитация',le:'Gravity'},{k:'Интервал',e:'Spacing',v:85,l:'10-12 см',le:'10-12 cm'},{k:'Сложност',e:'Difficulty',v:45,l:'Ниска',le:'Low'}],
    icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2"/><rect x="2" y="10" width="20" height="4" fill="currentColor" fillOpacity=".12"/><line x1="2" y1="12" x2="22" y2="12"/></svg>,
  },
];

export default function Solutions() {
  const [activeId, setActiveId] = useState(null);
  const active = problems.find(p => p.id === activeId);

  const handleSelect = (id) => {
    setActiveId(prev => prev === id ? null : id);
    if (activeId !== id) {
      setTimeout(() => document.getElementById('sol-detail-panel')?.scrollIntoView({ behavior:'smooth', block:'nearest' }), 60);
    }
  };

  const handleMat = (mat) => {
    const filter = materialToFilter[mat] || 'all';
    window.dispatchEvent(new CustomEvent('setProductFilter', { detail:{ filter } }));
    setTimeout(() => document.getElementById('products')?.scrollIntoView({ behavior:'smooth', block:'start' }), 80);
  };

  return (
    <section className="section sol2-section" id="solutions">
      <div className="container">

        {/* Header */}
        <div className="sol2-hdr">
          <div>
            <div className="eyebrow"><T bg="Интерактивна матрица" en="Interactive Matrix" /></div>
            <h2 className="h2" style={{ marginTop:8 }}>
              <T bg={<>Диагностика &amp; <span className="accent">Решения</span></>}
                 en={<>Diagnosis &amp; <span className="accent">Solutions</span></>} />
            </h2>
          </div>
          <p className="lead sol2-sub">
            <T bg="Изберете вид проблем — вижте препоръчани материали и технически параметри." en="Select problem type — see recommended materials and technical parameters." />
          </p>
        </div>

        {/* Problem cards grid */}
        <div className="sol2-grid" role="tablist" aria-label="Типове проблеми">
          {problems.map(p => {
            const isActive = p.id === activeId;
            return (
              <button
                key={p.id} role="tab" aria-selected={isActive}
                aria-controls="sol-detail-panel"
                className={`sol2-card${isActive ? ' sol2-card--active' : ''}`}
                style={{ '--c': p.color, '--bg': p.bg, '--bdr': p.border }}
                onClick={() => handleSelect(p.id)}
              >
                {/* Color top line */}
                <div className="sol2-card__line" aria-hidden="true" />

                <div className="sol2-card__top">
                  <div className="sol2-card__icon" aria-hidden="true">{p.icon}</div>
                  <span className="sol2-card__tag"><T bg={p.tagBg} en={p.tagEn} /></span>
                </div>

                <h3 className="sol2-card__title"><T bg={p.titleBg} en={p.titleEn} /></h3>

                {/* Arrow */}
                <div className="sol2-card__arrow" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    style={{ transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)', transition:'transform 220ms ease' }}>
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detail panel — expands below grid */}
        <div
          id="sol-detail-panel"
          className={`sol2-detail${active ? ' sol2-detail--open' : ''}`}
          role="tabpanel"
          aria-label={active ? (active.titleBg) : ''}
          style={active ? { '--c': active.color, '--bg': active.bg, '--bdr': active.border } : {}}
        >
          {active && (
            <div className="sol2-detail__inner" key={active.id}>

              {/* Left col: title + desc + gauges */}
              <div className="sol2-detail__left">
                <div className="sol2-detail__head">
                  <div className="sol2-detail__icon" aria-hidden="true">{active.icon}</div>
                  <div>
                    <span className="sol2-detail__eyebrow"><T bg="Техническо решение" en="Technical Solution" /></span>
                    <h3 className="sol2-detail__title"><T bg={active.titleBg} en={active.titleEn} /></h3>
                  </div>
                </div>
                <p className="sol2-detail__desc"><T bg={active.descBg} en={active.descEn} /></p>

                {/* Gauges */}
                <div className="sol2-gauges">
                  {active.params.map((param, i) => (
                    <div className="sol2-gauge" key={i}>
                      <div className="sol2-gauge__head">
                        <span className="sol2-gauge__key"><T bg={param.k} en={param.e} /></span>
                        <span className="sol2-gauge__val"><T bg={param.l} en={param.le} /></span>
                      </div>
                      <div className="sol2-gauge__track">
                        <div className="sol2-gauge__fill" style={{ width:`${param.v}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right col: materials + CTA */}
              <div className="sol2-detail__right">
                <div className="sol2-mats__label"><T bg="Препоръчани продукти ARCAN" en="Recommended ARCAN Products" /></div>
                <p className="sol2-mats__hint"><T bg="Кликнете за филтриране в каталога" en="Click to filter in catalogue" /></p>
                <div className="sol2-mats">
                  {active.materials.map((m,i) => (
                    <button key={i} className="sol2-mat" onClick={() => handleMat(m)}>
                      <span className="sol2-mat__dot" aria-hidden="true"/>
                      {m}
                      <svg className="sol2-mat__arrow" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </button>
                  ))}
                </div>
                <button className="btn btn-primary sol2-cta"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior:'smooth' })}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                  <T bg="Запитване за консултация" en="Request consultation" />
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </section>
  );
}
