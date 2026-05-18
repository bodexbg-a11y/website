import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLang, T } from '../context/LangContext';
import logoSrc from '../assets/logo.svg';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showCta, setShowCta] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang } = useLang();
  const location = useLocation();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
      setShowCta(window.scrollY > 300);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';

  function scrollTo(id) {
    setMenuOpen(false);
    if (!isHome) return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} id="mobileMenu">
        <button className="mobile-menu-close" onClick={() => setMenuOpen(false)}>✕</button>
        {isHome ? (
          <>
            <a href="#services" onClick={() => scrollTo('services')}><T bg="Услуги" en="Services" /></a>
            <a href="#products" onClick={() => scrollTo('products')}><T bg="Продукти" en="Products" /></a>
            <a href="#sectors" onClick={() => scrollTo('sectors')}><T bg="Сектори" en="Sectors" /></a>
            <a href="#process" onClick={() => scrollTo('process')}><T bg="Процес" en="Process" /></a>
            <Link to="/projects"><T bg="Проекти" en="Projects" /></Link>
            <a href="#contact" onClick={() => scrollTo('contact')}><T bg="Контакти" en="Contact" /></a>
          </>
        ) : (
          <>
            <Link to="/#services"><T bg="Услуги" en="Services" /></Link>
            <Link to="/#products"><T bg="Продукти" en="Products" /></Link>
            <Link to="/#sectors"><T bg="Сектори" en="Sectors" /></Link>
            <Link to="/#process"><T bg="Процес" en="Process" /></Link>
            <Link to="/projects"><T bg="Проекти" en="Projects" /></Link>
            <Link to="/#contact"><T bg="Контакти" en="Contact" /></Link>
          </>
        )}
      </div>

      <header id="header" className={scrolled ? 'scrolled' : ''}>
        <nav>
          <Link to="/" className="logo" id="navLogo">
            <img src={logoSrc} alt="BODEX Bulgaria" id="logoImg" />
          </Link>
          <ul className="nav-links">
            {isHome ? (
              <>
                <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}><T bg="Услуги" en="Services" /></a></li>
                <li><a href="#products" onClick={(e) => { e.preventDefault(); scrollTo('products'); }}><T bg="Продукти" en="Products" /></a></li>
                <li><a href="#sectors" onClick={(e) => { e.preventDefault(); scrollTo('sectors'); }}><T bg="Сектори" en="Sectors" /></a></li>
                <li><a href="#process" onClick={(e) => { e.preventDefault(); scrollTo('process'); }}><T bg="Процес" en="Process" /></a></li>
                <li><Link to="/projects"><T bg="Проекти" en="Projects" /></Link></li>
                <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}><T bg="Контакти" en="Contact" /></a></li>
              </>
            ) : (
              <>
                <li><Link to="/#services"><T bg="Услуги" en="Services" /></Link></li>
                <li><Link to="/#products"><T bg="Продукти" en="Products" /></Link></li>
                <li><Link to="/#sectors"><T bg="Сектори" en="Sectors" /></Link></li>
                <li><Link to="/#process"><T bg="Процес" en="Process" /></Link></li>
                <li><Link to="/projects"><T bg="Проекти" en="Projects" /></Link></li>
                <li><Link to="/#contact"><T bg="Контакти" en="Contact" /></Link></li>
              </>
            )}
          </ul>
          <div className="nav-right">
            <div className="lang-switch">
              <button className={`lang-btn${lang === 'bg' ? ' active' : ''}`} onClick={() => setLang('bg')}>БГ</button>
              <button className={`lang-btn${lang === 'en' ? ' active' : ''}`} onClick={() => setLang('en')}>EN</button>
            </div>
            {showCta && (
              <a href={isHome ? '#contact' : '/#contact'} className="btn btn-primary" style={{ fontSize: '0.78rem', padding: '10px 20px' }}>
                <T bg="Запитване" en="Enquiry" />
              </a>
            )}
            <button
              className={`hamburger${menuOpen ? ' open' : ''}`}
              id="hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
