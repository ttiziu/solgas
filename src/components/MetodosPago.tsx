import { useState } from 'react';
import visa from '../assets/svg/visa.svg';
import mastercard from '../assets/svg/mastercard.svg';
import yape from '../assets/svg/yape.svg';
import plin from '../assets/svg/plin.svg';
import '../styles/MetodosPago.css';

const metodos = [
  { icon: visa, nombre: 'Visa', alt: 'Visa', cuenta: 'N° 1234 5678 9012 3456' },
  { icon: mastercard, nombre: 'Mastercard', alt: 'Mastercard', cuenta: 'N° 9876 5432 1098 7654' },
  { icon: yape, nombre: 'Yape', alt: 'Yape', cuenta: 'Cel: 994 733 630 (Inversiones GDH)' },
  { icon: plin, nombre: 'Plin', alt: 'Plin', cuenta: 'Cel: 953 520 432 (Hugo Visalot)' },
];

function CopyIcon({ copied }: { copied: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="copy-icon">
      <rect x="6" y="6" width="10" height="10" rx="2" stroke={copied ? '#4caf50' : '#aab2c8'} strokeWidth="2" fill={copied ? '#e8f5e9' : 'none'} />
      <rect x="3" y="3" width="10" height="10" rx="2" stroke={copied ? '#4caf50' : '#cfd8dc'} strokeWidth="2" fill="none" />
      {copied && <path d="M9 12l2 2 4-4" stroke="#4caf50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />}
    </svg>
  );
}

export default function MetodosPago() {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const handleCopy = (cuenta: string, idx: number) => {
    navigator.clipboard.writeText(cuenta.replace(/.*?:\s*/, ''));
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 1200);
  };

  return (
    <section className="metodos-pago-section">
      <h2 className="metodos-pago-title">Métodos de Pago</h2>
      <div className="metodos-pago-grid">
        {metodos.map((m, idx) => (
          <div className="metodo-pago-minimal-card" key={idx}>
            <img src={m.icon} alt={m.alt} className="metodo-pago-minimal-icon" />
            <div className="metodo-pago-minimal-info">
              <span className="metodo-pago-minimal-nombre">{m.nombre}</span>
              <span className="metodo-pago-minimal-cuenta">
                {m.cuenta}
                <button
                  className="copy-btn"
                  aria-label="Copiar cuenta"
                  onClick={() => handleCopy(m.cuenta, idx)}
                  tabIndex={0}
                >
                  <CopyIcon copied={copiedIdx === idx} />
                </button>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
