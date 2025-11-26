import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NavigationLoader from '@/components/NavigationLoader';
import '@/styles/globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://solgas-surquillo.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Solgas Surquillo - Gas Doméstico e Industrial | Entrega Rápida y Segura',
    template: '%s | Solgas Surquillo',
  },
  description: 'Solgas Surquillo: Distribuidor autorizado de gas doméstico e industrial. Entrega rápida, segura y al mejor precio en Surquillo, Miraflores, San Isidro y más distritos de Lima. Balones de 10kg y 45kg disponibles.',
  keywords: [
    'Solgas',
    'Solgas Surquillo',
    'distribuidor Solgas',
    'Solgas autorizado',
    'gas Solgas',
    'balón Solgas',
    'Solgas 10kg',
    'Solgas 45kg',
    'Solgas Lima',
    'Solgas Perú',
    'gas doméstico Solgas',
    'gas industrial Solgas',
    'Solgas entrega rápida',
    'Solgas certificado',
    'gas en Surquillo',
    'gas en Miraflores',
    'gas en San Isidro',
    'gas en San Borja',
    'gas en Surco',
    'gas en La Molina',
    'balón de gas 10kg',
    'balón de gas 45kg',
    'distribuidor de gas',
    'entrega de gas',
    'gas domiciliario',
    'gas para restaurantes',
    'gas Lima',
    'gas Perú',
  ],
  authors: [{ name: 'Solgas Surquillo' }],
  creator: 'Solgas Surquillo',
  publisher: 'Solgas Surquillo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    url: siteUrl,
    siteName: 'Solgas Surquillo',
    title: 'Solgas Surquillo - Gas Doméstico e Industrial | Entrega Rápida y Segura',
    description: 'Distribuidor autorizado de gas doméstico e industrial. Entrega rápida, segura y al mejor precio en Surquillo, Miraflores, San Isidro y más distritos de Lima.',
    images: [
      {
        url: `${siteUrl}/assets/images/solgas-logo-azul.png`,
        width: 1200,
        height: 630,
        alt: 'Solgas Surquillo - Distribuidor de Gas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solgas Surquillo - Gas Doméstico e Industrial',
    description: 'Entrega rápida, segura y al mejor precio en Surquillo y más distritos de Lima.',
    images: [`${siteUrl}/assets/images/solgas-logo-azul.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    // Agregar códigos de verificación cuando estén disponibles
    // google: 'tu-codigo-google',
    // yandex: 'tu-codigo-yandex',
    // bing: 'tu-codigo-bing',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <NavigationLoader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

