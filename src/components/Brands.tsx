import React from 'react';
import '../styles/Brands.css';
import CaseritogasImg from '../assets/images/Casertitogas.png';
import EconogasImg from '../assets/images/Econogas.png';
import InversionesGDHImg from '../assets/images/InversionesGDH.png';
import ZetagasImg from '../assets/images/Zetagas.png';
import PetroperuImg from '../assets/images/petroperu.png';
import RepsolImg from '../assets/images/repsol.png';
import LlamagasImg from '../assets/images/llamagas.png';
import LimagasImg from '../assets/images/Limagas.webp';
import PrimaxImg from '../assets/images/primax.png';
import GithubgImg from '../assets/images/GitHub-Logo.png';
import VercelImg from '../assets/images/Vercel-Logo.png';
const brands = [
  { name: 'Caseritogas', src: CaseritogasImg },
  { name: 'Econogas', src: EconogasImg },
  { name: 'Zetagas', src: ZetagasImg },
  { name: 'Petroperú', src: PetroperuImg },
  { name: 'Repsol', src: RepsolImg },
  { name: 'Inversiones GDH', src: InversionesGDHImg },
  { name: 'Llamagas', src: LlamagasImg },
  { name: 'Limagas', src: LimagasImg },
  { name: 'Primax', src: PrimaxImg },
  { name: 'Github', src: GithubgImg },
  { name: 'Vercel', src: VercelImg },
];

const Brands: React.FC = () => (
  <section className="brands-section">
    <div className="brands-title">Nuestras Marcas Aliadas</div>
    <div className="brands-fade-left" />
    <div className="brands-fade-right" />
    <div className="brands-list brands-scroll">
      {[...brands, ...brands].map((brand, idx) => (
        <div className="brand-item" key={idx}>
          <img src={brand.src} alt={brand.name} />
        </div>
      ))}
    </div>
  </section>
);

export default Brands;
