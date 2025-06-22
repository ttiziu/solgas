import tarjetaCredito from '../assets/svg/tarjeta-de-credito.svg';

interface MediosPagoInfoProps {
  className?: string;
}

export default function MediosPagoInfo({ className }: MediosPagoInfoProps) {
  return (
    <div className={`medios-pago-info-card${className ? ' ' + className : ''}`}>
      <div className="icono-tarjeta-credito-bg">
        <img src={tarjetaCredito} alt="Tarjeta de crédito" className="icono-tarjeta-credito" />
      </div>
      <span className="medios-pago-texto">Aceptamos todos los medios de pago y todas las tarjetas</span>
    </div>
  );
}
