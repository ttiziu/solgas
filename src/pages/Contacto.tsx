import React, { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import '../styles/Contacto.css';
import inicioIcon from '../assets/svg/inicio.svg';
import llamadaIcon from '../assets/svg/llamada.svg';
import sobreIcon from '../assets/svg/sobre.svg';

// Tipos para el formulario de contacto
type ContactForm = {
  nombre: string;
  email: string;
  mensaje: string;
};

const initialForm: ContactForm = {
  nombre: '',
  email: '',
  mensaje: '',
};

const Contacto: React.FC = () => {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [enviando, setEnviando] = useState<boolean>(false);
  const [enviado, setEnviado] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnviando(true);
    // Simulación de envío (puedes reemplazar por lógica real)
    setTimeout(() => {
      setEnviando(false);
      setEnviado(true);
      setForm(initialForm);
      setTimeout(() => setEnviado(false), 3000);
    }, 1200);
  };

  return (
    <div className="servicios-bg contacto-page-container">
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
        <form className="contacto-form" autoComplete="off" onSubmit={handleSubmit}>
          <div className="contacto-form-row">
            <input
              type="text"
              className="contacto-form-input"
              placeholder="Nombre y apellido"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              className="contacto-form-input"
              placeholder="Correo electrónico"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            className="contacto-form-textarea"
            placeholder="Mensaje"
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
            required
          />
          <button type="submit" className="contacto-form-btn" disabled={enviando}>
            {enviando ? 'Enviando...' : 'ENVIAR'}
          </button>
          {enviado && <div style={{ color: '#2ecc40', marginTop: 12 }}>¡Mensaje enviado!</div>}
        </form>
      </section>
    </div>
  );
};

export default Contacto;
