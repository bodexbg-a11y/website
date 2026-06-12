import { useState, useEffect, useRef } from 'react';
import { T } from '../context/LangContext';

export default function Hero() {
  const [isDark, setIsDark] = useState(true);
  const isTransitioning = useRef(false);
  const backBgRef = useRef(null);
  const frontBgRef = useRef(null);

  useEffect(() => {
    // Synchronize global document body class
    document.body.classList.toggle('light-theme', !isDark);
  }, [isDark]);

  useEffect(() => {
    // Set initial background image URLs
    const initialImg = isDark ? 'url(/hero-dark.png)' : 'url(/hero-light.png)';
    if (backBgRef.current) backBgRef.current.style.backgroundImage = initialImg;
    if (frontBgRef.current) frontBgRef.current.style.backgroundImage = initialImg;
  }, []);

  const handleThemeChange = (newTheme) => {
    if (newTheme === isDark || isTransitioning.current) return;
    isTransitioning.current = true;

    const bgImg = newTheme ? 'url(/hero-dark.png)' : 'url(/hero-light.png)';
    const back = backBgRef.current;
    const front = frontBgRef.current;

    // Load new image behind
    if (back) back.style.backgroundImage = bgImg;
    // Trigger physical pull-down effect on the front image
    if (front) front.classList.add('pull-down');

    window.setTimeout(() => {
      setIsDark(newTheme);
      // Synchronize front image after pull-down covers
      if (front) front.style.backgroundImage = bgImg;
    }, 300);

    window.setTimeout(() => {
      // Remove pull-down state to restore front layer
      if (front) front.classList.remove('pull-down');
      isTransitioning.current = false;
    }, 330);
  };

  return (
    <section id="hero">
      {/* Top & Bottom Blur Overlays (Reposit-style) */}
      <div className="blur-overlay blur-overlay-top" aria-hidden="true" />
      <div className="blur-overlay blur-overlay-bottom" aria-hidden="true" />

      {/* Layered Background Images */}
      <div className="hero-bg-wrapper">
        <div ref={backBgRef} className="hero-bg bg-back" aria-hidden="true" />
        <div ref={frontBgRef} className="hero-bg bg-front" aria-hidden="true" />
      </div>

      <div className="hero-pattern" />

      <div className="container">
        <div className="hero-grid-layout">
          <div className="hero-content">
            <div className="hero-badge anim-up">
              <span className="hero-badge-dot" />
              <T bg="B2B · Продажби само на едро · Официален партньор ARCAN" en="B2B Wholesale Only · Authorized ARCAN Partner" />
            </div>
            
            <h1 className="hero-title anim-up-1">
              <T
                bg={<>Инжекционни <span className="line2">Системи за Бетон</span></>}
                en={<>Injection <span className="line2">Systems for Concrete</span></>}
              />
            </h1>

            {/* Reposit-style Theme Toggle Pill */}
            <div className="theme-toggle-wrap anim-up-2">
              <div className="theme-toggle">
                <div 
                  className="toggle-indicator" 
                  style={{ transform: isDark ? 'translateX(calc(100% + 4px))' : 'translateX(0)' }} 
                />
                <button
                  type="button"
                  className={`toggle-btn ${!isDark ? 'active' : ''}`}
                  onClick={() => handleThemeChange(false)}
                >
                  <span className="label"><T bg="Ден" en="Day" /></span>
                  <span className="subtext"><T bg="Светла тема" en="Light Theme" /></span>
                </button>
                <button
                  type="button"
                  className={`toggle-btn ${isDark ? 'active' : ''}`}
                  onClick={() => handleThemeChange(true)}
                >
                  <span className="label"><T bg="Нощ" en="Night" /></span>
                  <span className="subtext"><T bg="Тъмна тема" en="Dark Theme" /></span>
                </button>
              </div>
            </div>

            <p className="hero-desc anim-up-2">
              <T
                bg="Доставка на полимерни смоли и инжекционни материали. Укрепване на фундаменти и ремонт на пукнатини — от инфраструктурни до търговски обекти."
                en="Supply of polymer resins and injection materials. Foundation reinforcement and crack repair — from infrastructure to commercial objects."
              />
            </p>
            <div className="hero-ctas anim-up-3">
              <a href="#contact" className="btn btn-primary btn-lg">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.21 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.57-1.57a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                <T bg="Изпратете Запитване" en="Send Enquiry" />
              </a>
              <a href="#products" className="btn btn-outline btn-lg">
                <T bg="Каталог Продукти" en="Product Catalogue" />
              </a>
            </div>
            <div className="hero-stats anim-up-4">
              {[
                { num: '15+', bg: 'Години опит', en: 'Years experience' },
                { num: '5', bg: 'Сектори', en: 'Sectors' },
                { num: '50+', bg: 'Вида продукти', en: 'Product types' },
                { num: 'B2B', bg: 'Само на едро', en: 'Wholesale only' },
              ].map((s) => (
                <div className="hero-stat" key={s.num}>
                  <div className="hero-stat-num">{s.num}</div>
                  <div className="hero-stat-label"><T bg={s.bg} en={s.en} /></div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="hero-visual-wrap anim-up" data-reveal data-d="2">
            <svg className="hero-float-svg" width="560" height="680" viewBox="0 0 560 680" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="wallGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#1e3090"/>
                  <stop offset="100%" stopColor="#0a1560"/>
                </linearGradient>
                <linearGradient id="crackGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#93a8f5"/>
                  <stop offset="100%" stopColor="#3547b8"/>
                </linearGradient>
                <filter id="wallShadow"><feDropShadow dx="0" dy="20" stdDeviation="30" floodColor="rgba(0,0,20,0.7)"/></filter>
                <filter id="glowBlue"><feGaussianBlur stdDeviation="6" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                <clipPath id="wallClip"><rect x="40" y="30" width="480" height="620" rx="16"/></clipPath>
              </defs>
              <rect x="40" y="30" width="480" height="620" rx="16" fill="url(#wallGrad)" filter="url(#wallShadow)"/>
              <g clipPath="url(#wallClip)" opacity="0.25">
                <line x1="40" y1="140" x2="520" y2="140" stroke="#fff" strokeWidth="1.5"/>
                <line x1="40" y1="260" x2="520" y2="260" stroke="#fff" strokeWidth="1.5"/>
                <line x1="40" y1="380" x2="520" y2="380" stroke="#fff" strokeWidth="1.5"/>
                <line x1="40" y1="500" x2="520" y2="500" stroke="#fff" strokeWidth="1.5"/>
                <line x1="160" y1="30" x2="160" y2="650" stroke="#fff" strokeWidth="1.5"/>
                <line x1="300" y1="30" x2="300" y2="650" stroke="#fff" strokeWidth="1.5"/>
                <line x1="430" y1="30" x2="430" y2="650" stroke="#fff" strokeWidth="1.5"/>
                <line x1="230" y1="140" x2="230" y2="260" stroke="#fff" strokeWidth="1.5"/>
                <line x1="365" y1="260" x2="365" y2="380" stroke="#fff" strokeWidth="1.5"/>
                <line x1="95" y1="380" x2="95" y2="500" stroke="#fff" strokeWidth="1.5"/>
              </g>
              <g clipPath="url(#wallClip)" opacity="0.06">
                <line x1="40" y1="80" x2="520" y2="82" stroke="#aab" strokeWidth="1"/>
                <line x1="40" y1="180" x2="520" y2="177" stroke="#aab" strokeWidth="0.8"/>
                <line x1="40" y1="310" x2="520" y2="314" stroke="#aab" strokeWidth="1"/>
                <line x1="40" y1="440" x2="520" y2="436" stroke="#aab" strokeWidth="0.8"/>
                <line x1="40" y1="560" x2="520" y2="563" stroke="#aab" strokeWidth="1"/>
              </g>
              <g filter="url(#glowBlue)">
                <polyline points="240,30 250,120 220,200 270,290 235,380 255,460 230,560 248,650" fill="none" stroke="url(#crackGrad)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9"/>
                <polyline points="250,120 290,155 320,148" fill="none" stroke="#5b6fd6" strokeWidth="2.5" strokeLinecap="round" opacity="0.7"/>
                <polyline points="220,200 185,230 165,220" fill="none" stroke="#5b6fd6" strokeWidth="2.5" strokeLinecap="round" opacity="0.6"/>
                <polyline points="270,290 310,320 345,315" fill="none" stroke="#5b6fd6" strokeWidth="2.5" strokeLinecap="round" opacity="0.7"/>
                <polyline points="235,380 195,405 175,400" fill="none" stroke="#5b6fd6" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
                <polyline points="255,460 295,490 325,480" fill="none" stroke="#5b6fd6" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
                <polyline points="240,30 250,120 220,200 270,290 235,380 255,460 230,560 248,650" fill="none" stroke="#93a8f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
              </g>
              <g>
                <circle cx="250" cy="120" r="10" fill="#3547b8" stroke="#93a8f5" strokeWidth="2.5"/>
                <rect x="245" y="105" width="10" height="22" rx="3" fill="#5b6fd6" opacity="0.9"/>
                <circle cx="270" cy="290" r="10" fill="#3547b8" stroke="#93a8f5" strokeWidth="2.5"/>
                <rect x="265" y="275" width="10" height="22" rx="3" fill="#5b6fd6" opacity="0.9"/>
                <circle cx="255" cy="460" r="10" fill="#3547b8" stroke="#93a8f5" strokeWidth="2.5"/>
                <rect x="250" y="445" width="10" height="22" rx="3" fill="#5b6fd6" opacity="0.9"/>
              </g>
              <g opacity="0.8">
                <circle cx="252" cy="150" r="4" fill="#93a8f5"><animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" begin="0s"/></circle>
                <circle cx="260" cy="220" r="3" fill="#93a8f5"><animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" begin="0.5s"/></circle>
                <circle cx="255" cy="340" r="4" fill="#93a8f5"><animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" begin="1s"/></circle>
                <circle cx="248" cy="420" r="3" fill="#93a8f5"><animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" begin="1.5s"/></circle>
                <circle cx="240" cy="510" r="4" fill="#93a8f5"><animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" begin="2s"/></circle>
              </g>
              <rect x="310" y="290" width="170" height="36" rx="8" fill="rgba(53,71,184,0.85)" stroke="#93a8f5" strokeWidth="1"/>
              <text x="395" y="313" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="11" fontWeight="700" fill="#fff" letterSpacing="1">INJECTION POINT</text>
              <line x1="280" y1="308" x2="310" y2="308" stroke="#93a8f5" strokeWidth="1.5" strokeDasharray="3,3"/>
              <rect x="42" y="32" width="476" height="616" rx="15" fill="none" stroke="rgba(147,168,245,0.15)" strokeWidth="1.5"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
