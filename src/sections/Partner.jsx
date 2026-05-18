import { T } from '../context/LangContext';

export default function Partner() {
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
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }} data-reveal data-d="1">
            <div className="partner-logo-box">
              ARCAN<span>Waterproofing · Germany</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
