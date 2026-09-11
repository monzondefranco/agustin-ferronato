export const siteConfig = {
  name: "Agustín Ferronato",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.agustinferronato.com",
  phones: {
    clinica: "+54 9 11 0000-0000",
    turnos: "+54 9 11 0000-0000",
    formacion: "+54 9 11 0000-0000",
  },
  social: {
    instagramClinica: "https://instagram.com/",
    instagramFormacion: "https://instagram.com/",
  },
} as const;
