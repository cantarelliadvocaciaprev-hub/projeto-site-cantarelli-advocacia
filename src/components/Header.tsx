import { useState, useEffect } from "react";
import { Menu, X, Users, Briefcase, ClipboardList, MessageSquare, HelpCircle, Phone, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import logo from "@/assets/logo-transparent.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (!isHomePage) {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navigateToPage = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const menuItems = [
    { 
      label: "Quem Somos", 
      id: "about", 
      type: "section",
      icon: Users,
      preview: "17+ anos de experiência em Direito Previdenciário com atendimento humanizado"
    },
    { 
      label: "Áreas de Atuação", 
      id: "services", 
      type: "section",
      icon: Briefcase,
      preview: "Aposentadorias, BPC/LOAS, Pensões, Revisões e mais"
    },
    { 
      label: "Planejamento", 
      id: "planning", 
      type: "section",
      icon: ClipboardList,
      preview: "Planejamento previdenciário personalizado para seu futuro"
    },
    { 
      label: "Depoimentos", 
      id: "testimonials", 
      type: "section",
      icon: MessageSquare,
      preview: "Veja o que nossos clientes dizem sobre nosso trabalho"
    },
    { 
      label: "FAQ", 
      id: "faq", 
      type: "section",
      icon: HelpCircle,
      preview: "Respostas para as dúvidas mais frequentes"
    },
    { 
      label: "Contato", 
      id: "contact", 
      type: "section",
      icon: Phone,
      preview: "Entre em contato conosco pelo WhatsApp ou formulário"
    },
    { 
      label: "Trabalhe Conosco", 
      id: "/trabalhe-conosco", 
      type: "page",
      icon: UserPlus,
      preview: "Faça parte da nossa equipe de especialistas"
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2"
          >
            <img
              src={logo}
              alt="Cantarelli Advocacia"
              className="h-10 w-auto"
            />
          </button>

          {/* Desktop Menu */}
          <ul className="hidden xl:flex items-center justify-center gap-0.5 flex-wrap">
            {menuItems.map((item, index) => (
              <li key={item.id} className="flex items-center">
                <HoverCard openDelay={200} closeDelay={100}>
                  <HoverCardTrigger asChild>
                    <button
                      onClick={() =>
                        item.type === "page"
                          ? navigateToPage(item.id)
                          : scrollToSection(item.id)
                      }
                      className="text-foreground hover:text-primary transition-colors font-body text-xs xl:text-sm px-2 xl:px-3 py-1 whitespace-nowrap"
                    >
                      {item.label}
                    </button>
                  </HoverCardTrigger>
                  <HoverCardContent 
                    className="w-64 bg-card border-primary/30 shadow-lg z-50"
                    sideOffset={8}
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-primary/10">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-display font-semibold text-foreground text-sm mb-1">
                          {item.label}
                        </h4>
                        <p className="text-muted-foreground text-xs font-body leading-relaxed">
                          {item.preview}
                        </p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                {index < menuItems.length - 1 && (
                  <span className="w-px h-4 bg-primary/40" aria-hidden="true" />
                )}
              </li>
            ))}
          </ul>

          <div className="hidden xl:block">
            <Button
              onClick={() =>
                window.open(
                  "https://wa.me/5581995441368?text=Olá,%20estava%20no%20site%20da%20Cantarelli%20e%20gostaria%20de%20um%20atendimento.",
                  "_blank"
                )
              }
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm"
            >
              Fale com nossa equipe
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden mt-4 pb-4 animate-fade-in">
            <ul className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() =>
                      item.type === "page"
                        ? navigateToPage(item.id)
                        : scrollToSection(item.id)
                    }
                    className="block w-full text-left text-foreground hover:text-primary transition-colors font-body"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <Button
                  onClick={() =>
                    window.open(
                      "https://wa.me/5581995441368?text=Olá,%20estava%20no%20site%20da%20Cantarelli%20e%20gostaria%20de%20um%20atendimento.",
                      "_blank"
                    )
                  }
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Agende seu atendimento
                </Button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;