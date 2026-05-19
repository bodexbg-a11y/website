import { useState } from 'react';
import { T } from '../context/LangContext';

const problems = [
  {
    id: 'joints',
    titleBg: 'Уплътняване на работни фуги',
    titleEn: 'Construction Joint Sealing',
    descBg: 'Запечатване на студени фуги между бетонови отливки. Предотвратява проникване на вода през строителни швове.',
    descEn: 'Sealing cold joints between concrete pours. Prevents water ingress through construction joints.',
    materials: ['HydroBloc PU 500', 'HydroBloc 575 Integral', 'HydroBloc AC 502', 'HydroBloc Injekt 583'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="8" width="10" height="16" rx="2" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.9)" strokeWidth="2"/>
        <rect x="18" y="8" width="10" height="16" rx="2" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.9)" strokeWidth="2"/>
        <line x1="14" y1="10" x2="18" y2="10" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeDasharray="2,2"/>
        <line x1="14" y1="16" x2="18" y2="16" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeDasharray="2,2"/>
        <line x1="14" y1="22" x2="18" y2="22" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeDasharray="2,2"/>
      </svg>
    ),
  },
  {
    id: 'expansion',
    titleBg: 'Дилатационни фуги',
    titleEn: 'Expansion Joint Sealing',
    descBg: 'Еластично уплътняване на подвижни фуги. Издържа на многократни цикли на свиване и разширяване.',
    descEn: 'Elastic sealing of moving joints. Withstands repeated contraction and expansion cycles.',
    materials: ['HydroBloc 500-15', 'HydroBloc Rapid 570', 'HydroBloc Rapid 572', 'Polygel 530 + Polyblend 540'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="8" width="8" height="16" rx="2" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.9)" strokeWidth="2"/>
        <rect x="20" y="8" width="8" height="16" rx="2" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.9)" strokeWidth="2"/>
        <path d="M12 12 L14 16 L12 20 M20 12 L18 16 L20 20" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'curtain',
    titleBg: 'Завесна инжекция',
    titleEn: 'Curtain Injection',
    descBg: 'Създаване на водонепропусклива бариера зад конструкцията. За тунели, подземни паркинги и фундаменти.',
    descEn: 'Creating waterproof barrier behind the structure. For tunnels, underground parking and foundations.',
    materials: ['Polygel 530 + Polyblend 540', 'HydroBloc Polygrout 650', 'HydroBloc Polygel 660', 'SiliBond Si 711'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="4" width="20" height="24" rx="2" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.9)" strokeWidth="2"/>
        <path d="M10 8 L10 24 M16 8 L16 24 M22 8 L22 24" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeDasharray="3,2"/>
        <rect x="2" y="10" width="4" height="12" rx="1" fill="rgba(255,255,255,0.3)"/>
      </svg>
    ),
  },
  {
    id: 'cracks',
    titleBg: 'Запълване на пукнатини',
    titleEn: 'Crack Injection',
    descBg: 'Инжектиране на пукнатини в бетон и зидария. Възстановява водоплътност и/или носеща способност.',
    descEn: 'Injecting cracks in concrete and masonry. Restores watertightness and/or load-bearing capacity.',
    materials: ['HydroBloc PU 500', 'HydroBloc 575 Integral', 'Silox EP 800', 'Silox Injection 811 nt', 'HydroBloc AC 555'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="24" height="24" rx="3" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.9)" strokeWidth="2"/>
        <path d="M12 4 L14 12 L10 18 L16 28" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'waterstop',
    titleBg: 'Спиране на течове',
    titleEn: 'Water Stoppage',
    descBg: 'Аварийно спиране на активни течове под налягане. Бързореагиращи пени и гелове.',
    descEn: 'Emergency stopping of active leaks under pressure. Fast-reacting foams and gels.',
    materials: ['HydroBloc 575 Integral', 'HydroBloc 510', 'HydroBloc 620 NV', 'HydroBloc Rapid 570', 'HydroBloc Schaum 516'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="10" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.9)" strokeWidth="2"/>
        <path d="M12 12 L20 20 M20 12 L12 20" stroke="rgba(255,255,255,0.8)" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M16 6 Q18 4 20 6 M16 26 Q18 28 20 26" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'cavity',
    titleBg: 'Запълване на кухини',
    titleEn: 'Cavity Filling',
    descBg: 'Запълване на празнини зад облицовки, в почви и скали. Стабилизация и укрепване.',
    descEn: 'Filling voids behind linings, in soils and rocks. Stabilization and reinforcement.',
    materials: ['HydroBloc 510', 'GeoRock 185', 'Seal Fix Mörtel 930', 'HydroBloc 516', 'Planfloor 595', 'HydroBloc 1200'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="24" height="24" rx="3" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.9)" strokeWidth="2"/>
        <ellipse cx="16" cy="16" rx="6" ry="5" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5"/>
        <ellipse cx="10" cy="10" rx="3" ry="2.5" fill="rgba(255,255,255,0.2)"/>
        <ellipse cx="22" cy="22" rx="2.5" ry="2" fill="rgba(255,255,255,0.2)"/>
      </svg>
    ),
  },
  {
    id: 'excavation',
    titleBg: 'Шпунтови стени и изкопи',
    titleEn: 'Sheet Pile & Excavation',
    descBg: 'Уплътняване на шпунтови стени, диафрагмени стени и строителни изкопи.',
    descEn: 'Sealing sheet pile walls, diaphragm walls and construction excavations.',
    materials: ['HydroBloc 575 Integral', 'HydroBloc 510', 'HydroBloc 620', 'HydroBloc Polygrout 650', 'HydroBloc Schaum 516'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M4 28 L4 8 L8 4 L12 8 L12 28" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M12 28 L12 8 L16 4 L20 8 L20 28" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M20 28 L20 8 L24 4 L28 8 L28 28" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'pipes',
    titleBg: 'Канали и шахти',
    titleEn: 'Pipes & Manholes',
    descBg: 'Ремонт и уплътняване на канализационни тръби, шахти и колектори без разкопаване.',
    descEn: 'Repair and sealing of sewer pipes, manholes and collectors without excavation.',
    materials: ['HydroBloc Rapid 570', 'HydroBloc Rapid 572', 'HydroBloc Polygrout 650', 'Polygel 530 + Polyblend 540'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <ellipse cx="16" cy="8" rx="10" ry="4" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.9)" strokeWidth="2"/>
        <path d="M6 8 L6 24 Q6 28 16 28 Q26 28 26 24 L26 8" stroke="rgba(255,255,255,0.9)" strokeWidth="2" fill="none"/>
        <ellipse cx="16" cy="24" rx="10" ry="4" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    id: 'structural',
    titleBg: 'Структурно укрепване',
    titleEn: 'Structural Reinforcement',
    descBg: 'Възстановяване на носеща способност. Залепване на пукнатини, укрепване на бетон и зидария.',
    descEn: 'Restoring load-bearing capacity. Crack bonding, reinforcement of concrete and masonry.',
    materials: ['Silox EP 800', 'Silox Injection 811 nt', 'Silox EP 840', 'HydroBloc AC 555', 'GeoRock 185'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="6" width="20" height="20" rx="2" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.9)" strokeWidth="2"/>
        <line x1="6" y1="13" x2="26" y2="13" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
        <line x1="6" y1="19" x2="26" y2="19" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
        <line x1="13" y1="6" x2="13" y2="26" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
        <line x1="19" y1="6" x2="19" y2="26" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    id: 'anchoring',
    titleBg: 'Анкериране',
    titleEn: 'Anchoring',
    descBg: 'Химическо закрепване на анкери, арматура и болтове в бетон и скала.',
    descEn: 'Chemical anchoring of anchors, rebar and bolts in concrete and rock.',
    materials: ['HydroBloc AC 555', 'Silox Bauharz 834', 'Silox Bauharz 835', 'PU Ankerharz 640', 'HydroBloc OM 593'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="18" width="24" height="10" rx="2" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.9)" strokeWidth="2"/>
        <line x1="16" y1="4" x2="16" y2="18" stroke="rgba(255,255,255,0.9)" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="16" cy="6" r="3" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    id: 'slab',
    titleBg: 'Повдигане на плочи',
    titleEn: 'Slab Lifting',
    descBg: 'Повдигане и стабилизация на пропаднали бетонови плочи, пътни настилки и подове без разрушаване.',
    descEn: 'Lifting and stabilization of sunken concrete slabs, pavements and floors without demolition.',
    materials: ['Planfloor 595', 'HydroBloc OM 597', 'HydroBloc 1200', 'HydroBloc 1201'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="18" width="24" height="6" rx="2" fill="rgba(255,255,255,0.8)" stroke="rgba(255,255,255,0.5)" strokeWidth="1"/>
        <rect x="4" y="10" width="24" height="6" rx="1.5" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5"/>
        <polyline points="10,10 16,4 22,10" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'barrier',
    titleBg: 'Хоризонтална бариера',
    titleEn: 'Horizontal Barrier',
    descBg: 'Спиране на капилярна влага в зидария. Инжекционна бариера без разрушаване на стените.',
    descEn: 'Stopping capillary moisture in masonry. Injection barrier without wall demolition.',
    materials: ['Remafix 709', 'Remafix 715', 'SiliBond Si 711', 'SiliBond Si 714 reactiv'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="24" height="24" rx="2" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.7)" strokeWidth="2"/>
        <rect x="4" y="14" width="24" height="4" rx="1" fill="rgba(255,255,255,0.9)"/>
        <path d="M8 18 Q10 24 12 26 M16 18 Q18 24 20 26 M24 18 Q26 24 28 26" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <path d="M8 14 Q10 8 12 6 M16 14 Q18 8 20 6 M24 14 Q26 8 28 6" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeLinecap="round" strokeDasharray="2,2" fill="none"/>
      </svg>
    ),
  },
];

export default function Solutions() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="section" id="solutions">
      <div className="container">
        <div>
          <div className="eyebrow" data-reveal>—— <T bg="Матрица на решенията" en="Solutions Matrix" /></div>
          <h2 className="h2" data-reveal>
            <T bg="Проблем → " en="Problem → " />
            <span className="accent"><T bg="Решение" en="Solution" /></span>
          </h2>
        </div>

        <p className="section-subtitle" data-reveal style={{ maxWidth: '700px', marginTop: '16px', marginBottom: '40px' }}>
          <T 
            bg="Изберете типа проблем и вижте кои ARCAN материали са препоръчителни за неговото решаване." 
            en="Select the problem type and see which ARCAN materials are recommended for solving it." 
          />
        </p>

        <div className="solutions-grid">
          {problems.map((problem) => (
            <div 
              className={`solution-card revealed ${expanded === problem.id ? 'expanded' : ''}`} 
              key={problem.id}
            >
              <div 
                className="solution-card-header"
                onClick={() => setExpanded(expanded === problem.id ? null : problem.id)}
                role="button"
                tabIndex="0"
                onKeyDown={(e) => e.key === 'Enter' && setExpanded(expanded === problem.id ? null : problem.id)}
                aria-expanded={expanded === problem.id}
              >
                <div className="solution-icon-wrap">{problem.icon}</div>
                <div className="solution-text">
                  <h3><T bg={problem.titleBg} en={problem.titleEn} /></h3>
                  <p><T bg={problem.descBg} en={problem.descEn} /></p>
                </div>
                <div className="solution-toggle">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points={expanded === problem.id ? "15 12 10 7 5 12" : "5 8 10 13 15 8"} />
                  </svg>
                </div>
              </div>
              
              {expanded === problem.id && (
                <div className="solution-materials">
                  <span className="materials-label"><T bg="Препоръчани материали:" en="Recommended materials:" /></span>
                  <div className="materials-list">
                    {problem.materials.map((mat, idx) => (
                      <span key={idx} className="material-tag">{mat}</span>
                    ))}
                  </div>
                  <a href="#contact" className="btn btn-primary btn-sm" style={{ marginTop: '16px' }}>
                    <T bg="Консултация" en="Get Consultation" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
