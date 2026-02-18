import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo-digitech.png";

const Footer = () => {
  return (
    <footer id="contato" className="bg-hero-dark border-t border-border/10 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <img src={logo} alt="Digitech" className="h-10 mb-4" />
            <p className="text-hero-dark-foreground/50 text-sm leading-relaxed">
              Consultoria em T.I com soluções completas para sua empresa crescer com tecnologia.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold text-hero-dark-foreground mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              {["Início", "Soluções", "Servidores", "Clientes"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                    className="text-sm text-hero-dark-foreground/50 hover:text-secondary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-hero-dark-foreground mb-4">
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-hero-dark-foreground/50">
                <Mail size={16} className="text-secondary" />
                contato@digitechms.com.br
              </li>
              <li className="flex items-center gap-2 text-sm text-hero-dark-foreground/50">
                <Phone size={16} className="text-secondary" />
                (67) 9999-9999
              </li>
              <li className="flex items-center gap-2 text-sm text-hero-dark-foreground/50">
                <MapPin size={16} className="text-secondary" />
                Mato Grosso do Sul, Brasil
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-hero-dark-foreground/10 text-center">
          <p className="text-xs text-hero-dark-foreground/30">
            © {new Date().getFullYear()} Digitech — Consultoria em T.I. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
