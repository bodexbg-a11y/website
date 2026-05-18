import { T } from '../context/LangContext';

const steps = [
  { num: '01', titleBg: 'Запитване', titleEn: 'Enquiry', descBg: 'Изпращате запитване за материали или услуга', descEn: 'You send an enquiry for materials or services' },
  { num: '02', titleBg: 'Консултация', titleEn: 'Consultation', descBg: 'Инженер анализира проекта и препоръчва решение', descEn: 'Engineer analyzes the project and recommends solution' },
  { num: '03', titleBg: 'Оферта', titleEn: 'Proposal', descBg: 'Получавате детайлна оферта с материали и срокове', descEn: 'You receive a detailed proposal with terms' },
  { num: '04', titleBg: 'Изпълнение', titleEn: 'Execution', descBg: 'Доставка на материали или изпращаме екип', descEn: 'Material delivery or we dispatch our team' },
  { num: '05', titleBg: 'Поддръжка', titleEn: 'Support', descBg: 'Техническа поддръжка по време и след проекта', descEn: 'Technical support during and after completion' },
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
      </div>
    </section>
  );
}
