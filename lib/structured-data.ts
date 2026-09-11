import { siteConfig } from "./site-config";

export function getMedicalBusinessJsonLd(description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: siteConfig.name,
    url: siteConfig.url,
    description,
    telephone: siteConfig.phones.clinica,
    priceRange: "$$$",
    medicalSpecialty: "Cosmetic",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ciudad Autónoma de Buenos Aires",
      addressCountry: "AR",
    },
    founder: {
      "@type": "Physician",
      name: siteConfig.name,
      medicalSpecialty: "Cosmetic",
      description,
    },
    sameAs: [siteConfig.social.instagramClinica, siteConfig.social.instagramFormacion],
  };
}

export type JsonLdFaq = {
  question: string;
  answer: string[];
};

export function getFaqJsonLd(faqs: JsonLdFaq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer.join(" "),
      },
    })),
  };
}
