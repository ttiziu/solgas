import type { FC } from 'react';
import Hero from './Hero';
import Brands from './Brands';
import BenefitsCarousel from './BenefitsCarousel';
import Testimonials from './testimonials/Testimonials';
import FAQ from './FAQ';

/**
 * Componente principal que agrupa las secciones principales de la página.
 */
const Main: FC = () => {
  return (
    <main>
      <Hero />
      <Brands />
      <BenefitsCarousel />
      <Testimonials />
      <FAQ />
    </main>
  );
};

export default Main;
