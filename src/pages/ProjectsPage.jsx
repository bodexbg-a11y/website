import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useReveal } from '../hooks/useReveal';
import { updatePageMeta } from '../utils/seo';
import { T } from '../context/LangContext';

const projects = [
  {
    num: '01',
    tags: [
      { label: 'ПАВЕЦ · Украйна', done: false },
      { label: 'Изпълнено', done: true },
    ],
    titleBg: 'ПАВЕЦ Александривська — Укрепване на язовирна стена',
    titleEn: 'Aleksandrivska PSHPP — Dam Wall Reinforcement',
    problem: {
      bg: 'Активни течове и пукнатини в тялото на язовирната стена под хидростатично налягане.',
      en: 'Active leaks and cracks in the dam body under hydrostatic pressure.',
    },
    solution: {
      bg: 'Инжектиране с полиуретанова набъбваща смола HydroBloc PU 500 по схема 30 см. Монтаж на инжекционни пакери.',
      en: 'Injection with HydroBloc PU 500 swelling resin at 30 cm spacing. Installation of injection packers.',
    },
    result: {
      bg: 'Пълно спиране на течовете. Дългосрочна хидроизолация и укрепване на конструкцията.',
      en: 'Complete stop of leaks. Long-term waterproofing and structural reinforcement.',
    },
    photos: null,
  },
  {
    num: '02',
    tags: [
      { label: 'Новоднестровськ · Украйна', done: false },
      { label: 'Изпълнено', done: true },
    ],
    titleBg: 'Новоднестровск — Хидротехнически тунели',
    titleEn: 'Novodnistrovsk — Hydrotechnical Tunnels',
    problem: {
      bg: 'Проникване на вода и деламинация на бетон в хидротехнически тунели на ПАВЕЦ.',
      en: 'Water ingress and concrete delamination in PSHPP hydrotechnical tunnels.',
    },
    solution: {
      bg: 'Многоетапно инжектиране — спиране на активни течове с HydroBloc Schaum 510, последвано от финална хидроизолация.',
      en: 'Multi-stage injection — active leak stop with HydroBloc Schaum 510, followed by final waterproofing.',
    },
    result: {
      bg: 'Водонепропускливост на тунелните конструкции. Предотвратяване на по-нататъшна деградация.',
      en: 'Watertight tunnel structures. Prevention of further deterioration.',
    },
    photos: null,
  },
  {
    num: '03',
    tags: [
      { label: 'Южна Украйна · АЕЦ', done: false },
      { label: 'Изпълнено', done: true },
    ],
    titleBg: 'Южноукраинска АЕЦ — Специализирано укрепване',
    titleEn: 'South Ukrainian NPP — Specialized Reinforcement',
    problem: {
      bg: 'Пукнатини в бетонни конструкции с изисквания за радиационна защита и ядрена безопасност.',
      en: 'Cracks in concrete structures with radiation shielding and nuclear safety requirements.',
    },
    solution: {
      bg: 'Прилагане на сертифицирани материали ARCAN по специализирана методология за ядрени съоръжения.',
      en: 'Application of certified ARCAN materials using specialized methodology for nuclear facilities.',
    },
    result: {
      bg: 'Успешно укрепване при спазване на всички нормативи за ядрена безопасност.',
      en: 'Successful reinforcement in compliance with all nuclear safety standards.',
    },
    photos: null,
  },
];

const projStats = [
  {
    num: '3',
    labelBg: 'Мащабни инфраструктурни обекта',
    labelEn: 'Large infrastructure projects',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>,
  },
  {
    num: '15+',
    labelBg: 'Години на инжекционен опит',
    labelEn: 'Years of injection experience',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  },
  {
    num: '100%',
    labelBg: 'Успешни спирания на течове',
    labelEn: 'Successful leak stops',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>,
  },
  {
    num: 'ARCAN',
    labelBg: 'Сертифицирани немски материали',
    labelEn: 'Certified German materials',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  },
];

export default function ProjectsPage() {
  useReveal();

  useEffect(() => {
    updatePageMeta(
      'Нашите проекти - Инжекционни системи | BODEX Bulgaria',
      'Реални проекти на инфраструктурен мащаб: язовирни стени, хидротехнически тунели, енергийни съоръжения. Опит с ARCAN материали.',
      'https://bodexbulgaria.com/projects-og.jpg',
      'https://bodexbulgaria.com/projects'
    );
  }, []);

  return (
    <>
      {/* HERO */}
      <div className="hero-projects">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/"><T bg="Начало" en="Home" /></Link>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5 3l4 4-4 4" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span><T bg="Проекти" en="Projects" /></span>
          </div>
          <h1 className="h1">
            <T bg={<>Нашите <span className="accent-light">Проекти</span></>} en={<>Our <span className="accent-light">Projects</span></>} />
          </h1>
          <p className="lead" style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 580, marginTop: 20 }}>
            <T
              bg="Реален опит на обекти от инфраструктурен мащаб — язовирни стени, хидротехнически тунели и енергийни съоръжения."
              en="Real-world experience on infrastructure-scale objects — dam walls, hydrotechnical tunnels and energy facilities."
            />
          </p>
        </div>
      </div>

      {/* PROJECT CARDS */}
      <section className="section" style={{ background: 'var(--light-bg)' }}>
        <div className="container">
          {projects.map((p) => (
            <div className="project-card" data-reveal key={p.num}>
              <div className="project-num">{p.num}</div>
              {p.photos ? (
                <div className="project-photo-2col">
                  {p.photos.map((src, i) => <img key={i} src={src} alt="" />)}
                </div>
              ) : (
                <div style={{ height: 220, background: 'linear-gradient(135deg,#08090d,#0e1018)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)', position: 'relative', overflow: 'hidden' }}>
                  <svg width="120" height="180" viewBox="0 0 120 180" fill="none">
                    <line x1="0" y1="60" x2="120" y2="60" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
                    <line x1="0" y1="120" x2="120" y2="120" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
                    <line x1="40" y1="0" x2="40" y2="180" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
                    <line x1="80" y1="0" x2="80" y2="180" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
                    <polyline points="58,0 62,45 54,80 65,115 58,150 61,180" fill="none" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
                    <circle cx="62" cy="45" r="5" fill="#1a3fa8" stroke="#f59e0b" strokeWidth="1.5"/>
                    <circle cx="65" cy="115" r="5" fill="#1a3fa8" stroke="#f59e0b" strokeWidth="1.5"/>
                  </svg>
                  <span style={{position:'absolute',bottom:12,right:16,fontFamily:'"DM Mono",monospace',fontSize:'0.6rem',letterSpacing:'0.1em',color:'rgba(245,158,11,0.5)',textTransform:'uppercase'}}>Photo not available</span>
                </div>
              )}
              <div className="project-content">
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={t.label} className={`ptag${t.done ? ' ptag-done' : ''}`}>{t.label}</span>
                  ))}
                </div>
                <div className="project-title">
                  <T bg={p.titleBg} en={p.titleEn} />
                </div>
                <div className="project-prs">
                  <div className="pr-block pr-problem">
                    <div className="pr-label"><strong><T bg="Проблем" en="Problem" /></strong></div>
                    <p><T bg={p.problem.bg} en={p.problem.en} /></p>
                  </div>
                  <div className="pr-block pr-solution">
                    <div className="pr-label"><strong><T bg="Решение" en="Solution" /></strong></div>
                    <p><T bg={p.solution.bg} en={p.solution.en} /></p>
                  </div>
                  <div className="pr-block pr-result">
                    <div className="pr-label"><strong><T bg="Резултат" en="Result" /></strong></div>
                    <p><T bg={p.result.bg} en={p.result.en} /></p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* PROJ STATS */}
          <div className="proj-stats">
            {projStats.map((s) => (
              <div className="proj-stat" key={s.num}>
                <div className="proj-stat-icon">{s.icon}</div>
                <div className="proj-stat-num">{s.num}</div>
                <div className="proj-stat-label"><T bg={s.labelBg} en={s.labelEn} /></div>
              </div>
            ))}
          </div>

          {/* CTA BAND */}
          <div className="cta-band">
            <div className="cta-band-text">
              <h2><T bg="Имате подобен проект?" en="Have a similar project?" /></h2>
              <p><T bg="Свържете се с нас за консултация и оферта." en="Contact us for consultation and quote." /></p>
            </div>
            <div className="cta-band-actions">
              <Link to="/#contact" className="btn btn-white btn-lg">
                <T bg="Изпратете Запитване" en="Send Enquiry" />
              </Link>
              <Link to="/#products" className="btn btn-outline btn-lg">
                <T bg="Нашите Продукти" en="Our Products" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
