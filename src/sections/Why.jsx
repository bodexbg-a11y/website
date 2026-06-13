import { T } from '../context/LangContext';

export default function Why() {
  return (
    <section id="why" className="section why-section">
      <div className="container">

        {/* Header */}
        <div className="why-hdr">
          <div>
            <div className="eyebrow"><T bg="B2B Партньорство" en="B2B Partnership" /></div>
            <h2 className="h2" style={{ marginTop: 8 }}>
              <T
                bg={<>Технологично превъзходство<br/>и <span className="accent">Сигурност</span></>}
                en={<>Technological excellence<br/>and <span className="accent">Security</span></>}
              />
            </h2>
          </div>
          <p className="lead why-sub">
            <T
              bg="Официален дистрибутор на ARCAN Waterproofing (Германия) — висококачествени материали с инженерна поддръжка за B2B сектора."
              en="Official distributor of ARCAN Waterproofing (Germany) — high-performance materials with engineering support for the B2B sector."
            />
          </p>
        </div>

        {/* Stats row */}
        <div className="why-stats">
          <div className="why-stat why-stat--blue">
            <div className="why-stat__num">15<span>+</span></div>
            <div className="why-stat__lbl"><T bg="Години на пазара" en="Years on market" /></div>
          </div>
          <div className="why-stat why-stat--navy">
            <div className="why-stat__num">50<span>+</span></div>
            <div className="why-stat__lbl"><T bg="Продуктови линии" en="Product lines" /></div>
          </div>
          <div className="why-stat why-stat--teal">
            <div className="why-stat__num">200<span> bar</span></div>
            <div className="why-stat__lbl"><T bg="Макс. налягане" en="Max pressure" /></div>
          </div>
          <div className="why-stat why-stat--green">
            <div className="why-stat__num">~10<span>s</span></div>
            <div className="why-stat__lbl"><T bg="Реакция на смола" en="Resin reaction" /></div>
          </div>
          <div className="why-stat why-stat--purple">
            <div className="why-stat__num">B2B</div>
            <div className="why-stat__lbl"><T bg="Само на едро" en="Wholesale only" /></div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="why-cards">

          {/* Big — B2B focus */}
          <div className="why-card why-card--main">
            <div className="why-card__icon why-card__icon--blue">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 00-3-3.87"/>
                <path d="M16 3.13a4 4 0 010 7.75"/>
              </svg>
            </div>
            <div className="why-card__tag"><T bg="Само B2B" en="B2B Only" /></div>
            <h3 className="why-card__title"><T bg="Вашият Надежден B2B Партньор" en="Your Reliable B2B Partner" /></h3>
            <p className="why-card__desc">
              <T
                bg="Обслужваме строителни компании, проектантски бюра и дистрибутори. Без прекупвачи — директни доставки на едро с пълна инженерна поддръжка."
                en="We serve construction firms, design offices and distributors. No middlemen — direct wholesale with full engineering support."
              />
            </p>
            <div className="why-card__bg-pattern" aria-hidden="true" />
          </div>

          {/* ARCAN Germany */}
          <div className="why-card why-card--dark">
            <div className="why-card__de">DE</div>
            <div className="why-card__icon why-card__icon--white">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <polyline points="9 12 11 14 15 10"/>
              </svg>
            </div>
            <h3 className="why-card__title why-card__title--inv"><T bg="Немско Качество" en="German Quality" /></h3>
            <p className="why-card__desc why-card__desc--inv"><T bg="Официален партньор на ARCAN Waterproofing" en="Official ARCAN Waterproofing partner" /></p>
            <div className="why-card__certs">
              <span>CE</span><span>KTW</span><span>ISO</span><span>ETA</span>
            </div>
          </div>

          {/* Direct delivery */}
          <div className="why-card why-card--accent">
            <div className="why-card__icon why-card__icon--white">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13"/>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                <circle cx="5.5" cy="18.5" r="2.5"/>
                <circle cx="18.5" cy="18.5" r="2.5"/>
              </svg>
            </div>
            <h3 className="why-card__title why-card__title--inv"><T bg="Директна Доставка" en="Direct Delivery" /></h3>
            <p className="why-card__desc why-card__desc--inv">
              <T bg="От производствените линии ARCAN в Германия директно до вашия обект. Гарантиран произход." en="From ARCAN production lines in Germany directly to your site. Guaranteed origin." />
            </p>
          </div>

          {/* DIN-EN certified */}
          <div className="why-card why-card--light">
            <div className="why-card__bignum">CE</div>
            <h3 className="why-card__title"><T bg="100% Сертифицирани" en="100% Certified" /></h3>
            <p className="why-card__desc"><T bg="DIN-EN 1504-5 съвместимост, KTW за питейна вода" en="DIN-EN 1504-5 compliance, KTW for drinking water" /></p>
          </div>

          {/* 24h response */}
          <div className="why-card why-card--light">
            <div className="why-card__icon why-card__icon--blue">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <h3 className="why-card__title"><T bg="Отговор до 24 часа" en="Response within 24h" /></h3>
            <p className="why-card__desc"><T bg="Бърза техническа консултация и оферта за всеки проект" en="Fast technical consultation and quote for every project" /></p>
          </div>

        </div>
      </div>
    </section>
  );
}
