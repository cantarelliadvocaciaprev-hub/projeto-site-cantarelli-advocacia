import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Planning from "@/components/Planning";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SecurityShieldButton from "@/components/SecurityShieldButton";
import SkipLinks from "@/components/SkipLinks";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SchemaMarkup from "@/components/SchemaMarkup";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SchemaMarkup type="legalService" />
      <SkipLinks />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Services />
        <Planning />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <SecurityShieldButton />
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
