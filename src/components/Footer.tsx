import type { FC } from "react";
import "../styles/Footer.css";
import logoFooter from "../assets/svg/logo-footer.svg";
import facebookIcon from "../assets/svg/facebook.svg";
import instagramIcon from "../assets/svg/instagram.svg";
import twitterIcon from "../assets/svg/twitter-alt.svg";
import youtubeIcon from "../assets/svg/youtube.svg";
import pinterestIcon from "../assets/svg/pinterest.svg";
import whatsappIcon from "../assets/svg/whatsapp.svg";

interface FooterLink {
  title: string;
  links: string[];
}

interface SocialLink {
  icon: string;
  label: string;
  url: string;
}

const footerLinks: ReadonlyArray<FooterLink> = [
  {
    title: "Producto",
    links: ["Comprar", "Seguridad", "Solicitar para empresa"],
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

const socialLinks: ReadonlyArray<SocialLink> = [
  { icon: facebookIcon, label: "Facebook", url: "https://www.facebook.com/profile.php?id=61574092783362" },
  { icon: instagramIcon, label: "Instagram", url: "https://www.instagram.com/distribuidorsolgasperu/" },
  { icon: twitterIcon, label: "Twitter", url: "#" },
  { icon: youtubeIcon, label: "YouTube", url: "#" },
  { icon: pinterestIcon, label: "Pinterest", url: "#" },
  { icon: whatsappIcon, label: "WhatsApp", url: "https://wa.me/51994733630?text=quiero%20un%20gas%20porfavor" },
];

const Footer: FC = () => {
  return (
    <footer className="footer-apple">
      <div className="footer-content">
        <div className="footer-logo-row" style={{ marginBottom: 32 }}>
          <img src={logoFooter} alt="Solgas logo" className="footer-logo" />
        </div>
        <div className="footer-links-row">
          {footerLinks.map((col: FooterLink) => (
            <div className="footer-col" key={col.title}>
              <div className="footer-col-title">{col.title}</div>
              {col.links.map((link: string) => (
                <a className="footer-link" key={link} href="#">
                  {link}
                </a>
              ))}
            </div>
          ))}
          <div className="footer-col">
            <div className="footer-col-title">Redes</div>
            <div className="footer-socials">
              {socialLinks.map((social: SocialLink) => (
                <a
                  href={social.url}
                  key={social.label}
                  className="footer-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <img src={social.icon} alt={social.label} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom-row">
          <span className="footer-copyright">
            © {new Date().getFullYear()} Distribuidor Solgas Perú. Todos los derechos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
