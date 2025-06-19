import React, { useEffect, useRef } from 'react';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const whatsappUrl =
    'https://wa.me/51994733630?text=quiero%20un%20gas%20porfavor';

  useEffect(() => {
    const hero = heroRef.current;
    if (hero) {
      hero.classList.add('hero--visible');
    }
  }, []);

  return (
    <section className="hero">
      <video
        className="hero__video-bg"
        src="/video-mainm.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="hero__content" ref={heroRef}>
        <h1 className="hero__title">¡Gas confiable para tu hogar y empresa!</h1>
        <p className="hero__subtitle">Entrega rápida, segura y al mejor precio en todo el país.</p>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{position: 'relative', display: 'inline-block'}}>
          <span className="hero__cta__rainbow"></span>
          <button className="hero__cta">Pedir ahora</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
