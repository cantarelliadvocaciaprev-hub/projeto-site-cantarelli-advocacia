import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
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
    { label: "Início", id: "home", type: "section" },
    { label: "Quem Somos", id: "about", type: "section" },
    { label: "Áreas de Atuação", id: "services", type: "section" },
    { label: "Planejamento", id: "planning", type: "section" },
    { label: "Depoimentos", id: "testimonials", type: "section" },
    { label: "FAQ", id: "faq", type: "section" },
    { label: "Contato", id: "contact", type: "section" },
    { label: "Trabalhe Conosco", id: "/trabalhe-conosco", type: "page" },
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
          <ul className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() =>
                    item.type === "page"
                      ? navigateToPage(item.id)
                      : scrollToSection(item.id)
                  }
                  className="text-foreground hover:text-primary transition-colors font-body text-sm"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button
              onClick={() =>
                window.open(
                  "https://wa.me/5581995441368?text=Olá,%20estava%20no%20site%20da%20Cantarelli%20e%20gostaria%20de%20um%20atendimento.",
                  "_blank"
                )
              }
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Fale com nossa equipe
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-in">
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