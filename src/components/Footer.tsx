import { scrollBehavior } from "@/lib/motion";
import { Instagram, Youtube, User, Facebook, Linkedin } from "lucide-react";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import thiagoImg from "@/assets/team/thiago-cantarelli.jpg";
import izabelaImg from "@/assets/team/izabela-farias.jpg";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: scrollBehavior() });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: scrollBehavior() });
      }
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Logo e descrição */}
          <div className="pb-6 lg:pb-0 lg:pr-6 lg:border-r border-primary/30">
            <img src={logo} alt="Cantarelli Advocacia" className="h-16 w-auto mb-4" />
            <p className="text-muted-foreground font-body text-sm mb-4">
              Especialistas em Direito Previdenciário com mais de 17 anos de experiência.
            </p>
            <p className="text-sm text-muted-foreground font-body">
              Thiago Cantarelli Sociedade Individual de Advocacia
            </p>
            <p className="text-sm text-muted-foreground font-body">
              CNPJ: 26.191.013/0001-89
            </p>
          </div>

          {/* Planejamento Links */}
          <div className="pb-6 lg:pb-0 lg:pr-6 lg:border-r border-primary/30 pt-6 lg:pt-0 border-t lg:border-t-0 border-primary/30">
            <h4 className="font-display font-bold text-primary mb-4">Planejamento</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("planning")}
                  className="text-muted-foreground hover:text-primary font-body text-sm transition-colors text-left"
                >
                  Planejamento Previdenciário
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-muted-foreground hover:text-primary font-body text-sm transition-colors text-left"
                >
                  Auditoria de CNIS
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-muted-foreground hover:text-primary font-body text-sm transition-colors text-left"
                >
                  Aposentadorias Programáveis
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-muted-foreground hover:text-primary font-body text-sm transition-colors text-left"
                >
                  Quem Somos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-muted-foreground hover:text-primary font-body text-sm transition-colors text-left"
                >
                  Perguntas Frequentes
                </button>
              </li>
            </ul>
          </div>

          {/* Benefícios Links */}
          <div className="pb-6 lg:pb-0 lg:pr-6 lg:border-r border-primary/30 pt-6 lg:pt-0 border-t lg:border-t-0 border-primary/30">
            <h4 className="font-display font-bold text-primary mb-4">Benefícios</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("bancarios")}
                  className="text-muted-foreground hover:text-primary font-body text-sm transition-colors text-left"
                >
                  Auxílio-Acidente Bancários
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("bancarios")}
                  className="text-muted-foreground hover:text-primary font-body text-sm transition-colors text-left"
                >
                  Doenças Ocupacionais (Burnout)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-muted-foreground hover:text-primary font-body text-sm transition-colors text-left"
                >
                  BPC/LOAS
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/seguranca")}
                  className="text-muted-foreground hover:text-primary font-body text-sm transition-colors text-left"
                >
                  Segurança
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/trabalhe-conosco")}
                  className="text-muted-foreground hover:text-primary font-body text-sm transition-colors text-left"
                >
                  Trabalhe Conosco
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="pb-6 lg:pb-0 lg:pr-6 lg:border-r border-primary/30 pt-6 lg:pt-0 border-t lg:border-t-0 border-primary/30">
            <h4 className="font-display font-bold text-primary mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-body">
              <li>Estrada dos Remédios, 2115</li>
              <li>Madalena, Recife – PE</li>
              <li>CEP: 50720-715</li>
              <li className="pt-2">(81) 3049-3799</li>
              <li>(81) 99544-1368 / (81) 98611-3970 – Comercial</li>
              <li>(81) 98342-1727 – WhatsApp</li>
              <li>(81) 98392-5828 – WhatsApp</li>
              <li>
                <a href="mailto:contato@cantarelliadvocacia.com.br" className="hover:text-primary">
                  contato@cantarelliadvocacia.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div className="pt-6 lg:pt-0 border-t lg:border-t-0 border-primary/30">
            <h4 className="font-display font-bold text-primary mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/cantarelliadvprev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@cantarelliadvprev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61566747596777"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/cantarelli-advocacia-previdenci%C3%A1ria/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@cantarelliadvprev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
            </div>

            <p className="text-sm text-muted-foreground font-body mt-4">
              Seg–Qui: 08:30–17h<br />
              Sex: 08:30–12h
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground font-body text-sm mb-2">
            © {new Date().getFullYear()} Cantarelli Advocacia. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground/70 font-body text-xs">
            Cuidando de pessoas, protegendo direitos.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
