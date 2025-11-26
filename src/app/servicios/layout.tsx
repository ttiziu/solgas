import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://solgas-surquillo.vercel.app';

export const metadata: Metadata = {
  title: 'Servicios Solgas - Gas Doméstico e Industrial | Distribuidor Autorizado',
  description: 'Servicios Solgas: Distribución de gas doméstico e industrial con personal capacitado. Distribuidor autorizado Solgas con proceso de envasado de altos estándares y producto seguro y confiable. Métodos de pago flexibles.',
  keywords: [
    'Solgas',
    'servicios Solgas',
    'distribuidor Solgas',
    'Solgas autorizado',
    'servicios de gas Solgas',
    'distribución Solgas',
    'gas doméstico Solgas',
    'gas industrial Solgas',
    'entrega Solgas',
    'Solgas Lima',
    'Solgas Surquillo',
    'servicio de gas Lima',
    'métodos de pago gas',
  ],
  openGraph: {
    title: 'Servicios - Gas Doméstico e Industrial | Solgas Surquillo',
    description: 'Servicios de distribución de gas doméstico e industrial con personal capacitado y proceso de envasado de altos estándares.',
    url: `${siteUrl}/servicios`,
    images: [
      {
        url: `${siteUrl}/assets/images/solgas-logo-azul.png`,
        width: 1200,
        height: 630,
        alt: 'Servicios Solgas Surquillo',
      },
    ],
  },
  alternates: {
    canonical: `${siteUrl}/servicios`,
  },
};

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

