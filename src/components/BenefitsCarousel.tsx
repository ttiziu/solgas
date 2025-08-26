import { useEffect, useRef } from 'react';
import type { FC } from 'react';
import '../styles/BenefitsCarousel.css';
import entregaRapidaIcon from '../assets/svg/entrega-rapida.svg';
import seguridadIcon from '../assets/svg/seguridad.svg';
import coberturaIcon from '../assets/svg/cobertura.svg';

interface Benefit {
  icon: string;
  title: string;
  text: string;
}

const benefits: ReadonlyArray<Benefit> = [
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
    icon: coberturaIcon,
    title: 'Cobertura nacional',
    text: 'Soluciones para hogares y empresas.'
  }
];

const BenefitsCarousel: FC = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const subtitleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const handleScroll = (): void => {
      // Animación para las tarjetas
      cardsRef.current.forEach((card: HTMLDivElement | null, idx: number) => {
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
      <h2
        className="benefits-subtitle"
        ref={subtitleRef}
      >
        Confía en Solgas
      </h2>
      <div className="benefits-horizontal">
        {benefits.map((benefit: Benefit, idx: number) => (
          <div
            className="benefit-card snap-start"
            key={idx}
            ref={el => { cardsRef.current[idx] = el; }}
          >
            <div className="benefit-icon">
              <img src={benefit.icon} alt={benefit.title} className="benefit-icon-img" />
            </div>
            <div className="benefit-title">
              {benefit.title}
            </div>
            <div className="benefit-text">
              {benefit.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsCarousel;
