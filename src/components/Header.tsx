import React, { useEffect } from 'react';
import '../styles/Header.css';
import logo from '../assets/images/solgas-logo-azul.png';
import inicioIcon from '../assets/svg/inicio.svg';
import productosIcon from '../assets/svg/productos.svg';
import serviciosIcon from '../assets/svg/servicios.svg';
import soporteIcon from '../assets/svg/soporte.svg';
import contactoIcon from '../assets/svg/contacto.svg';
import llamadaIcon from '../assets/svg/llamada.svg';

const Header: React.FC = () => {
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

  return (
    <header className="header">
      <div className="header__left">
        <img src={logo} alt="Solgas Logo" className="header__logo" />
        <nav className="header__nav">
          <a href="#inicio" className="header__nav-link">
            <span className="header__icon-container"><img src={inicioIcon} alt="Inicio" className="header__icon" /></span>
            Inicio
          </a>
          <a href="#productos" className="header__nav-link">
            <span className="header__icon-container"><img src={productosIcon} alt="Productos" className="header__icon" /></span>
            Productos
          </a>
          <a href="#servicios" className="header__nav-link">
            <span className="header__icon-container"><img src={serviciosIcon} alt="Servicios" className="header__icon" /></span>
            Servicios
          </a>
          <a href="#soporte" className="header__nav-link">
            <span className="header__icon-container"><img src={soporteIcon} alt="Soporte" className="header__icon" /></span>
            Soporte
          </a>
          <a href="#contacto" className="header__nav-link">
            <span className="header__icon-container"><img src={contactoIcon} alt="Contacto" className="header__icon" /></span>
            Contacto
          </a>
        </nav>
      </div>
      <div className="header__right">
        <a href="tel:+51994733630" className="header__call-link">
          <button className="header__call-btn">
            <span className="header__icon-container"><img src={llamadaIcon} alt="Llamar" className="header__icon" /></span>
            Llamar
          </button>
        </a>
      </div>
    </header>
  );
};

export default Header;
