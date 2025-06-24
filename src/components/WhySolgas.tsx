import type { FC } from 'react';
import SeguroConfiable from '../assets/svg/segurocongfiable.svg?react';
import IconoPersonalAtencion from '../assets/svg/iconopersonalatencion.svg?react';
import IconoBalonSolgas from '../assets/svg/iconobalonsolgas.svg?react';
import '../styles/WhySolgas.css';

interface Card {
  Icon: FC<{ className?: string; 'aria-label': string }>;
  title: string;
  number: string;
  alt: string;
}

const cards: Card[] = [
  {
    Icon: IconoPersonalAtencion,
    title: 'Personal de ateción capacitado y especializado.',
    number: '1',
    alt: 'Experiencia',
  },
  {
    Icon: IconoBalonSolgas,
    title: 'Proceso de envasado de altos estandares internacionales.',
    number: '2',
    alt: 'Plantas y terminal',
  },
  {
    Icon: SeguroConfiable,
    title: 'Producto seguro, confiable y de alto rendimiento.',
    number: '3',
    alt: 'Seguro y confiable',
  },
];

const WhySolgas: FC = () => {
  return (
    <section className="why-solgas-section">
      <h2 className="why-solgas-title">
        ¿Por qué Solgas?
      </h2>
      <div className="why-solgas-cards">
        {cards.map((card, idx) => {
          const Icon = card.Icon;
          return (
            <div className="why-solgas-card" key={idx}>
              <div className="why-solgas-card-number">{card.number}</div>
              <div className="why-solgas-card-icon-bg">
                <Icon className="why-solgas-card-icon" aria-label={card.alt} />
              </div>
              <div className="why-solgas-card-text">{card.title}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhySolgas;
