import { useEffect } from 'react';
import { updatePageMeta } from '../utils/seo';
import { T } from '../context/LangContext';
import Hero from '../sections/Hero';
import Why from '../sections/Why';
import Services from '../sections/Services';
import Products from '../sections/Products';
import Solutions from '../sections/Solutions';
import Sectors from '../sections/Sectors';
import Process from '../sections/Process';
import Contact from '../sections/Contact';

/* ── Inline accent blocks — не требуют отдельных файлов ── */

function StatsStrip() {
  return (
    <div className="stats-strip">
      <div className="stats-strip__inner">
        {[
          { num: '15+', bg: 'Години опит', en: 'Years experience' },
          { num: '50+', bg: 'Вида продукти', en: 'Product types' },
          { num: '5',   bg: 'Сектора', en: 'Sectors' },
          { num: '200 bar', bg: 'Макс. налягане', en: 'Max pressure' },
          { num: '~10s',  bg: 'Реакция на смола', en: 'Resin reaction' },
          { num: 'B2B',  bg: 'Само на едро', en: 'Wholesale only' },
        ].map(s => (
          <div className="stats-strip__item" key={s.num}>
            <span className="stats-strip__num">{s.num}</span>
            <span className="stats-strip__lbl"><T bg={s.bg} en={s.en} /></span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CtaBand() {
  return (
    <div className="cta-band-full">
      <div className="cta-band-full__bg" aria-hidden="true" />
      <div className="container cta-band-full__inner">
        <div className="cta-band-full__text">
          <span className="cta-band-full__eyebrow">
            <T bg="Официален партньор ARCAN · Германия" en="Official ARCAN Partner · Germany" />
          </span>
          <h2 className="cta-band-full__h">
            <T bg="Готови да започнем?" en="Ready to start?" /><br />
            <span className="cta-band-full__h--accent">
              <T bg="Свържете се с нас." en="Get in touch." />
            </span>
          </h2>
          <p className="cta-band-full__sub">
            <T
              bg="Работим само с B2B клиенти — строителни фирми, проектанти, дистрибутори."
              en="We work exclusively with B2B clients — construction firms, designers, distributors."
            />
          </p>
        </div>
        <div className="cta-band-full__actions">
          <a href="#contact" className="btn cta-band-full__btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.21 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.57-1.57a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            <T bg="Изпратете Запитване" en="Send Enquiry" />
          </a>
          <a href="#products" className="btn cta-band-full__btn-ghost">
            <T bg="Каталог Продукти" en="Product Catalogue" />
          </a>
        </div>
      </div>
    </div>
  );
}

function TrustBand() {
  const items = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <polyline points="9 12 11 14 15 10"/>
        </svg>
      ),
      bg: 'CE & ETA сертифицирано', en: 'CE & ETA Certified',
      subBg: 'Всички продукти с европейски сертификати',
      subEn: 'All products with European certification',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
        </svg>
      ),
      bg: 'Директна доставка', en: 'Direct Delivery',
      subBg: 'От производителя ARCAN до вашия обект',
      subEn: 'From ARCAN manufacturer to your site',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      bg: 'Отговор до 24 часа', en: 'Reply within 24h',
      subBg: 'Бърза техническа консултация',
      subEn: 'Fast technical consultation',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
        </svg>
      ),
      bg: 'Само B2B', en: 'B2B Only',
      subBg: 'Работим с регистрирани фирми',
      subEn: 'We work with registered companies',
    },
  ];

  return (
    <div className="trust-band">
      <div className="container">
        <div className="trust-band__grid">
          {items.map((item, i) => (
            <div className="trust-band__item" key={i} data-reveal data-d={String(i)}>
              <div className="trust-band__icon" aria-hidden="true">{item.icon}</div>
              <div>
                <div className="trust-band__title"><T bg={item.bg} en={item.en} /></div>
                <div className="trust-band__sub"><T bg={item.subBg} en={item.subEn} /></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  useEffect(() => {
    updatePageMeta(
      'BODEX Bulgaria – Инжекционни системи за бетон | ARCAN',
      'Официален партньор ARCAN. Укрепване на фундаменти, ремонт на пукнатини. B2B продажби на едро.',
      'https://bodexbulgaria.com/og-image.jpg',
      'https://bodexbulgaria.com'
    );
  }, []);


  return (
    <>
      <Hero />
      <StatsStrip />
      <Why />
      <Services />
      <CtaBand />
      <Products />
      <Solutions />
      <Sectors />
      <Process />
      <TrustBand />
      <Contact />
    </>
  );
}
