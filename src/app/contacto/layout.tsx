import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://solgas-surquillo.vercel.app';

export const metadata: Metadata = {
  title: 'Contacto Solgas Surquillo - Solicita tu Gas Ahora | Distribuidor Autorizado',
  description: 'Contacta con Solgas Surquillo, distribuidor autorizado de gas. Llámanos al 964 691 611 o escríbenos por WhatsApp. Entrega rápida de gas doméstico e industrial Solgas en Surquillo y distritos aledaños.',
  keywords: [
    'Solgas',
    'contacto Solgas',
    'Solgas Surquillo contacto',
    'distribuidor Solgas contacto',
    'solicitar gas Solgas',
    'pedido Solgas',
    'teléfono Solgas',
    'WhatsApp Solgas',
    'gas Surquillo contacto',
    'teléfono gas',
    'WhatsApp gas',
    'pedido de gas',
  ],
  openGraph: {
    title: 'Contacto - Solicita tu Gas Ahora | Solgas Surquillo',
    description: 'Contacta con Solgas Surquillo. Llámanos al 964 691 611 o escríbenos por WhatsApp.',
    url: `${siteUrl}/contacto`,
    images: [
      {
        url: `${siteUrl}/assets/images/solgas-logo-azul.png`,
        width: 1200,
        height: 630,
        alt: 'Contacto Solgas Surquillo',
      },
    ],
  },
  alternates: {
    canonical: `${siteUrl}/contacto`,
  },
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

