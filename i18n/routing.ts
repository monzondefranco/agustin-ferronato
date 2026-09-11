import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es", "en"],
  defaultLocale: "es",
  localePrefix: "as-needed",
  // Español es siempre la base en "/": no redirigir según el idioma
  // del navegador (Accept-Language), para evitar contenido inconsistente
  // de cara al usuario y a los crawlers de SEO.
  localeDetection: false,
});
