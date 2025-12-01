import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import '@/styles/DistrictPage.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://solgas-surquillo.vercel.app';

// Configuración de distritos con metadata SEO
const districtsConfig: Record<string, {
  nombre: string;
  nombreCompleto: string;
  imagen: string;
  title: string;
  description: string;
  keywords: string[];
}> = {
  'surquillo': {
    nombre: 'Surquillo',
    nombreCompleto: 'Surquillo',
    imagen: '/assets/images-distritos/surquillo.jpg',
    title: 'Solgas Surquillo - Gas Doméstico e Industrial | Distribuidor Autorizado',
    description: 'Solgas Surquillo: Distribuidor autorizado de gas doméstico e industrial. Entrega rápida de balones Solgas de 10kg y 45kg en Surquillo. Productos Solgas certificados y seguros. Llamar al 964 691 611.',
    keywords: ['Solgas Surquillo', 'gas Solgas Surquillo', 'distribuidor Solgas Surquillo', 'Solgas autorizado Surquillo', 'balón Solgas Surquillo', 'gas en Surquillo', 'solgas Surquillo', 'balón de gas Surquillo', 'entrega Solgas Surquillo', 'gas doméstico Solgas'],
  },
  'miraflores': {
    nombre: 'Miraflores',
    nombreCompleto: 'Miraflores',
    imagen: '/assets/images-distritos/miraflores.jpg',
    title: 'Solgas Miraflores - Gas Doméstico e Industrial | Distribuidor Autorizado',
    description: 'Solgas Miraflores: Distribuidor autorizado de gas doméstico e industrial. Entrega rápida de balones Solgas de 10kg y 45kg en Miraflores. Productos Solgas certificados y seguros. Llamar al 964 691 611.',
    keywords: ['Solgas Miraflores', 'gas Solgas Miraflores', 'distribuidor Solgas Miraflores', 'Solgas autorizado Miraflores', 'balón Solgas Miraflores', 'gas en Miraflores', 'solgas Miraflores', 'balón de gas Miraflores', 'entrega Solgas Miraflores', 'gas doméstico Solgas'],
  },
  'san-isidro': {
    nombre: 'San Isidro',
    nombreCompleto: 'San Isidro',
    imagen: '/assets/images-distritos/sanisidro.jpg',
    title: 'Solgas San Isidro - Gas Doméstico e Industrial | Distribuidor Autorizado',
    description: 'Solgas San Isidro: Distribuidor autorizado de gas doméstico e industrial. Entrega rápida de balones Solgas de 10kg y 45kg en San Isidro. Productos Solgas certificados y seguros. Llamar al 964 691 611.',
    keywords: ['Solgas San Isidro', 'gas Solgas San Isidro', 'distribuidor Solgas San Isidro', 'Solgas autorizado San Isidro', 'balón Solgas San Isidro', 'gas en San Isidro', 'solgas San Isidro', 'balón de gas San Isidro', 'entrega Solgas San Isidro', 'gas doméstico Solgas'],
  },
  'san-borja': {
    nombre: 'San Borja',
    nombreCompleto: 'San Borja',
    imagen: '/assets/images-distritos/sanborja.jpg',
    title: 'Solgas San Borja - Gas Doméstico e Industrial | Distribuidor Autorizado',
    description: 'Solgas San Borja: Distribuidor autorizado de gas doméstico e industrial. Entrega rápida de balones Solgas de 10kg y 45kg en San Borja. Productos Solgas certificados y seguros. Llamar al 964 691 611.',
    keywords: ['Solgas San Borja', 'gas Solgas San Borja', 'distribuidor Solgas San Borja', 'Solgas autorizado San Borja', 'balón Solgas San Borja', 'gas en San Borja', 'solgas San Borja', 'balón de gas San Borja', 'entrega Solgas San Borja', 'gas doméstico Solgas'],
  },
  'surco': {
    nombre: 'Surco',
    nombreCompleto: 'Santiago de Surco',
    imagen: '/assets/images-distritos/surco.jpg',
    title: 'Solgas Surco - Gas Doméstico e Industrial | Distribuidor Autorizado',
    description: 'Solgas Surco: Distribuidor autorizado de gas doméstico e industrial. Entrega rápida de balones Solgas de 10kg y 45kg en Surco. Productos Solgas certificados y seguros. Llamar al 964 691 611.',
    keywords: ['Solgas Surco', 'gas Solgas Surco', 'distribuidor Solgas Surco', 'Solgas autorizado Surco', 'balón Solgas Surco', 'gas en Surco', 'solgas Surco', 'balón de gas Surco', 'entrega Solgas Surco', 'gas doméstico Solgas'],
  },
  'la-molina': {
    nombre: 'La Molina',
    nombreCompleto: 'La Molina',
    imagen: '/assets/images-distritos/lamolina.jpg',
    title: 'Solgas La Molina - Gas Doméstico e Industrial | Distribuidor Autorizado',
    description: 'Solgas La Molina: Distribuidor autorizado de gas doméstico e industrial. Entrega rápida de balones Solgas de 10kg y 45kg en La Molina. Productos Solgas certificados y seguros. Llamar al 964 691 611.',
    keywords: ['Solgas La Molina', 'gas Solgas La Molina', 'distribuidor Solgas La Molina', 'Solgas autorizado La Molina', 'balón Solgas La Molina', 'gas en La Molina', 'solgas La Molina', 'balón de gas La Molina', 'entrega Solgas La Molina', 'gas doméstico Solgas'],
  },
  'magdalena-del-mar': {
    nombre: 'Magdalena del Mar',
    nombreCompleto: 'Magdalena del Mar',
    imagen: '/assets/images-distritos/magdalenadelmar.jpg',
    title: 'Solgas Magdalena del Mar - Gas Doméstico e Industrial | Distribuidor Autorizado',
    description: 'Solgas Magdalena del Mar: Distribuidor autorizado de gas doméstico e industrial. Entrega rápida de balones Solgas de 10kg y 45kg en Magdalena del Mar. Productos Solgas certificados y seguros. Llamar al 964 691 611.',
    keywords: ['Solgas Magdalena del Mar', 'gas Solgas Magdalena del Mar', 'distribuidor Solgas Magdalena del Mar', 'Solgas autorizado Magdalena del Mar', 'balón Solgas Magdalena del Mar', 'gas en Magdalena del Mar', 'solgas Magdalena del Mar', 'balón de gas Magdalena del Mar', 'entrega Solgas Magdalena del Mar', 'gas doméstico Solgas'],
  },
  'jesus-maria': {
    nombre: 'Jesús María',
    nombreCompleto: 'Jesús María',
    imagen: '/assets/images-distritos/jesusmaria.jpg',
    title: 'Solgas Jesús María - Gas Doméstico e Industrial | Distribuidor Autorizado',
    description: 'Solgas Jesús María: Distribuidor autorizado de gas doméstico e industrial. Entrega rápida de balones Solgas de 10kg y 45kg en Jesús María. Productos Solgas certificados y seguros. Llamar al 964 691 611.',
    keywords: ['Solgas Jesús María', 'gas Solgas Jesús María', 'distribuidor Solgas Jesús María', 'Solgas autorizado Jesús María', 'balón Solgas Jesús María', 'gas en Jesús María', 'solgas Jesús María', 'balón de gas Jesús María', 'entrega Solgas Jesús María', 'gas doméstico Solgas'],
  },
  'pueblo-libre': {
    nombre: 'Pueblo Libre',
    nombreCompleto: 'Pueblo Libre',
    imagen: '/assets/images-distritos/pueblolibre.jpg',
    title: 'Solgas Pueblo Libre - Gas Doméstico e Industrial | Distribuidor Autorizado',
    description: 'Solgas Pueblo Libre: Distribuidor autorizado de gas doméstico e industrial. Entrega rápida de balones Solgas de 10kg y 45kg en Pueblo Libre. Productos Solgas certificados y seguros. Llamar al 964 691 611.',
    keywords: ['Solgas Pueblo Libre', 'gas Solgas Pueblo Libre', 'distribuidor Solgas Pueblo Libre', 'Solgas autorizado Pueblo Libre', 'balón Solgas Pueblo Libre', 'gas en Pueblo Libre', 'solgas Pueblo Libre', 'balón de gas Pueblo Libre', 'entrega Solgas Pueblo Libre', 'gas doméstico Solgas'],
  },
  'lince': {
    nombre: 'Lince',
    nombreCompleto: 'Lince',
    imagen: '/assets/images-distritos/lince.jpg',
    title: 'Solgas Lince - Gas Doméstico e Industrial | Distribuidor Autorizado',
    description: 'Solgas Lince: Distribuidor autorizado de gas doméstico e industrial. Entrega rápida de balones Solgas de 10kg y 45kg en Lince. Productos Solgas certificados y seguros. Llamar al 964 691 611.',
    keywords: ['Solgas Lince', 'gas Solgas Lince', 'distribuidor Solgas Lince', 'Solgas autorizado Lince', 'balón Solgas Lince', 'gas en Lince', 'solgas Lince', 'balón de gas Lince', 'entrega Solgas Lince', 'gas doméstico Solgas'],
  },
  'barranco': {
    nombre: 'Barranco',
    nombreCompleto: 'Barranco',
    imagen: '/assets/images-distritos/miraflores.jpg', // Usar imagen de Miraflores como placeholder
    title: 'Solgas Barranco - Gas Doméstico e Industrial | Distribuidor Autorizado',
    description: 'Solgas Barranco: Distribuidor autorizado de gas doméstico e industrial. Entrega rápida de balones Solgas de 10kg y 45kg en Barranco. Productos Solgas certificados y seguros. Llamar al 964 691 611.',
    keywords: ['Solgas Barranco', 'gas Solgas Barranco', 'distribuidor Solgas Barranco', 'Solgas autorizado Barranco', 'balón Solgas Barranco', 'gas en Barranco', 'solgas Barranco', 'balón de gas Barranco', 'entrega Solgas Barranco', 'gas doméstico Solgas'],
  },
};

interface PageProps {
  params: Promise<{ district: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { district } = await params;
  const config = districtsConfig[district];

  if (!config) {
    return {
      title: 'Página no encontrada',
    };
  }

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    openGraph: {
      title: config.title,
      description: config.description,
      url: `${siteUrl}/${district}`,
      siteName: 'Solgas Surquillo',
      images: [
        {
          url: `${siteUrl}${config.imagen}`,
          width: 1200,
          height: 630,
          alt: `Gas en ${config.nombreCompleto} - Solgas Surquillo`,
        },
      ],
      locale: 'es_PE',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: config.title,
      description: config.description,
      images: [`${siteUrl}${config.imagen}`],
    },
    alternates: {
      canonical: `${siteUrl}/${district}`,
    },
  };
}

export default async function DistrictPage({ params }: PageProps) {
  const { district } = await params;
  const config = districtsConfig[district];

  if (!config) {
    notFound();
  }

  return (
    <main className="district-page">
      <div className="district-hero">
        <div className="district-hero-image">
          <Image
            src={config.imagen}
            alt={`${config.nombreCompleto} - Solgas Surquillo`}
            width={1200}
            height={630}
            priority
            className="district-image"
          />
        </div>
        <div className="district-hero-content">
          <h1 className="district-title">Solgas {config.nombreCompleto} - Distribuidor Autorizado</h1>
          <p className="district-description">
            <strong>Solgas {config.nombreCompleto}</strong>: Somos distribuidor autorizado de gas doméstico e industrial Solgas en {config.nombreCompleto}. 
            Ofrecemos entrega rápida de balones Solgas de 10kg y 45kg, productos Solgas certificados y seguros al mejor precio. 
            Confía en Solgas, la marca líder en distribución de gas en Lima.
          </p>
          <div className="district-cta">
            <a
              href="tel:+51964691611"
              className="district-phone-btn"
            >
              📞 Llamar: 964 691 611
            </a>
            <a
              href="https://wa.me/51964691611?text=Hola,%20quiero%20solicitar%20gas%20en%20{config.nombreCompleto}"
              target="_blank"
              rel="noopener noreferrer"
              className="district-whatsapp-btn"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>

      <section className="district-info">
        <h2 className="district-section-title">Productos Solgas Disponibles</h2>
        <div className="district-products">
          <div className="district-product-card">
            <h3>Balón Solgas 10kg</h3>
            <p>Balón Solgas de 10kg ideal para hogares pequeños y medianos. Producto Solgas certificado, fácil de transportar y seguro. Distribuidor autorizado Solgas.</p>
          </div>
          <div className="district-product-card">
            <h3>Balón Solgas 45kg</h3>
            <p>Balón Solgas de 45kg perfecto para negocios, restaurantes o familias grandes. Producto Solgas de máxima duración y calidad certificada.</p>
          </div>
        </div>
      </section>

      <section className="district-benefits">
        <h2 className="district-section-title">¿Por qué elegir Solgas en {config.nombreCompleto}?</h2>
        <ul className="district-benefits-list">
          <li>✅ Distribuidor autorizado Solgas con productos certificados</li>
          <li>✅ Balones Solgas de 10kg y 45kg disponibles</li>
          <li>✅ Entrega rápida y puntual de productos Solgas</li>
          <li>✅ Productos Solgas seguros y de alta calidad</li>
          <li>✅ Precios competitivos en productos Solgas</li>
          <li>✅ Atención personalizada de distribuidor Solgas</li>
          <li>✅ Cobertura Solgas en todo {config.nombreCompleto}</li>
        </ul>
      </section>

      <section className="district-actions">
        <Link href="/productos" className="district-link">
          Ver todos los productos →
        </Link>
        <Link href="/contacto" className="district-link">
          Contáctanos →
        </Link>
      </section>
    </main>
  );
}

