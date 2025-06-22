import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/images/solgas-logo-azul.png';
import inicioIcon from '../assets/svg/inicio.svg';
import productosIcon from '../assets/svg/productos.svg';
import serviciosIcon from '../assets/svg/servicios.svg';
import contactoIcon from '../assets/svg/contacto.svg';
import llamadaIcon from '../assets/svg/llamada.svg';
import menuIcon from '../assets/svg/menu-hamburguesa.svg';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (window.scrollY > 12) {
        header?.classList.add('header--scrolled');
      } else {
        header?.classList.remove('header--scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="header__left">
        <img src={logo} alt="Solgas Logo" className="header__logo" />
        <nav className={`header__nav${menuOpen ? ' header__nav--open' : ''}`}>
          <Link to="/" className="header__nav-link" onClick={() => setMenuOpen(false)}>
            <span className="header__icon-container"><img src={inicioIcon} alt="Inicio" className="header__icon" /></span>
            Inicio
          </Link>
          <Link to="/productos" className="header__nav-link" onClick={() => setMenuOpen(false)}>
            <span className="header__icon-container"><img src={productosIcon} alt="Productos" className="header__icon" /></span>
            Productos
          </Link>
          <Link to="/servicios" className="header__nav-link" onClick={() => setMenuOpen(false)}>
            <span className="header__icon-container"><img src={serviciosIcon} alt="Servicios" className="header__icon" /></span>
            Servicios
          </Link>
          <Link to="/contacto" className="header__nav-link" onClick={() => setMenuOpen(false)}>
            <span className="header__icon-container"><img src={contactoIcon} alt="Contacto" className="header__icon" /></span>
            Contacto
          </Link>
        </nav>
      </div>
      <div className="header__right">
        <button className={`header__menu-btn${menuOpen ? ' header__menu-btn--open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">
          <img src={menuIcon} alt="Menú" className="header__menu-icon" />
        </button>
        <a href="tel:+51994733630" className="header__call-link">
          <button className="header__call-btn">
            <span className="header__icon-container"><img src={llamadaIcon} alt="Llamar" className="header__icon" /></span>
            Llamar
          </button>
        </a>
      </div>
      {menuOpen && <div className="header__nav-overlay" onClick={() => setMenuOpen(false)} />}
    </header>
  );
};

export default Header;
