import { T } from '../context/LangContext';

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-photo" id="heroBg" />
      <div className="hero-img-overlay" />
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
                bg={<>Инжекционни<span className="line2">Системи</span>за Бетон</>}
                en={<>Injection<span className="line2">Systems</span>for Concrete</>}
              />
            </h1>
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
            <div className="hero-terminal-container">
              {/* Terminal window header */}
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="terminal-title">ARCAN_SIMULATOR_V8.exe</div>
                <div className="terminal-status">LIVE</div>
              </div>
              
              {/* Terminal mockup body */}
              <div className="terminal-body">
                <img 
                  src="/concrete_reinforcement.png" 
                  alt="ARCAN Polymer Concrete Reinforcement Simulation" 
                  className="hero-render-img"
                />
                <div className="scanner-line"></div>
                <div className="scan-overlay-grid"></div>
                
                {/* Visual telemetry statuses */}
                <div className="tech-badge top-left">SYS_STATUS: ACTIVE</div>
                <div className="tech-badge top-right">FLOW_RATE: 4.2 L/MIN</div>
                <div className="tech-badge bottom-left">PRESSURE: 220 BAR</div>
                <div className="tech-badge bottom-right">REINFORCEMENT: 100%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
