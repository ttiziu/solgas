import React from 'react';
import '../styles/Servicios.css';
import WhySolgas from '../components/WhySolgas';
import MetodosPago from '../components/MetodosPago';

const Servicios: React.FC = () => {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', paddingTop: '2rem' }}>
      <WhySolgas />
      <MetodosPago />
      {/* Aquí puedes agregar más secciones de Servicios si lo deseas */}
    </div>
  );
};

export default Servicios;
