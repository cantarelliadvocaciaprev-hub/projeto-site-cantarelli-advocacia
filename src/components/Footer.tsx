import { Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img src={logo} alt="Cantarelli Advocacia" className="h-16 w-auto mb-4" />
            <p className="text-muted-foreground font-body text-sm mb-4">
              Especialistas em Direito Previdenciário com mais de 17 anos de experiência.
            </p>
            <p className="text-sm text-muted-foreground font-body">
              CNPJ: 26.191.013/0001-89
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-muted-foreground hover:text-primary font-body text-sm transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-muted-foreground hover:text-primary font-body text-sm transition-colors"
                >
                  Quem Somos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-muted-foreground hover:text-primary font-body text-sm transition-colors"
                >
                  Áreas de Atuação
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-muted-foreground hover:text-primary font-body text-sm transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-body">
              <li>Estrada dos Remédios, 2115</li>
              <li>Madalena, Recife – PE</li>
              <li>CEP: 50720-715</li>
              <li className="pt-2">(81) 3049-3799</li>
              <li>(81) 98888-4914 – Comercial</li>
              <li>(81) 98771-8606 – Financeiro</li>
              <li>(81) 99544-1368</li>
              <li>
                <a href="mailto:contato@cantarelliadvocacia.com.br" className="hover:text-primary">
                  contato@cantarelliadvocacia.com.br
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Redes Sociais</h4>
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
                href="https://www.tiktok.com/@cantarelliadvprev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-bold"
                aria-label="TikTok"
              >
                TT
              </a>
            </div>
            <p className="text-sm text-muted-foreground font-body mt-4">
              Seg–Qui: 08:30–17h<br />
              Sex: 08:30–12h
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground font-body text-sm mb-2">
            © {new Date().getFullYear()} Cantarelli Advocacia. Todos os direitos reservados.
          </p>
          <p className="text-foreground font-display italic">
            Cuidando de pessoas, protegendo direitos.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
