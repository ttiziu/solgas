import { useState } from 'react';
import yape from '../assets/svg/yape.svg';
import plin from '../assets/svg/plin.svg';
import bcp from '../assets/images/bcp-icono-logo.webp';
import bbva from '../assets/images/bbva-icono-logo.webp';
import '../styles/MetodosPago.css';
import MediosPagoInfo from './MediosPagoInfo';

type MetodoPago = {
  icon: string;
  nombre: string;
  alt: string;
  cuenta: string | { cuenta: string; cci: string };
};

const metodos: MetodoPago[] = [
  { icon: bcp, nombre: 'Inversiones GDH', alt: 'BCP', cuenta: { cuenta: '194-9920324-0-91', cci: '002-19400992032409198' } },
  { icon: bbva, nombre: 'Hugo Visalot', alt: 'BBVA', cuenta: { cuenta: '0011-0123-4567890123', cci: '002-01100123456789012319' } },
  { icon: yape, nombre: 'Inversiones GDH', alt: 'Yape', cuenta: 'Cel: 994 733 630' },
  { icon: plin, nombre: 'Hugo Visalot', alt: 'Plin', cuenta: 'Cel: 953 520 432' },
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
          <div
            className={
              'metodo-pago-minimal-card' +
              (m.alt === 'BCP' ? ' bcp' : '') +
              (m.alt === 'BBVA' ? ' bbva' : '') +
              (m.alt === 'Yape' ? ' yape' : '') +
              (m.alt === 'Plin' ? ' plin' : '')
            }
            key={idx}
          >
            <div className="metodo-pago-minimal-icon-wrapper">
              <img
                src={m.icon}
                alt={m.alt}
                className={
                  'metodo-pago-minimal-icon' +
                  (m.alt === 'BCP' || m.alt === 'BBVA' ? ' banco' : '')
                }
              />
            </div>
            <div className="metodo-pago-minimal-info">
              <span className="metodo-pago-minimal-nombre">{m.nombre}</span>
              <span className="metodo-pago-minimal-cuenta">
                {m.cuenta && (
                  <>
                    {(m.alt === 'BCP' || m.alt === 'BBVA') && typeof m.cuenta !== 'string' ? (
                      <div className="bcp-cuentas-flex">
                        <div className="bcp-cuenta-item">
                          <span className="bcp-label">Cuenta:</span>
                          <span className="bcp-num">{m.cuenta.cuenta}</span>
                          <button
                            className="copy-btn"
                            aria-label={`Copiar cuenta ${m.alt}`}
                            onClick={() => typeof m.cuenta !== 'string' ? handleCopy(m.cuenta.cuenta, idx) : undefined}
                            tabIndex={0}
                          >
                            <CopyIcon copied={copiedIdx === idx} />
                          </button>
                        </div>
                        <div className="bcp-cuenta-item">
                          <span className="bcp-label">CCI:</span>
                          <span className="bcp-num">{m.cuenta.cci}</span>
                          <button
                            className="copy-btn"
                            aria-label={`Copiar CCI ${m.alt}`}
                            onClick={() => typeof m.cuenta !== 'string' ? handleCopy(m.cuenta.cci, idx + 100) : undefined}
                            tabIndex={0}
                          >
                            <CopyIcon copied={copiedIdx === idx + 100} />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="bcp-cuentas-flex">
                        <div className="bcp-cuenta-item">
                          <span className="bcp-label">Cel:</span>
                          <span className="bcp-num">{typeof m.cuenta === 'string' ? m.cuenta.replace('Cel: ', '') : ''}</span>
                          {typeof m.cuenta === 'string' && (
                            <button
                              className="copy-btn"
                              aria-label="Copiar celular"
                              onClick={() => typeof m.cuenta === 'string' ? handleCopy(m.cuenta.replace(/.*?:\s*/, ''), idx) : undefined}
                              tabIndex={0}
                            >
                              <CopyIcon copied={copiedIdx === idx} />
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
      <MediosPagoInfo className="medios-pago-info-separado" />
    </section>
  );
}
