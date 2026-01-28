import { useEffect } from "react";

const LegalServiceSchema = () => {
  useEffect(() => {
    const legalServiceSchema = {
      "@context": "https://schema.org",
      "@type": "LegalService",
      "@id": "https://cantarelliadvocacia.com.br/#organization",
      name: "Cantarelli Advocacia",
      alternateName: "Thiago Cantarelli Sociedade Individual de Advocacia",
      description:
        "Cantarelli Advocacia é um escritório especializado em Direito Previdenciário com mais de 17 anos de experiência em Recife/PE. Oferecemos serviços de planejamento previdenciário, aposentadorias, revisões de benefícios, BPC/LOAS e defesa contra o INSS.",
      url: "https://cantarelliadvocacia.com.br",
      logo: {
        "@type": "ImageObject",
        url: "https://cantarelliadvocacia.com.br/logo.png",
        width: 512,
        height: 512,
      },
      image: "https://cantarelliadvocacia.com.br/logo.png",
      foundingDate: "2008-04",
      founder: [
        {
          "@type": "Person",
          name: "Dr. Thiago Cantarelli",
          jobTitle: "Advogado Previdenciário",
          description:
            "Fundador da Cantarelli Advocacia, referência em Direito Previdenciário e Planejamento de Aposentadorias Programáveis. OAB/PE 28.165.",
          sameAs: ["https://www.instagram.com/cantarelliadvprev"],
        },
        {
          "@type": "Person",
          name: "Dra. Izabela Farias",
          jobTitle: "Advogada Previdenciária",
          description:
            "Diretora de Operações da Cantarelli Advocacia, especialista em Direito Previdenciário com ampla experiência em análise de benefícios e revisões. OAB/PE 42.389.",
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Estrada dos Remédios, 2115",
        addressLocality: "Recife",
        addressRegion: "PE",
        postalCode: "50720-715",
        addressCountry: "BR",
        neighborhood: "Madalena",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -8.0631,
        longitude: -34.9131,
      },
      telephone: "+55-81-3049-3799",
      priceRange: "$$",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
          opens: "08:30",
          closes: "17:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Friday",
          opens: "08:30",
          closes: "12:00",
        },
      ],
      areaServed: [
        {
          "@type": "City",
          name: "Recife",
          containedInPlace: {
            "@type": "State",
            name: "Pernambuco",
          },
        },
        {
          "@type": "State",
          name: "Pernambuco",
        },
        {
          "@type": "Country",
          name: "Brasil",
        },
      ],
      knowsAbout: [
        "Direito Previdenciário",
        "Aposentadoria",
        "Aposentadoria por Idade",
        "Aposentadoria por Tempo de Contribuição",
        "Aposentadoria por Invalidez",
        "Aposentadoria Especial",
        "BPC LOAS",
        "BPC para Autistas",
        "Planejamento Previdenciário",
        "Revisão da Vida Toda",
        "Revisão de Benefícios INSS",
        "Pensão por Morte",
        "Auxílio-Doença",
        "Auxílio-Acidente",
        "Auxílio-Acidente para Bancários",
        "Auxílio-Acidente para Motociclistas",
        "LER/DORT em Bancários",
        "Síndrome de Burnout Ocupacional",
        "Nexo Concausal",
        "CID-11 QD85 Burnout",
        "Metas Abusivas Bancários",
        "Salário-Maternidade",
        "RPPS - Regime Próprio de Previdência Social",
        "Isenção de Imposto de Renda para Aposentados",
        "Judicialização contra o INSS",
        "Mandado de Segurança Previdenciário",
        "Lei 8.213/91",
        "Lei 8.212/91",
        "Decreto 3.048/99",
        "EC 103/2019 - Reforma da Previdência",
        "Previdência Social para Bancários",
        "Doenças Ocupacionais INSS",
      ],
      serviceType: [
        "Planejamento Previdenciário",
        "Aposentadoria por Idade",
        "Aposentadoria por Tempo de Contribuição",
        "Aposentadoria por Invalidez",
        "Aposentadoria Especial",
        "BPC/LOAS",
        "BPC Autista",
        "Pensão por Morte",
        "Auxílio-Doença",
        "Auxílio-Acidente",
        "Auxílio-Acidente para Bancários",
        "Auxílio-Acidente para Motociclistas",
        "LER/DORT Ocupacional",
        "Burnout Bancário",
        "Revisão de Benefícios",
        "Isenção de Imposto de Renda",
        "Judicialização contra o INSS",
        "Mandado de Segurança",
        "RPPS - Regime Próprio",
        "Diagnóstico Previdenciário",
        "Salário-Maternidade",
        "Auxílio-Reclusão",
        "ROI Previdenciário",
        "Método Cantarelli de Aposentadoria",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços de Direito Previdenciário",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Planejamento Previdenciário - Método Cantarelli",
              description:
                "Metodologia exclusiva em 3 pilares: Auditoria do CNIS, Simulação de Regras de Transição e Cálculo do ROI Previdenciário para maximizar o valor da aposentadoria.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Auxílio-Acidente para Bancários",
              description:
                "Benefício permanente de 50% do salário para bancários afastados por LER/DORT, Burnout (CID-11 QD85) e doenças ocupacionais causadas por metas abusivas.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Auxílio-Acidente para Motociclistas",
              description:
                "Indenização vitalícia para motociclistas e entregadores de aplicativo que sofreram acidentes com sequelas permanentes.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "BPC para Autistas",
              description:
                "Benefício assistencial para pessoas com Transtorno do Espectro Autista.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Aposentadoria por Invalidez",
              description:
                "Benefício para quem está permanentemente incapacitado para o trabalho.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Revisão da Vida Toda",
              description:
                "Revisão que considera todas as contribuições anteriores a julho de 1994 para recálculo do benefício.",
            },
          },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "3100",
        reviewCount: "2900",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+55-81-3049-3799",
          contactType: "customer service",
          areaServed: "BR",
          availableLanguage: "Portuguese",
        },
        {
          "@type": "ContactPoint",
          telephone: "+55-81-99544-1368",
          contactType: "sales",
          areaServed: "BR",
          availableLanguage: "Portuguese",
          contactOption: "TollFree",
        },
      ],
      sameAs: [
        "https://www.instagram.com/cantarelliadvprev",
        "https://www.youtube.com/@cantarelliadvprev",
        "https://www.tiktok.com/@cantarelliadvprev",
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "schema-legal-service-enhanced";
    script.text = JSON.stringify(legalServiceSchema);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById(
        "schema-legal-service-enhanced"
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null;
};

export default LegalServiceSchema;
