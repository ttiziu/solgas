'use client';

import WhySolgas from '@/components/WhySolgas';
import MetodosPago from '@/components/MetodosPago';
import '@/styles/Servicios.css';

export default function ServiciosPage() {
  return (
    <div className="servicios-bg">
      <WhySolgas />
      <MetodosPago />
    </div>
  );
}

