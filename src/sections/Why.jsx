import { T } from '../context/LangContext';

const cards = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="12" fill="rgba(53,71,184,0.1)"/>
        <rect x="8" y="22" width="32" height="18" rx="3" fill="none" stroke="#3547b8" strokeWidth="2.5"/>
        <rect x="14" y="16" width="20" height="10" rx="2" fill="none" stroke="#5b6fd6" strokeWidth="2"/>
        <line x1="24" y1="22" x2="24" y2="40" stroke="#3547b8" strokeWidth="1.5" strokeDasharray="2,2"/>
        <circle cx="24" cy="12" r="3" fill="#3547b8"/>
        <line x1="24" y1="15" x2="24" y2="16" stroke="#3547b8" strokeWidth="2"/>
      </svg>
    ),
    titleBg: 'Директни доставки', titleEn: 'Direct Supply',
    textBg: 'Официален партньор на ARCAN Waterproofing (Германия). Материали без посредници с пълна техническа документация.',
    textEn: 'Authorized partner of ARCAN Waterproofing (Germany). Materials with no intermediaries and full technical documentation.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="12" fill="rgba(53,71,184,0.1)"/>
        <circle cx="24" cy="20" r="10" fill="none" stroke="#3547b8" strokeWidth="2.5"/>
        <path d="M18 34 C18 28 30 28 30 34" fill="none" stroke="#5b6fd6" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="24" y1="16" x2="24" y2="20" stroke="#3547b8" strokeWidth="2" strokeLinecap="round"/>
        <line x1="24" y1="20" x2="27" y2="23" stroke="#3547b8" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="20" r="2" fill="#3547b8"/>
      </svg>
    ),
    titleBg: 'Инженерна консултация', titleEn: 'Engineering Consultation',
    textBg: 'Екип от специалисти с 15+ години опит. Подбираме оптималното решение за всеки проект и осигуряваме техническа поддръжка.',
    textEn: 'Team of specialists with 15+ years of experience. We select the optimal solution for each project and provide technical support.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="12" fill="rgba(53,71,184,0.1)"/>
        <path d="M24 8 L38 15 L38 27 C38 35 31 42 24 44 C17 42 10 35 10 27 L10 15 Z" fill="none" stroke="#3547b8" strokeWidth="2.5" strokeLinejoin="round"/>
        <polyline points="17,24 22,29 31,20" stroke="#5b6fd6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
    titleBg: 'Сертифицирани продукти', titleEn: 'Certified Products',
    textBg: 'Всички материали са сертифицирани по европейски стандарти с CE маркировка и съответстват на изискванията на строителните норми.',
    textEn: 'All materials are certified to European standards with CE marking and comply with construction norms requirements.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="12" fill="rgba(53,71,184,0.1)"/>
        <rect x="8" y="20" width="32" height="20" rx="4" fill="none" stroke="#3547b8" strokeWidth="2.5"/>
        <path d="M16 20 L16 16 C16 12 20 9 24 9 C28 9 32 12 32 16 L32 20" fill="none" stroke="#5b6fd6" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="24" cy="30" r="3" fill="#3547b8"/>
        <line x1="24" y1="33" x2="24" y2="36" stroke="#3547b8" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    titleBg: 'Гъвкави условия', titleEn: 'Flexible Terms',
    textBg: 'Цени на едро, гъвкави обеми и срокове. Дългосрочни партньорства с изгодни условия за редовни клиенти.',
    textEn: 'Wholesale prices, flexible quantities and timelines. Long-term partnerships with favorable terms for regular clients.',
  },
];

export default function Why() {
  return (
    <section id="why" className="section">
      <div className="container">
        <div className="why-header">
          <div>
            <div className="eyebrow"><T bg="Защо нас" en="Why us" /></div>
            <h2 className="h2" data-reveal>
              <T
                bg={<>Вашият Надежден<br /><span className="accent">B2B Партньор</span></>}
                en={<>Your Reliable<br /><span className="accent">B2B Partner</span></>}
              />
            </h2>
          </div>
          <div data-reveal data-d="1">
            <p className="lead">
              <T
                bg="Работим само с регистрирани строителни фирми, проектанти и дистрибутори. Осигуряваме директни доставки на сертифицирани немски материали и изпълнение на инжекционни работи на всякакви обекти."
                en="We work exclusively with registered construction firms, designers and distributors. We provide direct delivery of certified German materials and injection works on any type of project."
              />
            </p>
          </div>
        </div>
        <div className="why-grid">
          {cards.map((c, i) => (
            <div className="why-card" data-reveal data-d={i > 0 ? String(i) : undefined} key={c.titleEn}>
              <div className="why-icon">{c.icon}</div>
              <h3><T bg={c.titleBg} en={c.titleEn} /></h3>
              <p><T bg={c.textBg} en={c.textEn} /></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
