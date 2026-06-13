import { T } from '../context/LangContext';
import logoWhite from '../assets/logo-white.svg';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ft">
      <div className="container">

        {/* Main grid */}
        <div className="ft-grid">

          {/* Brand */}
          <div className="ft-brand">
            <img src={logoWhite} alt="BODEX Bulgaria" className="ft-logo" />
            <p className="ft-desc">
              <T
                bg="B2B доставчик на инжекционни системи и изпълнител на укрепвания на конструкции."
                en="B2B supplier of injection systems and structural reinforcement contractor."
              />
            </p>
            <a
              href="https://www.arcan-waterproofing.com/"
              target="_blank" rel="noreferrer"
              className="ft-arcan"
              aria-label="ARCAN Waterproofing — official partner"
            >
              <span className="ft-arcan__label"><T bg="Официален партньор" en="Official partner" /></span>
              <span className="ft-arcan__name">ARCAN Waterproofing</span>
            </a>
          </div>

          {/* Services */}
          <div className="ft-col">
            <h5 className="ft-col__title"><T bg="Услуги" en="Services" /></h5>
            <ul className="ft-links">
              <li><a href="/#services"><T bg="Доставка на материали" en="Material supply" /></a></li>
              <li><a href="/#services"><T bg="Укрепване на фундаменти" en="Foundation reinforcement" /></a></li>
              <li><a href="/#services"><T bg="Ремонт на пукнатини" en="Crack repair" /></a></li>
              <li><a href="/#services"><T bg="Хидроизолация" en="Waterproofing" /></a></li>
            </ul>
          </div>

          {/* Products */}
          <div className="ft-col">
            <h5 className="ft-col__title"><T bg="Продукти" en="Products" /></h5>
            <ul className="ft-links">
              <li><a href="/#products"><T bg="Полимерни смоли" en="Polymer resins" /></a></li>
              <li><a href="/#products"><T bg="Инжекционни пени" en="Injection foams" /></a></li>
              <li><a href="/#products"><T bg="Гелове и мастики" en="Gels & mastics" /></a></li>
              <li><a href="/#products"><T bg="Оборудване" en="Equipment" /></a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="ft-col">
            <h5 className="ft-col__title"><T bg="Контакти" en="Contact" /></h5>
            <ul className="ft-links">
              <li><a href="tel:+359899809607">+359 89 980 9607</a></li>
              <li><a href="mailto:bodexbg@gmail.com">bodexbg@gmail.com</a></li>
              <li><a href="/#contact"><T bg="Изпрати запитване" en="Send enquiry" /></a></li>
              <li><a href="/projects"><T bg="Проекти" en="Projects" /></a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="ft-bottom">
          <span>© {year} BODEX Bulgaria</span>
          <span className="ft-bottom__sep" aria-hidden="true">·</span>
          <span><T bg="Всички права запазени" en="All rights reserved" /></span>
          <span className="ft-bottom__sep" aria-hidden="true">·</span>
          <a href="https://www.arcan-waterproofing.com/" target="_blank" rel="noreferrer">ARCAN Waterproofing Partner</a>
        </div>

      </div>
    </footer>
  );
}
