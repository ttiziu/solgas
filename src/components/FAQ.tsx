import React, { useState, useRef, useEffect } from "react";
import "../styles/FAQ.css";

const faqs = [
  {
    question: "¿Cuánto tiempo tarda en llegar un balón después del pedido?",
    answer: "La entrega se realiza en menos de 24 horas, dependiendo de tu ubicación."
  },
  {
    question: "¿Qué medidas de seguridad tienen los balones?",
    answer: "Todos los balones están certificados bajo normas peruanas y tienen válvula segura."
  },
  {
    question: "¿Puedo pedir gas para mi empresa?",
    answer: "Sí, ofrecemos soluciones tanto para hogares como para negocios."
  },
  {
    question: "¿Dónde puedo hacer seguimiento a mi pedido?",
    answer: "Puedes llamar al número de atención o revisar tu correo con el tracking."
  },
  {
    question: "¿Qué formas de pago aceptan?",
    answer: "Aceptamos pagos en efectivo, Yape, Plin y tarjetas."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        setVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className={`faq-section${visible ? " visible" : ""}`}>
      <h2 className="faq-title">Preguntas Frecuentes - FAQ</h2>
      <div className="faq-list">
        {faqs.map((faq, idx) => (
          <div
            className={`faq-item${openIndex === idx ? " open" : ""}`}
            key={idx}
            onClick={() => toggleFAQ(idx)}
          >
            <div className="faq-question">
              {faq.question}
              <span className="faq-toggle">{openIndex === idx ? "−" : "+"}</span>
            </div>
            <div className="faq-answer">
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
