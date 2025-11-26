import type { FC } from 'react';
import '@/styles/Brands.css';

interface Brand {
  name: string;
  src: string;
}

const brands: ReadonlyArray<Brand> = [
  { name: 'Caseritogas', src: '/assets/images/Casertitogas.png' },
  { name: 'Econogas', src: '/assets/images/Econogas.png' },
  { name: 'Zetagas', src: '/assets/images/Zetagas.png' },
  { name: 'Petroperú', src: '/assets/images/petroperu.png' },
  { name: 'Repsol', src: '/assets/images/repsol.png' },
  { name: 'Inversiones GDH', src: '/assets/images/InversionesGDH.png' },
  { name: 'Llamagas', src: '/assets/images/llamagas.png' },
  { name: 'Limagas', src: '/assets/images/Limagas.webp' },
  { name: 'Primax', src: '/assets/images/primax.png' },
  { name: 'Github', src: '/assets/images/GitHub-Logo.png' },
  { name: 'Vercel', src: '/assets/images/Vercel-Logo.png' },
];

const Brands: FC = () => (
  <section className="brands-section">
    <div className="brands-title">Nuestras Marcas Aliadas</div>
    <div className="brands-fade-left" />
    <div className="brands-fade-right" />
    <div className="brands-list brands-scroll">
      {[...brands, ...brands].map((brand: Brand, idx: number) => (
        <div className="brand-item" key={idx}>
          <img src={brand.src} alt={brand.name} />
        </div>
      ))}
    </div>
  </section>
);

export default Brands;
