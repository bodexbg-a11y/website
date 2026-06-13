import { T } from '../context/LangContext';
import { useEffect } from 'react';

export default function Services() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "provider": { "@type": "Organization", "name": "BODEX Bulgaria" },
      "serviceType": ["Injection Materials Supply", "Structural Reinforcement"],
      "areaServed": "BG"
    });
    document.head.appendChild(script);
    return () => script.remove();
  }, []);

  const supplyItems = [
    { bg: 'Полиуретанови смоли', en: 'PU Resins' },
    { bg: 'Епоксидни смоли', en: 'Epoxy Resins' },
    { bg: 'Инжекционни пени', en: 'Injection Foams' },
    { bg: 'Акрилатни гелове', en: 'Acrylate Gels' },
    { bg: 'Набъбващи ленти', en: 'Swelling Tapes' },
    { bg: 'Минерални разтвори', en: 'Mineral Mortars' },
    { bg: 'Покрития', en: 'Coatings' },
    { bg: 'Инжекционни помпи', en: 'Injection Pumps' },
    { bg: 'Пакери', en: 'Packers' },
  ];

  const workItems = [
    { bg: 'Укрепване на фундаменти', en: 'Foundation reinforcement' },
    { bg: 'Ремонт на пукнатини', en: 'Crack repair' },
    { bg: 'Хидроизолация', en: 'Waterproofing' },
    { bg: 'Уплътняване на фуги', en: 'Joint sealing' },
    { bg: 'Спиране на течове', en: 'Leak stopping' },
    { bg: 'Стабилизация на почви', en: 'Soil stabilisation' },
    { bg: 'Инжекционни завеси', en: 'Injection curtains' },
    { bg: 'Хоризонтални бариери', en: 'Horizontal barriers' },
  ];

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="eyebrow"><T bg="Нашите услуги" en="Our services" /></div>
        <h2 className="h2" style={{ marginTop: 8, marginBottom: 32 }}>
          <T bg={<>Какво <span className="accent">Правим</span></>}
             en={<>What We <span className="accent">Do</span></>} />
        </h2>

        <div className="srv-grid">

          {/* ── CARD 1: Delivery ── */}
          <div className="srv-card">
            {/* Top band */}
            <div className="srv-band srv-band--light">
              <div className="srv-band__left">
                <div className="srv-band__icon srv-band__icon--blue">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="15" height="13"/>
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                    <circle cx="5.5" cy="18.5" r="2.5"/>
                    <circle cx="18.5" cy="18.5" r="2.5"/>
                  </svg>
                </div>
                <div>
                  <div className="srv-band__label"><T bg="Услуга 01" en="Service 01" /></div>
                  <h3 className="srv-band__title"><T bg="Доставка на материали" en="Materials Supply" /></h3>
                </div>
              </div>
              <div className="srv-band__badge">B2B · Едро</div>
            </div>

            {/* Body */}
            <div className="srv-body">
              <p className="srv-desc">
                <T
                  bg="Директна доставка на едро на полимерни смоли, пени, гелове и минерални инжекции от ARCAN Waterproofing (Германия). Гарантиран произход с пълна техническа документация."
                  en="Direct wholesale supply of polymer resins, foams, gels and mineral injections from ARCAN Waterproofing (Germany). Guaranteed origin with full technical documentation."
                />
              </p>

              {/* Tag pills */}
              <div className="srv-tags">
                {supplyItems.map((item, i) => (
                  <span key={i} className="srv-tag">
                    <T bg={item.bg} en={item.en} />
                  </span>
                ))}
              </div>

              {/* Stats row */}
              <div className="srv-mini-stats">
                <div className="srv-mini-stat">
                  <span className="srv-mini-stat__num">50+</span>
                  <span className="srv-mini-stat__lbl"><T bg="Продукта" en="Products" /></span>
                </div>
                <div className="srv-mini-stat">
                  <span className="srv-mini-stat__num">DE</span>
                  <span className="srv-mini-stat__lbl"><T bg="Произход" en="Origin" /></span>
                </div>
                <div className="srv-mini-stat">
                  <span className="srv-mini-stat__num">CE</span>
                  <span className="srv-mini-stat__lbl"><T bg="Сертификат" en="Certified" /></span>
                </div>
              </div>

              <a href="#contact" className="btn btn-primary srv-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                </svg>
                <T bg="Запитване за Материал" en="Material Enquiry" />
              </a>
            </div>
          </div>

          {/* ── CARD 2: Works ── */}
          <div className="srv-card">
            {/* Top band — dark blue */}
            <div className="srv-band srv-band--dark">
              <div className="srv-band__left">
                <div className="srv-band__icon srv-band__icon--white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2"/>
                    <path d="M8 21h8M12 17v4"/>
                    <path d="M7 8l2 2 4-4"/>
                  </svg>
                </div>
                <div>
                  <div className="srv-band__label srv-band__label--inv"><T bg="Услуга 02" en="Service 02" /></div>
                  <h3 className="srv-band__title srv-band__title--inv"><T bg="Инжекционни работи" en="Injection Works" /></h3>
                </div>
              </div>
              <div className="srv-band__badge srv-band__badge--inv">На обекта</div>
            </div>

            {/* Body */}
            <div className="srv-body">
              <p className="srv-desc">
                <T
                  bg="Изпълнение на инжекционни работи от квалифицирани специалисти — укрепване на фундаменти, ремонт на пукнатини, хидроизолация. Всякакви обекти в България."
                  en="Execution of injection works by qualified specialists — foundation reinforcement, crack repair, waterproofing. Any type of project in Bulgaria."
                />
              </p>

              {/* Tag pills */}
              <div className="srv-tags">
                {workItems.map((item, i) => (
                  <span key={i} className="srv-tag srv-tag--blue">
                    <T bg={item.bg} en={item.en} />
                  </span>
                ))}
              </div>

              {/* Stats row */}
              <div className="srv-mini-stats">
                <div className="srv-mini-stat">
                  <span className="srv-mini-stat__num">BG</span>
                  <span className="srv-mini-stat__lbl"><T bg="Цяла страна" en="Nationwide" /></span>
                </div>
                <div className="srv-mini-stat">
                  <span className="srv-mini-stat__num">B2B</span>
                  <span className="srv-mini-stat__lbl"><T bg="Само фирми" en="Firms only" /></span>
                </div>
                <div className="srv-mini-stat">
                  <span className="srv-mini-stat__num">24h</span>
                  <span className="srv-mini-stat__lbl"><T bg="Отговор" en="Response" /></span>
                </div>
              </div>

              <a href="#contact" className="btn btn-primary srv-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                </svg>
                <T bg="Запитване за Услуга" en="Service Enquiry" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
