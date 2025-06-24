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
    <section className="w-full py-10 md:py-6 flex flex-col items-center justify-center bg-transparent" style={{ marginBottom: '8rem', minHeight: '420px' }}>
      <h2
        className="text-[2.2rem] md:text-[1.5rem] sm:text-[1.1rem] font-bold text-[#00254b] text-center mb-[72px] md:mb-9 sm:mb-4 font-inter tracking-[-1px] opacity-0 translate-y-10 scale-[0.98] transition-all duration-1100 ease-[cubic-bezier(0.4,0,0.2,1)] benefits-subtitle"
        ref={subtitleRef}
      >
        Confía en Solgas
      </h2>
      <div className="w-full max-w-[1200px] mx-auto flex flex-row justify-center items-stretch gap-12 flex-wrap md:flex-col md:items-center md:gap-4 md:px-[2vw] sm:gap-2 sm:px-[1vw]">
        {benefits.map((benefit: Benefit, idx: number) => (
          <div
            className="bg-none shadow-none rounded-none min-w-[260px] max-w-[320px] flex flex-col items-start justify-start relative overflow-visible m-0 opacity-0 translate-y-10 transition-all duration-1500 ease-[cubic-bezier(0.4,0,0.2,1)] benefit-card md:min-w-[90vw] md:max-w-[98vw] md:items-center md:text-center sm:min-w-[98vw] sm:max-w-[100vw] sm:items-center sm:text-center"
            key={idx}
            ref={el => { cardsRef.current[idx] = el; }}
          >
            <div className="bg-[rgba(239,127,26,0.13)] rounded-full w-14 h-14 flex items-center justify-center mb-6 benefit-icon">
              <img src={benefit.icon} alt={benefit.title} className="w-7 h-7 object-contain" />
            </div>
            <div className="text-[1.25rem] md:text-[1.1rem] font-bold text-[#0a1833] mb-3 font-inter text-left benefit-title">
              {benefit.title}
            </div>
            <div className="text-[#7b8591] text-[1.05rem] md:text-[0.98rem] font-inter text-left m-0 mb-0 leading-[1.6] benefit-text">
              {benefit.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsCarousel;
