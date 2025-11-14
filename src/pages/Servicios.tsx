import type { FC } from 'react';
import '../styles/Servicios.css';
import WhySolgas from '../components/WhySolgas';
import MetodosPago from '../components/MetodosPago';

const Servicios: FC = () => {
  return (
    <div className="servicios-bg">
      <WhySolgas />
      <MetodosPago />
    </div>
  );
};

export default Servicios;
