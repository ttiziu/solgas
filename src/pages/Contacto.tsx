import React from 'react';
import '../styles/Contacto.css';
import inicioIcon from '../assets/svg/inicio.svg';
import llamadaIcon from '../assets/svg/llamada.svg';
import sobreIcon from '../assets/svg/sobre.svg';

const Contacto: React.FC = () => {
  return (
    <div className="servicios-bg" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', paddingTop: '3rem' }}>
      <h2 className="contacto-title">Pedidos y atención al cliente</h2>
      <section className="contacto-pedidos">
        <div className="contacto-pedidos-card">
          <img src={inicioIcon} alt="Hogar" className="contacto-pedidos-icon" />
          <div className="contacto-pedidos-label">Hogar</div>
          <a href="tel:012562940" className="contacto-pedidos-btn">
            <img src={llamadaIcon} alt="Teléfono" className="contacto-pedidos-btn-icon" />
            (01) 256-2940
          </a>
        </div>
      </section>
      <section className="contacto-consulta-adicional">
        <h3 className="contacto-consulta-title">¿Tienes alguna consulta adicional?</h3>
        <p className="contacto-consulta-desc">Escríbenos aquí y te atenderemos.</p>
        <a href="mailto:distribuidor.solgas.pe@gmail.com" className="contacto-consulta-btn">
          <img src={sobreIcon} alt="Correo" className="contacto-consulta-btn-icon" />
          <span>distribuidor.solgas.pe@gmail.com</span>
        </a>
      </section>
      <section className="contacto-form-section">
        <h3 className="contacto-form-title">Formulario de contacto</h3>
        <form className="contacto-form" autoComplete="off">
          <div className="contacto-form-row">
            <input
              type="text"
              className="contacto-form-input"
              placeholder="Nombre y apellido"
              name="nombre"
              required
            />
            <input
              type="email"
              className="contacto-form-input"
              placeholder="Correo electrónico"
              name="email"
              required
            />
          </div>
          <textarea
            className="contacto-form-textarea"
            placeholder="Mensaje"
            name="mensaje"
            required
          />
          <button type="submit" className="contacto-form-btn">ENVIAR</button>
        </form>
      </section>
    </div>
  );
};

export default Contacto;
