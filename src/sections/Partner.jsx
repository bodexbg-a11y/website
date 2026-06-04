import { T } from '../context/LangContext';

export default function Partner() {
  const arcanUrl = 'https://www.arcan-waterproofing.com/';

  return (
    <section id="partner" className="section-sm">
      <div className="container">
        <div className="partner-inner">
          <div style={{ flex: 1 }} data-reveal>
            <div className="eyebrow"><T bg="Партньори" en="Partners" /></div>
            <h2 className="h2" style={{ marginBottom: 12 }}>
              <T bg={<>Официален <span className="accent">Партньор</span></>} en={<>Official <span className="accent">Partner</span></>} />
            </h2>
            <p className="lead">
              <T
                bg="Доставяме продукти от водещи европейски производители с пълна техническа документация."
                en="We supply products from leading European manufacturers with full technical documentation."
              />
            </p>
          </div>
          <div className="partner-logos" data-reveal data-d="1">
            <a
              className="partner-logo-box"
              href={arcanUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="ARCAN Waterproofing"
            >
              <img src="/arcan-logo-w-sub.png" alt="ARCAN Construction Products" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
