'use client';

import { useEffect, useRef } from 'react';
import type { FC } from 'react';
import '@/styles/FeaturedProducts.css';

interface Product {
  nombre: string;
  img: string;
  descripcion: string;
  precio?: string;
  whatsappMessage: string;
}

const products: ReadonlyArray<Product> = [
  {
    nombre: 'Balón Solgas 10kg',
    img: '/assets/images/balon10kg..png',
    descripcion: 'Ideal para hogares pequeños y medianos. Fácil de transportar y seguro.',
    whatsappMessage: 'Hola, me interesa el Balón Solgas 10kg. ¿Podrían darme más información?',
  },
  {
    nombre: 'Balón Solgas 10kg + Contenido',
    img: '/assets/images/balonmascontenido.png',
    descripcion: 'Balón de 10kg con contenido adicional. Perfecto para mayor duración.',
    whatsappMessage: 'Hola, me interesa el Balón Solgas 10kg + Contenido. ¿Podrían darme más información?',
  },
  {
    nombre: 'Balón Solgas 45kg',
    img: '/assets/images/balonde45kg.png',
    descripcion: 'Perfecto para negocios, restaurantes o familias grandes. Máxima duración.',
    whatsappMessage: 'Hola, me interesa el Balón Solgas 45kg. ¿Podrían darme más información?',
  },
  {
    nombre: 'Balón Solgas 45kg + Contenido',
    img: '/assets/images/balonde45mascontenido.png',
    descripcion: 'Balón de 45kg con contenido adicional. Ideal para uso intensivo.',
    whatsappMessage: 'Hola, me interesa el Balón Solgas 45kg + Contenido. ¿Podrían darme más información?',
  },
  {
    nombre: 'Kit Regulador Premium',
    img: '/assets/images/kitreguladorpremium.png',
    descripcion: 'Incluye regulador y manguera de alta seguridad para tu instalación.',
    whatsappMessage: 'Hola, me interesa el Kit Regulador Premium. ¿Podrían darme más información?',
  },
  {
    nombre: 'Kit Completo',
    img: '/assets/images/kitcompleto.png',
    descripcion: 'Balón de 10kg + contenido + kit de válvula. Todo lo necesario para tu hogar.',
    whatsappMessage: 'Hola, me interesa el Kit Completo (Balón 10kg + contenido + kit de válvula). ¿Podrían darme más información?',
  },
];

const FeaturedProducts: FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = (): void => {
      if (titleRef.current) {
        const rect = titleRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
          titleRef.current.classList.add('visible');
        }
      }

      cardsRef.current.forEach((card: HTMLDivElement | null, idx: number) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
          setTimeout(() => {
            card.classList.add('visible');
          }, idx * 150);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="featured-products-section">
      <h2
        ref={titleRef}
        className="featured-products-title"
      >
        Productos Destacados
      </h2>
      <div className="featured-products-grid">
        {products.map((product: Product, idx: number) => (
          <div
            key={product.nombre}
            className="featured-product-card"
            ref={el => { cardsRef.current[idx] = el; }}
          >
            <div className="featured-product-image-wrapper">
              <img
                src={product.img}
                alt={product.nombre}
                className="featured-product-image"
              />
            </div>
            <div className="featured-product-content">
              <h3 className="featured-product-name">{product.nombre}</h3>
              <p className="featured-product-description">{product.descripcion}</p>
              <a
                href={`https://wa.me/51994733630?text=${encodeURIComponent(product.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="featured-product-button"
              >
                Ver más detalles
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;

