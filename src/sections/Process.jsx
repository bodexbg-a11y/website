import { T } from '../context/LangContext';

const steps = [
  { num: '01', titleBg: 'Запитване', titleEn: 'Enquiry', descBg: 'Изпращате запитване за материали или услуга', descEn: 'You send an enquiry for materials or services' },
  { num: '02', titleBg: 'Консултация', titleEn: 'Consultation', descBg: 'Инженер анализира проекта и препоръчва решение', descEn: 'Engineer analyzes the project and recommends solution' },
  { num: '03', titleBg: 'Оферта', titleEn: 'Proposal', descBg: 'Получавате детайлна оферта с материали и срокове', descEn: 'You receive a detailed proposal with terms' },
  { num: '04', titleBg: 'Изпълнение', titleEn: 'Execution', descBg: 'Доставка на материали или изпращаме екип', descEn: 'Material delivery or we dispatch our team' },
  { num: '05', titleBg: 'Поддръжка', titleEn: 'Support', descBg: 'Техническа поддръжка по време и след проекта', descEn: 'Technical support during and after completion' },
];

const injectionSteps = [
  {
    img: '/injection-step-drilling.jpg',
    titleBg: 'Пробиване към пукнатината',
    titleEn: 'Drilling toward the crack',
    descBg: 'Отворите се пробиват под ъгъл, така че да пресекат пукнатината в дълбочина.',
    descEn: 'Holes are drilled at an angle so they intersect the crack through the concrete depth.',
  },
  {
    img: '/injection-step-packers.jpg',
    titleBg: 'Монтаж на пакери',
    titleEn: 'Installing packers',
    descBg: 'Пакерите се фиксират плътно в отворите и създават контролирана точка за подаване.',
    descEn: 'Packers are fixed tightly in the holes and create controlled injection points.',
  },
  {
    img: '/injection-step-pumping.jpg',
    titleBg: 'Инжектиране на материал',
    titleEn: 'Injecting the material',
    descBg: 'Смолата се подава под налягане и запълва пукнатината отдолу нагоре.',
    descEn: 'Resin is pumped under pressure and fills the crack from bottom to top.',
  },
  {
    img: '/injection-step-sealed.jpg',
    titleBg: 'Запълване и запечатване',
    titleEn: 'Filling and sealing',
    descBg: 'След втвърдяване пукнатината е запълнена, а отворите се затварят чисто.',
    descEn: 'After curing, the crack is filled and the drilled holes are neatly sealed.',
  },
];

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="eyebrow" data-reveal style={{ justifyContent: 'center' }}><T bg="Как работим" en="How we work" /></div>
          <h2 className="h2" data-reveal>
            <T bg={<>Работен <span className="accent">Процес</span></>} en={<>Work <span className="accent">Process</span></>} />
          </h2>
        </div>
        <div className="process-timeline">
          {steps.map((s, i) => (
            <div className="process-step" data-reveal data-d={i > 0 ? String(i) : undefined} key={s.num}>
              <div className="step-num">{s.num}</div>
              <h4><T bg={s.titleBg} en={s.titleEn} /></h4>
              <p><T bg={s.descBg} en={s.descEn} /></p>
            </div>
          ))}
        </div>

        <div className="injection-process" data-reveal>
          <div className="injection-process-head">
            <div>
              <div className="eyebrow"><T bg="Технология" en="Technology" /></div>
              <h3>
                <T bg={<>Как работи <span className="accent">инжектирането през пакери</span></>} en={<>How <span className="accent">packer injection</span> works</>} />
              </h3>
            </div>
            <p>
              <T
                bg="Материалът се подава под контролирано налягане директно в пукнатината, за да възстанови водоплътността и целостта на бетона."
                en="Material is injected under controlled pressure directly into the crack to restore watertightness and concrete integrity."
              />
            </p>
          </div>

          <div className="injection-grid">
            {injectionSteps.map((step, index) => (
              <article className="injection-card" data-reveal data-d={index > 0 ? String(index) : undefined} key={step.img}>
                <div className="injection-img">
                  <img src={step.img} alt="" loading="lazy" />
                </div>
                <div className="injection-card-body">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h4><T bg={step.titleBg} en={step.titleEn} /></h4>
                  <p><T bg={step.descBg} en={step.descEn} /></p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
