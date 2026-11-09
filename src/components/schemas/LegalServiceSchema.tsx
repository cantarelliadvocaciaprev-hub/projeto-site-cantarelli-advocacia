import logo from "@/assets/logo-transparent.png?format=webp&quality=78";
import office from "@/assets/office-building.jpg?format=webp&quality=78";

const absolute = (url: string) => /^https?:/.test(url) ? url : `https://cantarelliadvocacia.com.br${url}`;
export const officeSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": "https://cantarelliadvocacia.com.br/#organization",
  name: "Cantarelli Advocacia",
  alternateName: "Thiago Cantarelli Sociedade Individual de Advocacia",
  url: "https://cantarelliadvocacia.com.br/",
  description: "Escritório de Direito Previdenciário na Madalena, em Recife, com atendimento presencial agendado e remoto.",
  logo: absolute(logo), image: absolute(office),
  telephone: "+558130493799",
  address: { "@type": "PostalAddress", streetAddress: "Estrada dos Remédios, 2115", addressLocality: "Recife", addressRegion: "PE", postalCode: "50720-715", addressCountry: "BR" },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "08:30", closes: "17:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "08:30", closes: "12:00" }
  ],
  areaServed: ["Recife", "Olinda", "Jaboatão dos Guararapes", "Paulista", "Camaragibe"].map(name => ({ "@type": "City", name })),
  founder: { "@type": "Person", name: "Thiago Cantarelli", jobTitle: "Advogado" },
  sameAs: ["https://www.instagram.com/cantarelliadvprev", "https://www.facebook.com/profile.php?id=61566747596777", "https://www.linkedin.com/company/cantarelli-advocacia-previdenci%C3%A1ria/", "https://www.youtube.com/@cantarelliadvprev", "https://www.google.com/maps/search/?api=1&query=Cantarelli+Advocacia+Recife"],
  knowsAbout: ["Aposentadoria", "BPC/LOAS", "Benefícios por incapacidade", "Auxílio-Acidente", "Planejamento Previdenciário", "Pensão por Morte", "Revisão de Benefícios"]
};
export default function LegalServiceSchema() {
  return <script id="schema-legal-service-enhanced" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(officeSchema) }} />;
}
