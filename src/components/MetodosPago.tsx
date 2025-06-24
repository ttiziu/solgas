import { useState } from 'react';
import yape from '../assets/svg/yape.svg';
import plin from '../assets/svg/plin.svg';
import bcp from '../assets/images/bcp-icono-logo.webp';
import bbva from '../assets/images/bbva-icono-logo.webp';
import '../styles/MetodosPago.css';
import MediosPagoInfo from './MediosPagoInfo';

interface MetodoPago {
  icon: string;
  nombre: string;
  alt: string;
  cuenta: string | { cuenta: string; cci: string };
}

function CopyIcon({ copied }: { copied: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="copy-icon">
      <rect x="6" y="6" width="10" height="10" rx="2" stroke={copied ? '#4caf50' : '#aab2c8'} strokeWidth="2" fill={copied ? '#e8f5e9' : 'none'} />
      <rect x="3" y="3" width="10" height="10" rx="2" stroke={copied ? '#4caf50' : '#cfd8dc'} strokeWidth="2" fill="none" />
      {copied && <path d="M9 12l2 2 4-4" stroke="#4caf50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />}
    </svg>
  );
}

const metodos: MetodoPago[] = [
  { icon: bcp, nombre: 'Inversiones GDH', alt: 'BCP', cuenta: { cuenta: ' 194-9920324-0-91', cci: ' 002-19400992032409198' } },
  { icon: bbva, nombre: 'Hugo Visalot', alt: 'BBVA', cuenta: { cuenta: ' 0011-0123-4567890123', cci: ' 002-01100123456789012319' } },
  { icon: yape, nombre: 'Inversiones GDH', alt: 'Yape', cuenta: ' 994 733 630' },
  { icon: plin, nombre: 'Hugo Visalot', alt: 'Plin', cuenta: ' 953 520 432' },
];

export default function MetodosPago() {
  const [copiedIdx, setCopiedIdx] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(key);
    setTimeout(() => setCopiedIdx(null), 1200);
  };

  return (
    <section className="metodos-pago-section">
      <h2 className="metodos-pago-title">Métodos de Pago</h2>
      <div className="metodos-pago-grid">
        {metodos.map((m, idx) => (
          <div
            className="metodo-pago-minimal-card"
            key={idx}
          >
            <div className="metodo-pago-minimal-icon-wrapper">
              <img
                src={m.icon}
                alt={m.alt}
                className="metodo-pago-minimal-icon"
              />
            </div>
            <div className="metodo-pago-minimal-info">
              <div className="metodo-pago-minimal-nombre" style={{ fontWeight: 600, textAlign: 'center', marginBottom: 8 }}>{m.nombre}</div>
              {/* Datos de cuenta o celular */}
              {typeof m.cuenta === 'string' ? (
                <div className="metodo-pago-minimal-cuenta-row">
                  <span className="metodo-pago-label"><b>Cel:</b></span>
                  <span className="metodo-pago-value">{m.cuenta}</span>
                  <button
                    className="copy-btn"
                    onClick={() => handleCopy(m.cuenta as string, `${idx}-cel`)}
                    type="button"
                    aria-label="Copiar celular"
                  >
                    <CopyIcon copied={copiedIdx === `${idx}-cel`} />
                  </button>
                </div>
              ) : (
                <>
                  <div className="metodo-pago-minimal-cuenta-row">
                    <span className="metodo-pago-label"><b>Cuenta:</b></span>
                    <span className="metodo-pago-value">{(m.cuenta as { cuenta: string; cci: string }).cuenta}</span>
                    <button
                      className="copy-btn"
                      onClick={() => handleCopy((m.cuenta as { cuenta: string; cci: string }).cuenta, `${idx}-cuenta`)}
                      type="button"
                      aria-label="Copiar cuenta"
                    >
                      <CopyIcon copied={copiedIdx === `${idx}-cuenta`} />
                    </button>
                  </div>
                  <div className="metodo-pago-minimal-cuenta-row">
                    <span className="metodo-pago-label"><b>CCI:</b></span>
                    <span className="metodo-pago-value">{(m.cuenta as { cuenta: string; cci: string }).cci}</span>
                    <button
                      className="copy-btn"
                      onClick={() => handleCopy((m.cuenta as { cuenta: string; cci: string }).cci, `${idx}-cci`)}
                      type="button"
                      aria-label="Copiar CCI"
                    >
                      <CopyIcon copied={copiedIdx === `${idx}-cci`} />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      <MediosPagoInfo className="medios-pago-info-separado" />
    </section>
  );
}
