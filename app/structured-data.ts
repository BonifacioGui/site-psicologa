import { professionalContact, siteUrl } from "./site";

// Uma identidade profissional e uma presença online. Não declarar estabelecimento físico.
export const professionalStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#ana-livia`,
      name: "Ana Lívia Calado da Costa",
      jobTitle: "Psicóloga",
      description: "Psicóloga que oferece psicoterapia online para adolescentes e jovens adultos, com abordagem em Terapia Cognitivo-Comportamental (TCC).",
      url: `${siteUrl}/sobre`,
      image: `${siteUrl}/ana-livia-sobre.jpg`,
      identifier: {
        "@type": "PropertyValue",
        propertyID: "CRP",
        value: "02/34611",
        url: "https://cadastro.cfp.org.br/",
      },
      sameAs: [professionalContact.instagramHref],
      worksFor: { "@id": `${siteUrl}/#atendimento-online` },
    },
    {
      "@type": "OnlineBusiness",
      "@id": `${siteUrl}/#atendimento-online`,
      name: "Ana Lívia Psicologia",
      url: siteUrl,
      logo: `${siteUrl}/favicon-96.png`,
      description: "Atendimento psicológico exclusivamente online para adolescentes e jovens adultos, realizado por Ana Lívia Calado da Costa, psicóloga sediada em Garanhuns, Pernambuco.",
      email: professionalContact.email,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Informações sobre atendimento",
        url: professionalContact.whatsappHref,
        email: professionalContact.email,
        availableLanguage: "pt-BR",
      },
      areaServed: { "@type": "Country", name: "Brasil" },
      founder: { "@id": `${siteUrl}/#ana-livia` },
    },
  ],
};

// Evita que texto inesperado seja interpretado como fechamento da tag <script>.
export const professionalStructuredDataJson = JSON.stringify(professionalStructuredData)
  .replace(/</g, "\\u003c");
