'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
// Imágenes - usando rutas absolutas desde public/
const solgas10kg = '/assets/images/solgas10kg.webp';
const solgas45kg = '/assets/images/solgas45kg.webp';
const valvula = '/assets/images/valvula.webp';
const surquilloImg = '/assets/images-distritos/surquillo.jpg';
const surcoImg = '/assets/images-distritos/surco.jpg';
const sanborjaImg = '/assets/images-distritos/sanborja.jpg';
const sanisidroImg = '/assets/images-distritos/sanisidro.jpg';
const lamolinaImg = '/assets/images-distritos/lamolina.jpg';
const mirafloresImg = '/assets/images-distritos/miraflores.jpg';
const chorrillosImg = '/assets/images-distritos/chorrillos.jpg';
const pueblolibreImg = '/assets/images-distritos/pueblolibre.jpg';
const jesusmariaImg = '/assets/images-distritos/jesusmaria.jpg';
const magdalenadelmarImg = '/assets/images-distritos/magdalenadelmar.jpg';
const linceImg = '/assets/images-distritos/lince.jpg';
import '@/styles/Productos.css';

interface Producto {
  nombre: string;
  img: string;
  descripcion: string;
  cta: string;
}

interface Distrito {
  nombre: string;
  img: string;
}

const productos: ReadonlyArray<Producto> = [
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

const distritos: ReadonlyArray<Distrito> = [
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

export default function ProductosPage() {
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
    <div className="servicios-bg">
      <section className="productos-section">
        <h1 className="productos-title">Productos hogar</h1>
        <div className="productos-grid">
          {productos.map((p: Producto) => (
            <div key={p.nombre} className="producto-card">
              <img src={p.img} alt={p.nombre} className="producto-img" />
              <div className="producto-nombre">{p.nombre}</div>
              <div className="producto-desc producto-desc-responsive">{p.descripcion}</div>
              <a
                className="producto-btn"
                href="https://wa.me/51964691611"
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
            {distritos.map((d: Distrito) => (
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
    </div>
  );
}

