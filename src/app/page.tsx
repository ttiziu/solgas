import Hero from '@/components/Hero';
import Brands from '@/components/Brands';
import BenefitsCarousel from '@/components/BenefitsCarousel';
import Testimonials from '@/components/testimonials/Testimonials';
import FAQ from '@/components/FAQ';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Brands />
      <BenefitsCarousel />
      <Testimonials />
      <FAQ />
    </main>
  );
}

