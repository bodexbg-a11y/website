import { Link } from 'react-router-dom';
import { T } from '../context/LangContext';
import logoSrc from '../assets/logo.svg';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logoSrc} alt="BODEX Bulgaria" />
            </div>
            <T
              bg={<p>B2B доставчик на инжекционни системи и изпълнител на укрепвания на конструкции. Официален партньор на ARCAN Waterproofing.</p>}
              en={<p>B2B supplier of injection systems and contractor for structural reinforcement. Official partner of ARCAN Waterproofing.</p>}
            />
          </div>
          <div className="footer-col">
            <h4><T bg="Услуги" en="Services" /></h4>
            <ul>
              <li><a href="/#services"><T bg="Доставка на материали" en="Material supply" /></a></li>
              <li><a href="/#services"><T bg="Укрепване на фундаменти" en="Foundation reinforcement" /></a></li>
              <li><a href="/#services"><T bg="Ремонт на пукнатини" en="Crack repair" /></a></li>
              <li><a href="/#services"><T bg="Хидроизолация" en="Waterproofing" /></a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4><T bg="Продукти" en="Products" /></h4>
            <ul>
              <li><a href="/#products"><T bg="Полимерни смоли" en="Polymer resins" /></a></li>
              <li><a href="/#products"><T bg="Инжекционни пени" en="Injection foams" /></a></li>
              <li><a href="/#products"><T bg="Гелове и мастики" en="Gels & mastics" /></a></li>
              <li><a href="/#products"><T bg="Оборудване" en="Equipment" /></a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4><T bg="Контакти" en="Contact" /></h4>
            <ul>
              <li><a href="tel:+359899809607">+359 89 980 9607</a></li>
              <li><a href="mailto:bodexbg@gmail.com">bodexbg@gmail.com</a></li>
              <li><a href="/#contact"><T bg="Изпрати запитване" en="Send enquiry" /></a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 BODEX Bulgaria. <T bg="Всички права запазени." en="All rights reserved." /></p>
          <p><T bg="Официален партньор на" en="Official partner of" /> <strong style={{ color: '#93a8f5' }}>ARCAN Waterproofing</strong></p>
        </div>
      </div>
    </footer>
  );
}
