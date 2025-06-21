import React, { useEffect } from 'react';
import solgas10kg from '../assets/images/solgas10kg.webp';
import solgas45kg from '../assets/images/solgas45kg.webp';
import valvula from '../assets/images/valvula.webp';
import '../styles/Productos.css';
import gsap from 'gsap';
import surquilloImg from '../assets/images-distritos/surquillo.jpg';
import surcoImg from '../assets/images-distritos/surco.jpg';
import sanborjaImg from '../assets/images-distritos/sanborja.jpg';
import sanisidroImg from '../assets/images-distritos/sanisidro.jpg';
import lamolinaImg from '../assets/images-distritos/lamolina.jpg';
import mirafloresImg from '../assets/images-distritos/miraflores.jpg';
import chorrillosImg from '../assets/images-distritos/chorrillos.jpg';
import pueblolibreImg from '../assets/images-distritos/pueblolibre.jpg';
import jesusmariaImg from '../assets/images-distritos/jesusmaria.jpg';
import magdalenadelmarImg from '../assets/images-distritos/magdalenadelmar.jpg';
import linceImg from '../assets/images-distritos/lince.jpg';

const productos = [
  {
    nombre: 'Balón de 10kg',
    img: solgas10kg,
    descripcion: 'Ideal para hogares pequeños y medianos. Fácil de transportar y seguro.',
    cta: 'VER MÁS',
  },
  {
    nombre: 'Balón de 45kg',
    img: solgas45kg,
    descripcion: 'Perfecto para negocios, restaurantes o familias grandes. Máxima duración.',
    cta: 'VER MÁS',
  },
  {
    nombre: 'Kit Regulador Premium',
    img: valvula,
    descripcion: 'Incluye regulador y manguera de alta seguridad para tu instalación.',
    cta: 'VER MÁS',
  },
];

const distritos = [
  { nombre: 'Surquillo', img: surquilloImg },
  { nombre: 'Surco', img: surcoImg },
  { nombre: 'San Borja', img: sanborjaImg },
  { nombre: 'San Isidro', img: sanisidroImg },
  { nombre: 'La Molina', img: lamolinaImg },
  { nombre: 'Miraflores', img: mirafloresImg },
  { nombre: 'Chorrillos', img: chorrillosImg },
  { nombre: 'Pueblo Libre', img: pueblolibreImg },
  { nombre: 'Jesús María', img: jesusmariaImg },
  { nombre: 'Magdalena del Mar', img: magdalenadelmarImg },
  { nombre: 'Lince', img: linceImg },
];

const Productos: React.FC = () => {
  useEffect(() => {
    gsap.fromTo(
      '.cobertura-card',
      { opacity: 0, scale: 0.92, filter: 'blur(8px)' },
      {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        stagger: 0.08,
        duration: 0.7,
        ease: 'power3.out',
        clearProps: 'filter,scale,opacity',
      }
    );
  }, []);

  return (
    <section className="productos-section">
      <h1 className="productos-title">Productos hogar</h1>
      <div className="productos-grid">
        {productos.map((p) => (
          <div key={p.nombre} className="producto-card">
            <img src={p.img} alt={p.nombre} className="producto-img" />
            <div className="producto-nombre">{p.nombre}</div>
            <div className="producto-desc">{p.descripcion}</div>
            <a
              className="producto-btn"
              href="https://wa.me/51994733630"
              target="_blank"
              rel="noopener noreferrer"
            >
              {p.cta}
            </a>
          </div>
        ))}
      </div>
      <section className="cobertura-section">
        <h2 className="cobertura-title">Conoce nuestra cobertura</h2>
        <div className="cobertura-grid">
          {distritos.map((d) => (
            <div className="cobertura-card" key={d.nombre}>
              <div className="cobertura-img-wrap">
                <img src={d.img} alt={d.nombre} className="cobertura-img" />
              </div>
              <div className="cobertura-nombre">{d.nombre}</div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Productos;
