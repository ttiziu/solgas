import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Brands from '@/components/Brands';
import BenefitsCarousel from '@/components/BenefitsCarousel';
import FeaturedProducts from '@/components/FeaturedProducts';
import Testimonials from '@/components/testimonials/Testimonials';
import FAQ from '@/components/FAQ';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://solgas-surquillo.vercel.app';

export const metadata: Metadata = {
  title: 'Solgas Surquillo - Distribuidor Autorizado de Gas Doméstico e Industrial',
  description: 'Solgas Surquillo: Distribuidor autorizado de gas doméstico e industrial Solgas. Productos Solgas certificados: balones de 10kg y 45kg. Entrega rápida, segura y al mejor precio en Surquillo, Miraflores, San Isidro y más distritos de Lima. Confía en Solgas.',
  keywords: [
    'Solgas',
    'Solgas Surquillo',
    'distribuidor Solgas',
    'Solgas autorizado',
    'gas Solgas',
    'balón Solgas',
    'Solgas 10kg',
    'Solgas 45kg',
    'productos Solgas',
    'Solgas Lima',
    'Solgas Perú',
    'gas doméstico Solgas',
    'gas industrial Solgas',
  ],
  openGraph: {
    title: 'Solgas Surquillo - Distribuidor Autorizado de Gas Doméstico e Industrial',
    description: 'Distribuidor autorizado Solgas. Productos Solgas certificados con entrega rápida en Surquillo, Miraflores, San Isidro y más distritos de Lima.',
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/assets/images/solgas-logo-azul.png`,
        width: 1200,
        height: 630,
        alt: 'Solgas Surquillo - Distribuidor Autorizado',
      },
    ],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Brands />
      <BenefitsCarousel />
      <FeaturedProducts />
      <Testimonials />
      <FAQ />
    </main>
  );
}

