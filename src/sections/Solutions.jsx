import { useState } from 'react';
import { T } from '../context/LangContext';

const materialToFilter = {
  // Sealants
  'HydroTape': 'seal',
  'BentoFlex': 'seal',
  'Pro Inject 403': 'seal',
  // Resins
  'HydroBloc PU 500': 'resins',
  'HydroBloc 575 Integral': 'resins',
  'HydroBloc Rapid 570': 'resins',
  'HydroBloc EP 811': 'resins',
  'Silox Injection 811 nt': 'resins',
  'PU Ankerharz 640': 'resins',
  'HydroBloc Injekt 583': 'resins',
  'HydroBloc 500-15': 'resins',
  'HydroBloc Rapid 572': 'resins',
  // Foams & Gels
  'HydroBloc Schaum 510': 'foam',
  'HydroBloc AC 555': 'foam',
  'HydroBloc Gel 530': 'foam',
  'Polygel 530 + Polyblend 540': 'foam',
  'HydroBloc Polygrout 650': 'foam',
  'HydroBloc Polygel 660': 'foam',
  'HydroBloc 510': 'foam',
  'HydroBloc 620 NV': 'foam',
  'HydroBloc Schaum 516': 'foam',
  'HydroBloc 516': 'foam',
  'HydroBloc 620': 'foam',
  'Polygel 530': 'foam',
  'HydroBloc Add 540': 'foam',
  'HydroBloc AC 502': 'foam',
  // Mortars
  'GeoRock 181': 'mortar',
  'GeoRock 185': 'mortar',
  'SealFix 930': 'mortar',
  'Seal Fix Mörtel 930': 'mortar',
  'Silox EP 800': 'mortar',
  'Silox EP 840': 'mortar',
  'Planfloor 595': 'mortar',
  'HydroBloc OM 593': 'mortar',
  'HydroBloc OM 597': 'mortar',
  'HydroBloc 1200': 'mortar',
  'HydroBloc 1201': 'mortar',
  // Coatings
  'Cembond 863': 'coating',
  'HydroCoat 750': 'coating',
  // Horizontal Barrier
  'Remafix 709': 'barrier',
  'Remafix 715': 'barrier',
  'SiliBond Si 711': 'barrier',
  'SiliBond Si 714 reactiv': 'barrier'
};

const problems = [
  {
    id: 'joints',
    titleBg: 'Уплътняване на работни фуги',
    titleEn: 'Construction Joint Sealing',
    descBg: 'Запечатване на студени фуги между бетонови отливки. Предотвратява проникване на вода през строителни фуги.',
    descEn: 'Sealing cold joints between concrete pours. Prevents water ingress through construction joints.',
    materials: ['HydroBloc PU 500', 'HydroBloc 575 Integral', 'HydroBloc AC 502', 'HydroBloc Injekt 583'],
    params: {
      pressure: { val: 30, labelBg: 'Нисък дебит', labelEn: 'Low flow' },
      spacing: { val: 60, labelBg: '15-20 см', labelEn: '15-20 cm' },
      difficulty: { val: 40, labelBg: 'Стандартна', labelEn: 'Standard' }
    },
    icon: (
      <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="8" width="10" height="16" rx="2" fill="rgba(255,255,255,0.2)" stroke="currentColor" strokeWidth="2"/>
        <rect x="18" y="8" width="10" height="16" rx="2" fill="rgba(255,255,255,0.2)" stroke="currentColor" strokeWidth="2"/>
        <line x1="14" y1="10" x2="18" y2="10" stroke="currentColor" strokeWidth="2" strokeDasharray="2,2"/>
        <line x1="14" y1="16" x2="18" y2="16" stroke="currentColor" strokeWidth="2" strokeDasharray="2,2"/>
        <line x1="14" y1="22" x2="18" y2="22" stroke="currentColor" strokeWidth="2" strokeDasharray="2,2"/>
      </svg>
    ),
  },
  {
    id: 'expansion',
    titleBg: 'Дилатационни фуги',
    titleEn: 'Expansion Joint Sealing',
    descBg: 'Еластично уплътняване на подвижни фуги. Издържа на многократни цикли на свиване и разширяване.',
    descEn: 'Elastic sealing of moving joints. Withstands repeated contraction and expansion cycles.',
    materials: ['HydroBloc PU 500', 'HydroBloc Rapid 570', 'HydroBloc Gel 530'],
    params: {
      pressure: { val: 50, labelBg: 'Средно налягане', labelEn: 'Medium pressure' },
      spacing: { val: 80, labelBg: '10-15 см (Гъсто)', labelEn: '10-15 cm (Dense)' },
      difficulty: { val: 75, labelBg: 'Висока сложност', labelEn: 'High complexity' }
    },
    icon: (
      <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="8" width="8" height="16" rx="2" fill="rgba(255,255,255,0.2)" stroke="currentColor" strokeWidth="2"/>
        <rect x="20" y="8" width="8" height="16" rx="2" fill="rgba(255,255,255,0.2)" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 12 L14 16 L12 20 M20 12 L18 16 L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'curtain',
    titleBg: 'Завесна инжекция',
    titleEn: 'Curtain Injection',
    descBg: 'Създаване на водонепропусклива бариера зад конструкцията. За тунели, подземни паркинги и фундаменти.',
    descEn: 'Creating waterproof barrier behind the structure. For tunnels, underground parking and foundations.',
    materials: ['HydroBloc Gel 530', 'HydroBloc Add 540', 'HydroBloc EP 811'],
    params: {
      pressure: { val: 80, labelBg: 'Високо налягане', labelEn: 'High pressure' },
      spacing: { val: 50, labelBg: '25-30 см', labelEn: '25-30 cm' },
      difficulty: { val: 95, labelBg: 'Изключително висока', labelEn: 'Extreme difficulty' }
    },
    icon: (
      <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="4" width="20" height="24" rx="2" fill="rgba(255,255,255,0.1)" stroke="currentColor" strokeWidth="2"/>
        <path d="M10 8 L10 24 M16 8 L16 24 M22 8 L22 24" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3,2"/>
        <rect x="2" y="10" width="4" height="12" rx="1" fill="rgba(255,255,255,0.3)"/>
      </svg>
    ),
  },
  {
    id: 'cracks',
    titleBg: 'Запълване на пукнатини',
    titleEn: 'Crack Injection',
    descBg: 'Инжектиране на пукнатини в бетон и зидария. Възстановява водоплътност и носеща способност.',
    descEn: 'Injecting cracks in concrete and masonry. Restores watertightness and load-bearing capacity.',
    materials: ['HydroBloc PU 500', 'HydroBloc 575 Integral', 'Silox EP 800', 'HydroBloc AC 555'],
    params: {
      pressure: { val: 65, labelBg: 'Средно до високо', labelEn: 'Medium to high' },
      spacing: { val: 60, labelBg: '15-25 см', labelEn: '15-25 cm' },
      difficulty: { val: 60, labelBg: 'Средна сложност', labelEn: 'Medium complexity' }
    },
    icon: (
      <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="24" height="24" rx="3" fill="rgba(255,255,255,0.1)" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 4 L14 12 L10 18 L16 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'waterstop',
    titleBg: 'Спиране на активни течове',
    titleEn: 'Water Leak Stoppage',
    descBg: 'Аварийно спиране на активни течове под налягане. Бързореагиращи пени и гелове.',
    descEn: 'Emergency stopping of active leaks under pressure. Fast-reacting foams and gels.',
    materials: ['HydroBloc Schaum 510', 'HydroBloc Rapid 570', 'HydroBloc Schaum 516'],
    params: {
      pressure: { val: 100, labelBg: 'Много високо (Активен теч)', labelEn: 'Extreme (Active leak)' },
      spacing: { val: 90, labelBg: '5-10 см (Много гъсто)', labelEn: '5-10 cm (Very dense)' },
      difficulty: { val: 90, labelBg: 'Критична сложност', labelEn: 'Critical complexity' }
    },
    icon: (
      <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="10" fill="rgba(255,255,255,0.1)" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 12 L20 20 M20 12 L12 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M16 6 Q18 4 20 6 M16 26 Q18 28 20 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'cavity',
    titleBg: 'Запълване на кухини',
    titleEn: 'Cavity Filling',
    descBg: 'Запълване на празнини зад облицовки, в почви и скали. Стабилизация и укрепване на плочи.',
    descEn: 'Filling voids behind linings, in soils and rocks. Stabilization and slab reinforcement.',
    materials: ['HydroBloc Schaum 510', 'GeoRock 181', 'SealFix 930', 'Planfloor 595'],
    params: {
      pressure: { val: 20, labelBg: 'Ниско (Гравитачно)', labelEn: 'Low (Gravity)' },
      spacing: { val: 30, labelBg: '50+ см (Рядко)', labelEn: '50+ cm (Sparse)' },
      difficulty: { val: 50, labelBg: 'Средна сложност', labelEn: 'Medium complexity' }
    },
    icon: (
      <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="24" height="24" rx="3" fill="rgba(255,255,255,0.1)" stroke="currentColor" strokeWidth="2"/>
        <ellipse cx="16" cy="16" rx="6" ry="5" fill="rgba(255,255,255,0.3)" stroke="currentColor" strokeWidth="1.5"/>
        <ellipse cx="10" cy="10" rx="3" ry="2.5" fill="rgba(255,255,255,0.2)"/>
        <ellipse cx="22" cy="22" rx="2.5" ry="2" fill="rgba(255,255,255,0.2)"/>
      </svg>
    ),
  },
  {
    id: 'pipes',
    titleBg: 'Канали и тръбни проходи',
    titleEn: 'Pipes & Pipe Penetrations',
    descBg: 'Ремонт и уплътняване на тръбни проходи, канализационни тръби и шахти без разкопаване.',
    descEn: 'Repair and sealing of pipe penetrations, sewer pipes and manholes without excavation.',
    materials: ['HydroBloc Rapid 570', 'HydroBloc Gel 530', 'HydroBloc Add 540'],
    params: {
      pressure: { val: 55, labelBg: 'Средно налягане', labelEn: 'Medium pressure' },
      spacing: { val: 60, labelBg: '15-20 см', labelEn: '15-20 cm' },
      difficulty: { val: 70, labelBg: 'Висока сложност', labelEn: 'High complexity' }
    },
    icon: (
      <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
        <ellipse cx="16" cy="8" rx="10" ry="4" fill="rgba(255,255,255,0.1)" stroke="currentColor" strokeWidth="2"/>
        <path d="M6 8 L6 24 Q6 28 16 28 Q26 28 26 24 L26 8" stroke="currentColor" strokeWidth="2" fill="none"/>
        <ellipse cx="16" cy="24" rx="10" ry="4" fill="rgba(255,255,255,0.05)" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    id: 'structural',
    titleBg: 'Конструктивно укрепване',
    titleEn: 'Structural Reinforcement',
    descBg: 'Възстановяване на носеща способност на бетонови конструкции. Залепване на пукнатини и греди.',
    descEn: 'Restoring load-bearing capacity of concrete structures. Structural bonding of cracks and beams.',
    materials: ['Silox EP 800', 'HydroBloc EP 811', 'GeoRock 181'],
    params: {
      pressure: { val: 75, labelBg: 'Високо налягане', labelEn: 'High pressure' },
      spacing: { val: 60, labelBg: '15-20 см', labelEn: '15-20 cm' },
      difficulty: { val: 80, labelBg: 'Висока сложност', labelEn: 'High complexity' }
    },
    icon: (
      <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="6" width="20" height="20" rx="2" fill="rgba(255,255,255,0.1)" stroke="currentColor" strokeWidth="2"/>
        <line x1="6" y1="13" x2="26" y2="13" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="6" y1="19" x2="26" y2="19" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="13" y1="6" x2="13" y2="26" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="19" y1="6" x2="19" y2="26" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    id: 'barrier',
    titleBg: 'Хоризонтална преграда (Влага)',
    titleEn: 'Horizontal Barrier (Rising Damp)',
    descBg: 'Спиране на капилярна влага в тухлена и каменна зидария. Инжекционна бариера без разрушаване на стените.',
    descEn: 'Stopping capillary moisture in brick and stone masonry. Injection barrier without wall demolition.',
    materials: ['Remafix 709', 'Remafix 715'],
    params: {
      pressure: { val: 15, labelBg: 'Нисък вискозитет (Гравитация)', labelEn: 'Low viscosity / Gravity' },
      spacing: { val: 85, labelBg: '10-12 см (Сгъстено)', labelEn: '10-12 cm (Dense)' },
      difficulty: { val: 45, labelBg: 'Средно ниска', labelEn: 'Low-Medium' }
    },
    icon: (
      <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="24" height="24" rx="2" fill="rgba(255,255,255,0.1)" stroke="currentColor" strokeWidth="2"/>
        <rect x="4" y="14" width="24" height="4" rx="1" fill="currentColor"/>
        <path d="M8 18 Q10 24 12 26 M16 18 Q18 24 20 26 M24 18 Q26 24 28 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <path d="M8 14 Q10 8 12 6 M16 14 Q18 8 20 6 M24 14 Q26 8 28 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeDasharray="2,2" fill="none"/>
      </svg>
    ),
  },
];

export default function Solutions() {
  const [selectedId, setSelectedId] = useState(problems[0].id);
  const [activeTab, setActiveTab] = useState('visual');

  const activeProblem = problems.find((p) => p.id === selectedId) || problems[0];

  const handleSelectProblem = (id) => {
    setSelectedId(id);
    // On tablet & mobile, scroll down to the dashboard details card
    if (window.innerWidth < 992) {
      setTimeout(() => {
        const detailsEl = document.getElementById('solution-details-card');
        if (detailsEl) {
          detailsEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 50);
    }
  };

  const handleMaterialClick = (mat) => {
    const filter = materialToFilter[mat] || 'all';
    const event = new CustomEvent('setProductFilter', { detail: { filter } });
    window.dispatchEvent(event);
  };

  const handleRequestAdvice = (problem) => {
    localStorage.setItem('prefilledTab', 'services');
    localStorage.setItem(
      'prefilledServiceType',
      problem.id === 'structural'
        ? 'Укрепване на фундамент / Foundation reinforcement'
        : problem.id === 'cracks' || problem.id === 'waterstop'
        ? 'Ремонт на пукнатини / Crack repair'
        : problem.id === 'joints' || problem.id === 'expansion'
        ? 'Уплътняване на фуги / Joint sealing'
        : 'Хидроизолация / Waterproofing'
    );
    localStorage.setItem(
      'prefilledDescription',
      `Здравейте, интересува ни инженерна консултация и оглед относно проблема: ${problem.titleBg} (${problem.titleEn}).`
    );

    // Dispatch event to Contact component
    window.dispatchEvent(new Event('prefillContactForm'));

    // Scroll to contact form
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section solutions-section" id="solutions">
      <div className="glow-orb glow-orb-1"></div>
      <div className="glow-orb glow-orb-2"></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ marginBottom: '40px' }}>
          <div className="eyebrow" data-reveal><T bg="Интерактивна Матрица" en="Interactive Matrix" /></div>
          <h2 className="h2" data-reveal>
            <T bg="Диагностика & " en="Diagnosis & " />
            <span className="accent"><T bg="Решения" en="Solutions" /></span>
          </h2>
          <p className="lead" style={{ maxWidth: '650px', marginTop: '16px' }} data-reveal>
            <T 
              bg="Използвайте нашия визуален 3D-инспектор или списъка, за да локализирате проблема и веднага да откриете препоръчаните немски материали и техните параметри."
              en="Use our visual building inspector or the list view to locate the problem, inspect engineering parameters, and find recommended German materials."
            />
          </p>
        </div>

        {/* Dashboard Nav Tabs */}
        <div className="solutions-tabs-header" data-reveal>
          <button 
            className={`sol-tab-btn ${activeTab === 'visual' ? 'active' : ''}`}
            onClick={() => setActiveTab('visual')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            <T bg="Визуален Инспектор" en="Visual Inspector" />
          </button>
          <button 
            className={`sol-tab-btn ${activeTab === 'list' ? 'active' : ''}`}
            onClick={() => setActiveTab('list')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="8" y1="6" x2="21" y2="6"/>
              <line x1="8" y1="12" x2="21" y2="12"/>
              <line x1="8" y1="18" x2="21" y2="18"/>
              <line x1="3" y1="6" x2="3.01" y2="6"/>
              <line x1="3" y1="12" x2="3.01" y2="12"/>
              <line x1="3" y1="18" x2="3.01" y2="18"/>
            </svg>
            <T bg="Списък с Проблеми" en="Problem List" />
          </button>
        </div>

        <div className="solutions-dashboard-layout">
          
          {/* Left panel - Visual inspector or List Selector */}
          <div className="solutions-left-pane">
            
            {activeTab === 'visual' ? (
              <div className="blueprint-inspection-card" data-reveal>
                <div className="blueprint-overlay-grid"></div>
                <div className="blueprint-title-tag">SYSTEM_CROSS_SECTION_SCANNER.sys</div>
                
                {/* SVG Interactive Blueprint */}
                <svg className="blueprint-svg" viewBox="0 0 420 340" width="100%" height="100%">
                  {/* Grid Dots */}
                  <pattern id="dotGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="rgba(30,64,175,0.06)" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#dotGrid)" />

                  {/* Ground Level */}
                  <line x1="10" y1="110" x2="410" y2="110" stroke="rgba(15,23,42,0.15)" strokeWidth="1.5" strokeDasharray="4,4" />
                  
                  {/* Soils hatching */}
                  <rect x="10" y="110" width="70" height="220" fill="rgba(15,23,42,0.02)" />
                  <rect x="340" y="110" width="70" height="220" fill="rgba(15,23,42,0.02)" />

                  {/* Concrete structure base */}
                  {/* Left wall, right wall, slab foundation floor */}
                  <rect x="80" y="100" width="260" height="190" fill="none" stroke="var(--primary)" strokeWidth="4" strokeLinejoin="round" />
                  <rect x="80" y="270" width="260" height="20" fill="rgba(30,64,175,0.05)" stroke="var(--primary)" strokeWidth="3" />

                  {/* Columns */}
                  <line x1="210" y1="100" x2="210" y2="270" stroke="var(--primary)" strokeWidth="3" />
                  <rect x="200" y="270" width="20" height="6" fill="var(--primary)" />

                  {/* Pipe penetration */}
                  <rect x="70" y="170" width="20" height="14" fill="rgba(15,23,42,0.1)" stroke="var(--dim)" strokeWidth="1.5" />
                  <line x1="60" y1="177" x2="95" y2="177" stroke="var(--dim)" strokeWidth="2" />

                  {/* Brick wall on Ground (right side) */}
                  <g stroke="rgba(15,23,42,0.3)" strokeWidth="1.5" fill="none">
                    <rect x="270" y="30" width="60" height="70" fill="rgba(15,23,42,0.03)" />
                    <line x1="270" y1="47" x2="330" y2="47" />
                    <line x1="270" y1="64" x2="330" y2="64" />
                    <line x1="270" y1="81" x2="330" y2="81" />
                    <line x1="290" y1="30" x2="290" y2="47" />
                    <line x1="310" y1="30" x2="310" y2="47" />
                    <line x1="280" y1="47" x2="280" y2="64" />
                    <line x1="300" y1="47" x2="300" y2="64" />
                    <line x1="320" y1="47" x2="320" y2="64" />
                  </g>

                  {/* Ground Label texts */}
                  <text x="25" y="130" fill="var(--dim)" fontSize="8" fontWeight="bold" opacity="0.6">SOIL / ПОЧВА</text>
                  <text x="355" y="130" fill="var(--dim)" fontSize="8" fontWeight="bold" opacity="0.6">SOIL</text>
                  <text x="145" y="150" fill="var(--primary)" fontSize="9" fontWeight="800" opacity="0.4" letterSpacing="1">BASEMENT / МАЗЕ</text>
                  <text x="280" y="20" fill="var(--muted)" fontSize="8" fontWeight="bold" opacity="0.6">MASONRY</text>

                  {/* INTERACTIVE HOTSPOTS */}
                  
                  {/* 1. Curtain behind wall (curtain) */}
                  <g className={`hotspot-group ${selectedId === 'curtain' ? 'active' : ''}`} onClick={() => setSelectedId('curtain')}>
                    <circle cx="60" cy="210" r="14" className="hotspot-trigger" />
                    <circle cx="60" cy="210" r="4" className="hotspot-dot" />
                    <circle cx="60" cy="210" r="8" className="hotspot-pulse" />
                  </g>

                  {/* 2. Construction joint floor-wall (joints) */}
                  <g className={`hotspot-group ${selectedId === 'joints' ? 'active' : ''}`} onClick={() => setSelectedId('joints')}>
                    <circle cx="80" cy="270" r="14" className="hotspot-trigger" />
                    <circle cx="80" cy="270" r="4" className="hotspot-dot" />
                    <circle cx="80" cy="270" r="8" className="hotspot-pulse" />
                  </g>

                  {/* 3. Waterstop active wet leaks (waterstop) */}
                  <g className={`hotspot-group ${selectedId === 'waterstop' ? 'active' : ''}`} onClick={() => setSelectedId('waterstop')}>
                    <circle cx="80" cy="135" r="14" className="hotspot-trigger" />
                    <circle cx="80" cy="135" r="4" className="hotspot-dot" />
                    <circle cx="80" cy="135" r="8" className="hotspot-pulse" />
                  </g>

                  {/* 4. Moving joint slab (expansion) */}
                  <g className={`hotspot-group ${selectedId === 'expansion' ? 'active' : ''}`} onClick={() => setSelectedId('expansion')}>
                    <circle cx="160" cy="280" r="14" className="hotspot-trigger" />
                    <circle cx="160" cy="280" r="4" className="hotspot-dot" />
                    <circle cx="160" cy="280" r="8" className="hotspot-pulse" />
                  </g>

                  {/* 5. Under-slab cavity (cavity) */}
                  <g className={`hotspot-group ${selectedId === 'cavity' ? 'active' : ''}`} onClick={() => setSelectedId('cavity')}>
                    <circle cx="210" cy="300" r="14" className="hotspot-trigger" />
                    <circle cx="210" cy="300" r="4" className="hotspot-dot" />
                    <circle cx="210" cy="300" r="8" className="hotspot-pulse" />
                  </g>

                  {/* 6. Structural columns beam (structural) */}
                  <g className={`hotspot-group ${selectedId === 'structural' ? 'active' : ''}`} onClick={() => setSelectedId('structural')}>
                    <circle cx="210" cy="100" r="14" className="hotspot-trigger" />
                    <circle cx="210" cy="100" r="4" className="hotspot-dot" />
                    <circle cx="210" cy="100" r="8" className="hotspot-pulse" />
                  </g>

                  {/* 7. Pipes penetration (pipes) */}
                  <g className={`hotspot-group ${selectedId === 'pipes' ? 'active' : ''}`} onClick={() => setSelectedId('pipes')}>
                    <circle cx="80" cy="177" r="14" className="hotspot-trigger" />
                    <circle cx="80" cy="177" r="4" className="hotspot-dot" />
                    <circle cx="80" cy="177" r="8" className="hotspot-pulse" />
                  </g>

                  {/* 8. Masonry wall rising damp (barrier) */}
                  <g className={`hotspot-group ${selectedId === 'barrier' ? 'active' : ''}`} onClick={() => setSelectedId('barrier')}>
                    <circle cx="300" cy="70" r="14" className="hotspot-trigger" />
                    <circle cx="300" cy="70" r="4" className="hotspot-dot" />
                    <circle cx="300" cy="70" r="8" className="hotspot-pulse" />
                  </g>

                </svg>

                <div className="blueprint-legend">
                  <div className="legend-item"><span className="legend-dot"></span><T bg="Кликнете върху пулсираща точка за диагноза" en="Click on any pulsing hotspot for diagnosis" /></div>
                </div>
              </div>
            ) : (
              <div className="problems-list" data-reveal>
                {problems.map((problem) => {
                  const isActive = problem.id === selectedId;
                  return (
                    <button
                      key={problem.id}
                      className={`problem-selector-item ${isActive ? 'active' : ''}`}
                      onClick={() => handleSelectProblem(problem.id)}
                      aria-selected={isActive}
                      role="tab"
                    >
                      <div className="selector-icon-wrap">{problem.icon}</div>
                      <div className="selector-text-wrap">
                        <h4><T bg={problem.titleBg} en={problem.titleEn} /></h4>
                        <p className="selector-subtitle">
                          <T bg={problem.descBg.substring(0, 50) + '...'} en={problem.descEn.substring(0, 50) + '...'} />
                        </p>
                      </div>
                      <div className="selector-chevron">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right panel - Solution dynamic details card */}
          <div className="solution-details-panel" data-reveal data-d="1" id="solution-details-card" key={activeProblem.id}>
            <div className="solution-details-header">
              <div className="details-icon-wrap">{activeProblem.icon}</div>
              <div>
                <span className="details-eyebrow">
                  <T bg="Техническо Решение" en="Technical Solution" />
                </span>
                <h3 className="h3">
                  <T bg={activeProblem.titleBg} en={activeProblem.titleEn} />
                </h3>
              </div>
            </div>

            <p className="details-desc">
              <T bg={activeProblem.descBg} en={activeProblem.descEn} />
            </p>

            {/* Infographic Gauges */}
            <div className="details-section-divider"></div>
            
            <div className="details-specs-block">
              <h5 className="details-subtitle">
                <T bg="Параметри на приложението" en="Application Parameters" />
              </h5>
              
              <div className="gauges-container">
                {/* Gauge 1: Pressure */}
                <div className="gauge-item">
                  <div className="gauge-info">
                    <span className="gauge-name"><T bg="Налягане на инжектиране" en="Injection Pressure" /></span>
                    <span className="gauge-value"><T bg={activeProblem.params.pressure.labelBg} en={activeProblem.params.pressure.labelEn} /></span>
                  </div>
                  <div className="gauge-bar-bg">
                    <div className="gauge-bar-fill" style={{ width: `${activeProblem.params.pressure.val}%` }}></div>
                  </div>
                </div>

                {/* Gauge 2: Packer Spacing */}
                <div className="gauge-item">
                  <div className="gauge-info">
                    <span className="gauge-name"><T bg="Интервал на пакерите" en="Packer Spacing" /></span>
                    <span className="gauge-value"><T bg={activeProblem.params.spacing.labelBg} en={activeProblem.params.spacing.labelEn} /></span>
                  </div>
                  <div className="gauge-bar-bg">
                    <div className="gauge-bar-fill accent-fill" style={{ width: `${activeProblem.params.spacing.val}%` }}></div>
                  </div>
                </div>

                {/* Gauge 3: Difficulty */}
                <div className="gauge-item">
                  <div className="gauge-info">
                    <span className="gauge-name"><T bg="Инженерна сложност" en="Engineering Difficulty" /></span>
                    <span className="gauge-value"><T bg={activeProblem.params.difficulty.labelBg} en={activeProblem.params.difficulty.labelEn} /></span>
                  </div>
                  <div className="gauge-bar-bg">
                    <div className="gauge-bar-fill warning-fill" style={{ width: `${activeProblem.params.difficulty.val}%` }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="details-section-divider"></div>

            {/* Materials tags */}
            <div className="details-materials-block">
              <h5 className="details-subtitle">
                <T bg="Препоръчани Продукти ARCAN" en="Recommended ARCAN Products" />
              </h5>
              <p className="materials-hint">
                <T 
                  bg="Кликнете върху материал, за да го филтрирате в продуктовия каталог." 
                  en="Click on a material to filter it in the product catalog."
                />
              </p>
              <div className="details-materials-list">
                {activeProblem.materials.map((mat, idx) => (
                  <button
                    key={idx}
                    className="details-material-tag"
                    onClick={() => handleMaterialClick(mat)}
                    title={`Виж в каталог: ${mat}`}
                  >
                    <span className="tag-dot"></span>
                    {mat}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="details-cta-block">
              <button 
                onClick={() => handleRequestAdvice(activeProblem)} 
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
                <T bg="Запитване за Инженерна Консултация" en="Request Engineering Advice" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

