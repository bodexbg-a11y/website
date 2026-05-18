import { T } from '../context/LangContext';

const CheckIcon = () => (
  <div className="check-icon">
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
      <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  </div>
);

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="eyebrow" data-reveal><T bg="Нашите услуги" en="Our services" /></div>
        <h2 className="h2" data-reveal><T bg={<>Какво <span className="accent">Правим</span></>} en={<>What We <span className="accent">Do</span></>} /></h2>
        <div className="services-grid">
          {/* Supply Service */}
          <div className="service-card" data-reveal>
            <div className="service-card-head">
              <div className="service-icon-wrap">
                <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 8 L6 26 L26 26 L26 8" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round"/>
                  <rect x="10" y="12" width="6" height="14" rx="1" fill="rgba(255,255,255,0.6)"/>
                  <rect x="18" y="16" width="6" height="10" rx="1" fill="rgba(255,255,255,0.4)"/>
                  <path d="M4 8 L16 4 L28 8" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="22" cy="8" r="3" fill="rgba(255,255,255,0.8)"/>
                  <line x1="22" y1="5" x2="22" y2="2" stroke="rgba(255,255,255,0.7)" strokeWidth="2"/>
                </svg>
              </div>
              <h3><T bg="Доставка на Инжекционни Материали" en="Injection Materials Supply" /></h3>
              <p><T bg="Оптова доставка на полимерни смоли, пени, гелове и минерални инжекции от ARCAN Waterproofing (Германия)." en="Wholesale supply of polymer resins, foams, gels and mineral injections from ARCAN Waterproofing (Germany)." /></p>
            </div>
            <div className="service-card-body">
              <ul className="service-list">
                {[
                  { bg: 'Полиуретанови и епоксидни смоли', en: 'Polyurethane and epoxy resins' },
                  { bg: 'Инжекционни пени и гелове', en: 'Injection foams and gels' },
                  { bg: 'Минерални разтвори за инжектиране', en: 'Mineral injection mortars' },
                  { bg: 'Набъбващи ленти и уплътнения', en: 'Swellable tapes and sealants' },
                  { bg: 'Инжекционни помпи и пакери', en: 'Injection pumps and packers' },
                ].map((item) => (
                  <li key={item.en}><CheckIcon /><T bg={item.bg} en={item.en} /></li>
                ))}
              </ul>
              <a href="#contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                <T bg="Запитване за Материал" en="Material Enquiry" />
              </a>
            </div>
          </div>

          {/* Reinforcement Service */}
          <div className="service-card" data-reveal data-d="1">
            <div className="service-card-head" style={{ background: 'linear-gradient(135deg,#0f3460,#1e3090)' }}>
              <div className="service-icon-wrap">
                <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="18" width="24" height="10" rx="2" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.8)" strokeWidth="1.8"/>
                  <polyline points="8,18 8,10 24,10 24,18" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.8"/>
                  <line x1="16" y1="4" x2="16" y2="10" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeDasharray="2,2"/>
                  <polyline points="10,18 12,14 16,20 20,12 22,18" fill="none" stroke="#93a8f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="16" cy="4" r="3" fill="rgba(255,255,255,0.8)"/>
                </svg>
              </div>
              <h3><T bg="Укрепване на Конструкции" en="Structural Reinforcement" /></h3>
              <p><T bg="Изпълнение на инжекционни работи — укрепване на фундаменти, ремонт на пукнатини, хидроизолация. Всякакви обекти." en="Execution of injection works — foundation reinforcement, crack repair, waterproofing. Any type of object." /></p>
            </div>
            <div className="service-card-body">
              <ul className="service-list">
                {[
                  { bg: 'Укрепване на фундаменти и основи', en: 'Foundation and base reinforcement' },
                  { bg: 'Ремонт на пукнатини в бетон', en: 'Concrete crack repair' },
                  { bg: 'Хидроизолация чрез инжектиране', en: 'Waterproofing by injection' },
                  { bg: 'Уплътняване на строителни фуги', en: 'Construction joint sealing' },
                  { bg: 'Стабилизация на почви и основи', en: 'Soil and foundation stabilization' },
                ].map((item) => (
                  <li key={item.en}><CheckIcon /><T bg={item.bg} en={item.en} /></li>
                ))}
              </ul>
              <a href="#contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                <T bg="Запитване за Услуга" en="Service Enquiry" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
