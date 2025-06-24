import type { FC } from 'react';
import '../styles/Servicios.css';
import WhySolgas from '../components/WhySolgas';
import MetodosPago from '../components/MetodosPago';

const Servicios: FC = () => {
  return (
    <div className="servicios-bg" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', paddingTop: '2rem' }}>
      <WhySolgas />
      <MetodosPago />
      {/* Aquí puedes agregar más secciones de Servicios si lo deseas */}
    </div>
  );
};

export default Servicios;
