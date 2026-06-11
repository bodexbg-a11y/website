import { T } from '../context/LangContext';

export default function Why() {
  return (
    <section id="why" className="section why-section">
      <div className="glow-orb glow-orb-1"></div>
      <div className="glow-orb glow-orb-2"></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="why-header">
          <div>
            <div className="eyebrow" data-reveal><T bg="B2B Партньорство" en="B2B Partnership" /></div>
            <h2 className="h2" data-reveal>
              <T
                bg={<>Технологично превъзходство и <span className="accent">Сигурност</span></>}
                en={<>Technological excellence and <span className="accent">Security</span></>}
              />
            </h2>
          </div>
          <div data-reveal data-d="1">
            <p className="lead">
              <T
                bg="Като официален дистрибутор на ARCAN Waterproofing (Германия), ние съчетаваме висококачествени материали с професионално инженерно ноу-хау за B2B сектора."
                en="As an official partner of ARCAN Waterproofing (Germany), we combine high-performance materials with professional engineering know-how for the B2B sector."
              />
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {/* Tile 1: Large B2B Focus value card */}
          <div className="bento-card bento-card-large" data-reveal>
            <div className="bento-card-glow"></div>
            <span className="bento-card-tag"><T bg="Фокус" en="Focus" /></span>
            <div className="bento-card-content">
              <h3>
                <T bg="Вашият Надежден B2B Партньор" en="Your Reliable B2B Partner" />
              </h3>
              <p>
                <T
                  bg="Обслужваме изключително строителни компании, проектантски бюра и търговски дистрибутори. Без прекупвачи. С директни доставки на едро и пълна инженерно-техническа поддръжка на обекта."
                  en="We serve exclusively construction firms, design offices and commercial distributors. No intermediaries. Direct wholesale supply and full engineering field support."
                />
              </p>
            </div>
            {/* Tech grid blueprint element on background */}
            <div className="bento-blueprint-grid"></div>
          </div>

          {/* Tile 2: 15+ Years Experience (Radial Gauge) */}
          <div className="bento-card bento-card-small text-center" data-reveal data-d="1">
            <div className="bento-card-glow"></div>
            <div className="bento-gauge-wrap">
              <svg width="100" height="100" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(15,23,42,0.05)" strokeWidth="8" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="url(#cyanBlueGrad)" strokeWidth="8" strokeDasharray="251.2" strokeDashoffset="50" strokeLinecap="round" />
                <defs>
                  <linearGradient id="cyanBlueGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="var(--accent-cyan)" />
                    <stop offset="100%" stopColor="var(--primary)" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="gauge-text">15+</div>
            </div>
            <div className="bento-card-content mt-12">
              <h4>
                <T bg="Години Опит" en="Years Experience" />
              </h4>
              <p>
                <T bg="На българския пазар" en="On the Bulgarian market" />
              </p>
            </div>
          </div>

          {/* Tile 3: ARCAN Germany Certified */}
          <div className="bento-card bento-card-small text-center" data-reveal data-d="2">
            <div className="bento-card-glow"></div>
            <div className="bento-shield-wrap">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="rgba(30,64,175,0.05)"/>
                <polyline points="9 11 11 13 15 9" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="certified-text">DE</span>
            </div>
            <div className="bento-card-content mt-16">
              <h4>
                <T bg="Немско Качество" en="German Quality" />
              </h4>
              <p>
                <T bg="Официален партньор на ARCAN" en="Official ARCAN partner" />
              </p>
            </div>
          </div>

          {/* Tile 4: 50+ Product Lines */}
          <div className="bento-card bento-card-small" data-reveal data-d="3">
            <div className="bento-card-glow"></div>
            <div className="bento-card-content">
              <span className="bento-card-number">50+</span>
              <h4>
                <T bg="Продуктови линии" en="Product Lines" />
              </h4>
              <p>
                <T bg="Смоли, пени, гелове, помпи и пакери" en="Resins, foams, gels, pumps & packers" />
              </p>
              {/* Micro-meter bars */}
              <div className="bento-progress-bars">
                <div className="mini-bar"><div className="fill" style={{ width: '85%' }}></div></div>
                <div className="mini-bar"><div className="fill" style={{ width: '70%' }}></div></div>
                <div className="mini-bar"><div className="fill" style={{ width: '95%' }}></div></div>
              </div>
            </div>
          </div>

          {/* Tile 5: 100% Certified */}
          <div className="bento-card bento-card-small" data-reveal data-d="4">
            <div className="bento-card-glow"></div>
            <div className="bento-card-content">
              <span className="bento-card-number">CE</span>
              <h4>
                <T bg="100% Сертифицирани" en="100% Certified" />
              </h4>
              <p>
                <T bg="DIN-EN 1504-5 съвместимост и KTW сертификати" en="DIN-EN 1504-5 compliance & KTW certificates" />
              </p>
              <div className="bento-cert-stamps">
                <span className="cert-stamp">CE</span>
                <span className="cert-stamp">KTW</span>
                <span className="cert-stamp">ISO</span>
              </div>
            </div>
          </div>

          {/* Tile 6: Direct Deliveries */}
          <div className="bento-card bento-card-medium" data-reveal data-d="5">
            <div className="bento-card-glow"></div>
            <div className="bento-card-content">
              <div className="flex-row-align">
                <div className="bento-truck-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="15" height="13" />
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                </div>
                <h3>
                  <T bg="Директен Внос без Посредници" en="Direct Import No Middlemen" />
                </h3>
              </div>
              <p style={{ marginTop: '12px' }}>
                <T
                  bg="Доставяме материали директно от производствените линии на ARCAN в Германия. Гарантиран произход, пълна техническа проследимост, цени на едро и оперативна доставка за строителни проекти в България."
                  en="We ship materials directly from ARCAN production lines in Germany. Guaranteed origin, full technical traceability, wholesale pricing and rapid shipping for Bulgarian construction sites."
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
