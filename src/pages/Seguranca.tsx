import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SkipLinks from "@/components/SkipLinks";
import SEO from "@/components/SEO";
import SecurityModal from "@/components/security/SecurityModal";
import OfficialChannelsBar from "@/components/security/OfficialChannelsBar";
import ContactValidator from "@/components/security/ContactValidator";
import ScamInfoCards from "@/components/security/ScamInfoCards";
import heroBackground from "@/assets/hero-background.jpg";

const Seguranca = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEO
        title="Segurança | Cantarelli Advocacia - Verifique Contatos Oficiais"
        description="Proteja-se contra golpes. Verifique se o contato que você recebeu é realmente da Cantarelli Advocacia. Confira nossos canais oficiais e aprenda a identificar tentativas de fraude."
        keywords="segurança, golpe do falso advogado, fraude advocacia, verificar contato, Cantarelli Advocacia, proteção contra golpes"
        ogTitle="Segurança | Cantarelli Advocacia"
        ogDescription="Verifique contatos oficiais e proteja-se contra golpes. Sua segurança é nossa prioridade."
        canonical="https://cantarelliadvocacia.com.br/seguranca"
      />
      <SkipLinks links={[
        { id: "main-content", label: "Ir para o conteúdo principal" },
        { id: "validator", label: "Ir para verificador de contatos" },
      ]} />
      <SecurityModal />
      <OfficialChannelsBar />
      
      {/* Add padding top to account for OfficialChannelsBar and Header */}
      <div className="pt-10">
        <Header />
      </div>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-24 pb-4">
        <Breadcrumb items={[{ label: "Segurança" }]} />
      </div>

      {/* Hero Section with Contact Validator */}
      <section id="main-content" tabIndex={-1} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-8 pb-16">
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
            className="text-center max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
              <ShieldCheck className="w-10 h-10 text-primary" />
            </div>
            
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Sua Segurança é Nossa Prioridade
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl font-body font-light leading-relaxed">
              Proteja-se contra golpes. Verifique se o contato que recebeu é realmente da Cantarelli Advocacia.
            </p>
          </motion.div>

          <motion.div
            id="validator"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <ContactValidator />
          </motion.div>
        </div>
      </section>

      {/* Scam Information Cards */}
      <ScamInfoCards />

      {/* Additional Security Tips */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-8 text-center">
              Dicas de Segurança
            </h2>

            <div className="space-y-4">
              {[
                "Sempre confirme informações através dos nossos canais oficiais listados no topo desta página.",
                "Desconfie de mensagens urgentes pedindo pagamentos para liberação de valores.",
                "A Cantarelli Advocacia nunca solicita pagamentos antecipados via PIX ou transferência.",
                "Em caso de dúvida, ligue diretamente para o escritório antes de qualquer ação.",
                "Guarde todas as mensagens suspeitas como prova para eventual denúncia.",
              ].map((tip, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-background rounded-lg border border-border"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-display font-bold text-sm">
                    {index + 1}
                  </span>
                  <p className="text-foreground font-body text-sm leading-relaxed pt-1">
                    {tip}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Seguranca;
