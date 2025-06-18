import React from 'react';
import Hero from './Hero';
import Brands from './Brands';
import BenefitsCarousel from './BenefitsCarousel';
import Testimonials from './testimonials/Testimonials';
import FAQ from './FAQ';

const Main: React.FC = () => {
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
