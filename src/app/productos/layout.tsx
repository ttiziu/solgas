import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://solgas-surquillo.vercel.app';

export const metadata: Metadata = {
  title: 'Productos Solgas - Balones de Gas 10kg y 45kg | Distribuidor Autorizado',
  description: 'Productos Solgas: Balones de gas doméstico e industrial de 10kg y 45kg. Productos Solgas certificados y seguros. Distribuidor autorizado Solgas con entrega rápida en Surquillo, Miraflores, San Isidro y más distritos de Lima.',
  keywords: [
    'Solgas',
    'productos Solgas',
    'Solgas 10kg',
    'Solgas 45kg',
    'balón Solgas',
    'gas Solgas',
    'distribuidor Solgas',
    'Solgas autorizado',
    'balón de gas 10kg',
    'balón de gas 45kg',
    'gas doméstico Solgas',
    'gas industrial Solgas',
    'kit regulador Solgas',
    'Solgas Lima',
    'Solgas Surquillo',
    'gas Lima',
  ],
  openGraph: {
    title: 'Productos - Balones de Gas 10kg y 45kg | Solgas Surquillo',
    description: 'Balones de gas doméstico e industrial de 10kg y 45kg. Productos certificados y seguros.',
    url: `${siteUrl}/productos`,
    images: [
      {
        url: `${siteUrl}/assets/images/solgas10kg.webp`,
        width: 1200,
        height: 630,
        alt: 'Balón de Gas Solgas 10kg',
      },
    ],
  },
  alternates: {
    canonical: `${siteUrl}/productos`,
  },
};

export default function ProductosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

