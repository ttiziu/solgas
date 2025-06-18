import React from "react";
import "../styles/Footer.css";
import solgasLogo from "/icono-solgas-color.png";
import facebookIcon from "../assets/svg/facebook.svg";
import instagramIcon from "../assets/svg/instagram.svg";
import twitterIcon from "../assets/svg/twitter-alt.svg";
import youtubeIcon from "../assets/svg/youtube.svg";
import pinterestIcon from "../assets/svg/pinterest.svg"

const footerLinks = [
  {
    title: "Producto",
    links: ["Comprar", "Seguridad", "Soporte", "Solicitar para empresa"],
  },
  {
    title: "Recursos",
    links: ["Blog", "Guías", "Preguntas frecuentes", "Contacto"],
  },
  {
    title: "Compañía",
    links: ["Sobre Solgas", "Términos", "Privacidad", "Trabaja con nosotros"],
  },
];

const socialLinks = [
  { icon: facebookIcon, label: "Facebook", url: "#" },
  { icon: instagramIcon, label: "Instagram", url: "#" },
  { icon: twitterIcon, label: "Twitter", url: "#" },
  { icon: youtubeIcon, label: "YouTube", url: "#" },
  { icon: pinterestIcon, label: "Pinterest", url: "#" },
];

const Footer: React.FC = () => {
  return (
    <footer className="footer-apple" style={{ background: '#224161' }}>
      <div className="footer-capsule">
        <div className="footer-content">
          <div className="footer-logo-row">
            <img src={solgasLogo} alt="Solgas logo" className="footer-logo" />
          </div>
          <div className="footer-links-row">
            {footerLinks.map((col) => (
              <div className="footer-col" key={col.title}>
                <div className="footer-col-title">{col.title}</div>
                {col.links.map((link) => (
                  <div className="footer-link" key={link}>
                    {link}
                  </div>
                ))}
              </div>
            ))}
            <div className="footer-col">
              <div className="footer-col-title">Redes</div>
              <div className="footer-socials">
                {socialLinks.map((social) => (
                  <a
                    href={social.url}
                    key={social.label}
                    className="footer-social-link"
                    aria-label={social.label}
                  >
                    <img src={social.icon} alt={social.label} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="footer-bottom-row">
            <span className="footer-copyright">© Solgas 2025</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
