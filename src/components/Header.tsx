import { useEffect, useState } from 'react';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/images/solgas-logo-azul.png';
import inicioIcon from '../assets/svg/inicio.svg';
import productosIcon from '../assets/svg/productos.svg';
import serviciosIcon from '../assets/svg/servicios.svg';
import contactoIcon from '../assets/svg/contacto.svg';
import llamadaIcon from '../assets/svg/llamada.svg';
import menuIcon from '../assets/svg/menu-hamburguesa.svg';

/**
 * Header de navegación principal de la web Solgas.
 * Incluye navegación responsive y botón de llamada.
 */
const Header: FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const header = document.querySelector<HTMLElement>('.header');
      if (window.scrollY > 12) {
        header?.classList.add('header--scrolled');
      } else {
        header?.classList.remove('header--scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Evita el scroll cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const handleMenuToggle = (): void => setMenuOpen(open => !open);
  const handleMenuClose = (): void => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header__left">
        <img src={logo} alt="Solgas Logo" className="header__logo" />
        <nav className={`header__nav${menuOpen ? ' header__nav--open' : ''}`}>
          <Link to="/" className="header__nav-link" onClick={handleMenuClose}>
            <span className="header__icon-container"><img src={inicioIcon} alt="Inicio" className="header__icon" /></span>
            Inicio
          </Link>
          <Link to="/productos" className="header__nav-link" onClick={handleMenuClose}>
            <span className="header__icon-container"><img src={productosIcon} alt="Productos" className="header__icon" /></span>
            Productos
          </Link>
          <Link to="/servicios" className="header__nav-link" onClick={handleMenuClose}>
            <span className="header__icon-container"><img src={serviciosIcon} alt="Servicios" className="header__icon" /></span>
            Servicios
          </Link>
          <Link to="/contacto" className="header__nav-link" onClick={handleMenuClose}>
            <span className="header__icon-container"><img src={contactoIcon} alt="Contacto" className="header__icon" /></span>
            Contacto
          </Link>
        </nav>
      </div>
      <div className="header__right">
        <button
          className={`header__menu-btn${menuOpen ? ' header__menu-btn--open' : ''}`}
          onClick={handleMenuToggle}
          aria-label="Abrir menú"
          type="button"
        >
          <img src={menuIcon} alt="Menú" className="header__menu-icon" />
        </button>
        <a href="tel:+51994733630" className="header__call-link">
          <button className="header__call-btn" type="button">
            <span className="header__icon-container"><img src={llamadaIcon} alt="Llamar" className="header__icon" /></span>
            Llamar
          </button>
        </a>
      </div>
      {menuOpen && <div className="header__nav-overlay" onClick={handleMenuClose} />}
    </header>
  );
};

export default Header;
