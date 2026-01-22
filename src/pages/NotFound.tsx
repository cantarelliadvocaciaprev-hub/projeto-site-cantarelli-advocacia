import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import heroBackground from "@/assets/hero-background.jpg";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden flex flex-col">
      <SEO
        title="Página não encontrada | Cantarelli Advocacia"
        description="A página que você está procurando não foi encontrada. Volte para a página inicial da Cantarelli Advocacia."
      />
      <Header />

      {/* Hero Section */}
      <section className="relative flex-1 flex items-center justify-center overflow-hidden pt-24 pb-16">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroBackground}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/90" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* 404 Number */}
            <motion.div
              className="mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="font-display text-8xl md:text-9xl font-bold text-primary/20">
                404
              </span>
            </motion.div>

            {/* Icon */}
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Search className="w-8 h-8 text-primary" />
            </motion.div>

            {/* Title */}
            <motion.h1
              className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Página não encontrada
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-muted-foreground text-base md:text-lg font-body font-light leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Desculpe, a página que você está procurando não existe ou foi movida. 
              Verifique o endereço digitado ou retorne à página inicial.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Button
                onClick={() => navigate("/")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-body gap-2"
                size="lg"
              >
                <Home className="w-4 h-4" />
                Ir para o Início
              </Button>
              
              <Button
                onClick={() => navigate(-1)}
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 font-body gap-2"
                size="lg"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar
              </Button>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="mt-12 pt-8 border-t border-border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <p className="text-muted-foreground font-body text-sm mb-4">
                Ou acesse diretamente:
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { label: "Quem Somos", path: "/#about" },
                  { label: "Áreas de Atuação", path: "/#services" },
                  { label: "Contato", path: "/#contact" },
                  { label: "Segurança", path: "/seguranca" },
                  { label: "Trabalhe Conosco", path: "/trabalhe-conosco" },
                ].map((link, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (link.path.startsWith("/#")) {
                        navigate("/");
                        setTimeout(() => {
                          const element = document.getElementById(link.path.replace("/#", ""));
                          element?.scrollIntoView({ behavior: "smooth" });
                        }, 100);
                      } else {
                        navigate(link.path);
                      }
                    }}
                    className="text-primary hover:text-primary/80 font-body text-sm underline underline-offset-4 transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;
