import React from "react";
import "../styles/Footer.css";
import solgasLogo from "/icono-solgas-color.png";
import facebookIcon from "../assets/svg/facebook.svg";
import instagramIcon from "../assets/svg/instagram.svg";
import twitterIcon from "../assets/svg/twitter-alt.svg";
import youtubeIcon from "../assets/svg/youtube.svg";
import pinterestIcon from "../assets/svg/pinterest.svg";
import whatsappIcon from "../assets/svg/whatsapp.svg";

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
  { icon: facebookIcon, label: "Facebook", url: "https://www.facebook.com/profile.php?id=61574092783362" },
  { icon: instagramIcon, label: "Instagram", url: "https://www.instagram.com/distribuidorsolgasperu/" },
  { icon: twitterIcon, label: "Twitter", url: "#" },
  { icon: youtubeIcon, label: "YouTube", url: "#" },
  { icon: pinterestIcon, label: "Pinterest", url: "#" },
  { icon: whatsappIcon, label: "WhatsApp", url: "https://wa.me/51994733630?text=quiero%20un%20gas%20porfavor" },
];

const Footer: React.FC = () => {
  return (
    <footer className="footer-apple">
      <div className="footer-content">
        <div className="footer-logo-row" style={{ marginBottom: 32 }}>
          <img src={solgasLogo} alt="Solgas logo" className="footer-logo" />
          <span className="footer-brand">SOLGAS</span>
        </div>
        <div className="footer-links-row">
          {footerLinks.map((col) => (
            <div className="footer-col" key={col.title}>
              <div className="footer-col-title">{col.title}</div>
              {col.links.map((link) => (
                <a className="footer-link" key={link} href="#">
                  {link}
                </a>
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
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={social.icon} alt={social.label} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom-row">
          <span className="footer-copyright">
            © {new Date().getFullYear()} Solgas. Todos los derechos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
