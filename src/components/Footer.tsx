import type { FC } from "react";
import "@/styles/Footer.css";

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
  { icon: "/assets/svg/facebook.svg", label: "Facebook", url: "https://www.facebook.com/profile.php?id=61574092783362" },
  { icon: "/assets/svg/instagram.svg", label: "Instagram", url: "https://www.instagram.com/distribuidorsolgasperu/" },
  { icon: "/assets/svg/twitter-alt.svg", label: "Twitter", url: "#" },
  { icon: "/assets/svg/youtube.svg", label: "YouTube", url: "#" },
  { icon: "/assets/svg/pinterest.svg", label: "Pinterest", url: "#" },
  { icon: "/assets/svg/whatsapp.svg", label: "WhatsApp", url: "https://wa.me/51964691611?text=quiero%20un%20gas%20porfavor" },
];

const Footer: FC = () => {
  return (
    <footer className="footer-apple">
      <div className="footer-content">
        <div className="footer-logo-row">
          <img src="/assets/svg/logo-footer.svg" alt="Solgas logo" className="footer-logo" />
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
