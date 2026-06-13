import { T } from '../context/LangContext';

const steps = [
  {
    num: '01',
    titleBg: 'Запитване', titleEn: 'Enquiry',
    descBg: 'Изпращате запитване за материали или услуга',
    descEn: 'You send an enquiry for materials or services',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
  },
  {
    num: '02',
    titleBg: 'Консултация', titleEn: 'Consultation',
    descBg: 'Инженер анализира проекта и препоръчва решение',
    descEn: 'Engineer analyzes the project and recommends a solution',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
  },
  {
    num: '03',
    titleBg: 'Оферта', titleEn: 'Proposal',
    descBg: 'Получавате детайлна оферта с материали и срокове',
    descEn: 'You receive a detailed proposal with materials and timeline',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
  },
  {
    num: '04',
    titleBg: 'Изпълнение', titleEn: 'Execution',
    descBg: 'Доставка на материали или изпращаме екип на обекта',
    descEn: 'Material delivery or we dispatch our team to the site',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13"/>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
  {
    num: '05',
    titleBg: 'Поддръжка', titleEn: 'Support',
    descBg: 'Техническа поддръжка по време и след проекта',
    descEn: 'Technical support during and after project completion',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
  },
];

const injectionSteps = [
  { img: '/injection-step-drilling.jpg',  titleBg: 'Пробиване', titleEn: 'Drilling',
    descBg: 'Отворите се пробиват под ъгъл към пукнатината.', descEn: 'Holes drilled at angle toward the crack.' },
  { img: '/injection-step-packers.jpg',   titleBg: 'Монтаж на пакери', titleEn: 'Installing packers',
    descBg: 'Пакерите се фиксират в отворите.', descEn: 'Packers fixed tightly in the holes.' },
  { img: '/injection-step-pumping.jpg',   titleBg: 'Инжектиране', titleEn: 'Injection',
    descBg: 'Смолата се подава под налягане.', descEn: 'Resin pumped under pressure.' },
  { img: '/injection-step-sealed.jpg',    titleBg: 'Запечатване', titleEn: 'Sealing',
    descBg: 'Пукнатината е запълнена и затворена.', descEn: 'Crack filled and neatly sealed.' },
];

export default function Process() {
  return (
    <section id="process" className="section process-section">
      <div className="container">

        {/* Header */}
        <div className="proc-hdr">
          <div>
            <div className="eyebrow"><T bg="Как работим" en="How we work" /></div>
            <h2 className="h2" style={{ marginTop: 8 }}>
              <T bg={<>Работен <span className="accent">Процес</span></>}
                 en={<>Work <span className="accent">Process</span></>} />
            </h2>
          </div>
          <p className="lead proc-sub">
            <T
              bg="От първото запитване до финалния резултат — 5 ясни стъпки."
              en="From first enquiry to final result — 5 clear steps."
            />
          </p>
        </div>

        {/* Steps — горизонтальная лента с соединителями */}
        <div className="proc-steps">
          {steps.map((s, i) => (
            <div className="proc-step" key={s.num}>
              {/* connector line between steps */}
              {i < steps.length - 1 && <div className="proc-step__line" aria-hidden="true" />}
              <div className="proc-step__circle">
                <span className="proc-step__icon" aria-hidden="true">{s.icon}</span>
              </div>
              <div className="proc-step__num" aria-hidden="true">{s.num}</div>
              <h4 className="proc-step__title" data-n={s.num}><T bg={s.titleBg} en={s.titleEn} /></h4>
              <p className="proc-step__desc"><T bg={s.descBg} en={s.descEn} /></p>
            </div>
          ))}
        </div>

        {/* Injection photos — горизонтальный скролл с реальными фото */}
        <div className="proc-photos-wrap">
          <div className="proc-photos-hdr">
            <div className="eyebrow"><T bg="Технология" en="Technology" /></div>
            <h3 className="h3" style={{ marginTop: 6 }}>
              <T bg={<>Как работи <span className="accent">инжектирането</span></>}
                 en={<>How <span className="accent">injection</span> works</>} />
            </h3>
          </div>
          <div className="proc-photos">
            {injectionSteps.map((s, i) => (
              <div className="proc-photo" key={i}>
                <div className="proc-photo__img">
                  <img src={s.img} alt={`Step ${i+1}: ${s.titleEn}`} loading="lazy" />
                  <div className="proc-photo__overlay">
                    <span className="proc-photo__n">0{i + 1}</span>
                  </div>
                </div>
                <div className="proc-photo__body">
                  <h4 className="proc-photo__title"><T bg={s.titleBg} en={s.titleEn} /></h4>
                  <p className="proc-photo__desc"><T bg={s.descBg} en={s.descEn} /></p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
