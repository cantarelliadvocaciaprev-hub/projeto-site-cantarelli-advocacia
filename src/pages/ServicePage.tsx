import { Link, useLocation } from "react-router-dom";
import servicePages from "@/data/servicePages.json";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import LegalServiceSchema from "@/components/schemas/LegalServiceSchema";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { openWhatsApp } from "@/lib/whatsappTracking";
import officeImage from "@/assets/office-building.jpg?format=webp&quality=78";

export default function ServicePage() {
  const { pathname } = useLocation();
  const page = servicePages.find((item) => `/${item.slug}` === pathname);
  if (!page) return null;
  const canonical = `https://cantarelliadvocacia.com.br/${page.slug}`;
  return <div className="min-h-screen bg-background">
    <SEO title={page.title} description={page.description} canonical={canonical} />
    <LegalServiceSchema />
    <Header />
    <main id="main-content" className="pt-28 pb-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <Breadcrumb items={[{ label: page.title, href: `/${page.slug}` }]} />
        <h1 className="text-3xl md:text-5xl font-display font-bold mt-8 mb-6 leading-tight">{page.title}</h1>
        <p className="text-lg text-muted-foreground mb-6">{page.description}</p>
        <Button onClick={() => openWhatsApp("pagina-contato", `Olá, li a página ${page.title} (${pathname}) e gostaria de atendimento.`)}>Fale com especialista</Button>
        <img src={officeImage} width={1600} height={1066} loading="lazy" decoding="async" alt="Fachada do escritório Cantarelli Advocacia na Madalena, Recife" className="w-full h-64 md:h-96 object-cover rounded-lg my-8" />
        {page.sections.map((section) => <section key={section.heading} className="py-5">
          <h2 className="text-2xl font-display font-bold mb-4">{section.heading}</h2>
          <p className="text-base md:text-lg leading-relaxed text-foreground/90">{section.text}</p>
        </section>)}
        <section className="py-8 border-t border-border">
          <h2 className="text-2xl font-bold mb-5">Perguntas frequentes</h2>
          {page.faq.map((faq) => <details key={faq.question} className="border-b border-border py-4">
            <summary className="cursor-pointer min-h-11 font-semibold">{faq.question}</summary>
            <p className="py-3 text-muted-foreground leading-relaxed">{faq.answer}</p>
          </details>)}
        </section>
        <section className="py-6">
          <h2 className="text-xl font-bold mb-4">Fontes oficiais</h2>
          <ul className="space-y-3">{page.sources.map((url, index) => <li key={url}><a href={url} target="_blank" rel="noopener noreferrer" className="text-primary underline break-words">Base legal e fonte oficial {index + 1}</a></li>)}</ul>
        </section>
        <nav aria-label="Serviços e atendimento" className="border-t border-border py-8">
          <h2 className="text-xl font-bold mb-4">Serviços e atendimento</h2>
          <div className="flex flex-wrap gap-4">{servicePages.filter((item) => item.slug !== page.slug).map((item) => <Link key={item.slug} to={`/${item.slug}`} className="text-primary underline py-2">{item.title}</Link>)}</div>
          <div className="flex flex-wrap gap-6 mt-6"><Link to="/blog" className="text-primary underline py-2">Artigos do blog</Link><Link to="/contato" className="text-primary underline py-2">Contato e como chegar</Link></div>
        </nav>
      </div>
    </main>
    <Footer /><WhatsAppButton />
  </div>;
}