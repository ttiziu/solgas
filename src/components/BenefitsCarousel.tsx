import React, { useEffect, useRef } from 'react';
import '../styles/BenefitsCarousel.css';
import entregaRapidaIcon from '../assets/svg/entrega-rapida.svg';
import seguridadIcon from '../assets/svg/seguridad.svg';
import soporteIcon from '../assets/svg/soporte-telefono.svg';
import coberturaIcon from '../assets/svg/cobertura.svg';

const benefits = [
  {
    icon: entregaRapidaIcon,
    title: 'Entrega rápida',
    text: 'Llega a todo el país en menos de 24h.'
  },
  {
    icon: seguridadIcon,
    title: 'Seguridad garantizada',
    text: 'Balones certificados con normas peruanas.'
  },
  {
    icon: soporteIcon,
    title: 'Soporte 24/7',
    text: 'Atención inmediata todos los días.'
  },
  {
    icon: coberturaIcon,
    title: 'Cobertura nacional',
    text: 'Soluciones para hogares y empresas.'
  }
];

const BenefitsCarousel: React.FC = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const subtitleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Animación para las tarjetas
      cardsRef.current.forEach((card, idx) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
          setTimeout(() => {
            card.classList.add('visible');
          }, idx * 180);
        }
      });
      // Animación para el subtítulo
      if (subtitleRef.current) {
        const rect = subtitleRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
          subtitleRef.current.classList.add('visible');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="benefits-section">
      <h2 className="benefits-subtitle" ref={subtitleRef}>Confía en Solgas</h2>
      <div className="benefits-grid">
        {benefits.map((benefit, idx) => (
          <div
            className="benefit-card"
            key={idx}
            ref={el => { cardsRef.current[idx] = el; }}
          >
            <div className="benefit-icon">
              <img src={benefit.icon} alt={benefit.title} />
            </div>
            <div className="benefit-title">{benefit.title}</div>
            <div className="benefit-text">{benefit.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsCarousel;
