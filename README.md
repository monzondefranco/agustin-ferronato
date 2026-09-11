# Agustín Ferronato — Medicina Estética y Formación

Sitio institucional construido con Next.js (App Router) y TypeScript, a partir del diseño de referencia en `index (1).html`.

## Stack

- Next.js 16 (App Router, Turbopack)
- TypeScript
- CSS plano (variables CSS, sin frameworks de utilidades)
- `next/font` para Jost, Inter y Cormorant Garamond
- `next-intl` para internacionalización (ES/EN)

## Idiomas

El español es el idioma base (rutas sin prefijo, ej. `/`) y el inglés vive bajo `/en` (`localePrefix: "as-needed"`). El botón de idioma en el nav (`components/LanguageSwitcher.tsx`) alterna entre ambos.

- `i18n/routing.ts`: locales soportados (`es`, `en`) y locale por defecto
- `i18n/navigation.ts`: `Link`/`redirect`/`usePathname`/`useRouter` locale-aware
- `i18n/request.ts`: carga de mensajes por request
- `proxy.ts`: enrutamiento de locale (antes `middleware.ts`, renombrado por la convención de Next 16)
- `messages/es.json` / `messages/en.json`: diccionarios de todo el copy del sitio

Para agregar contenido nuevo: agregá la clave en **ambos** archivos de `messages/` y consumila con `useTranslations` (funciona tanto en Server como en Client Components).

## SEO

- `app/[locale]/layout.tsx`: metadata localizada (title template, description, Open Graph, Twitter Card, robots, canonical + `alternates.languages` con hreflang) y JSON-LD `MedicalBusiness`
- `app/[locale]/page.tsx`: arma el contenido de Formación y el JSON-LD `FAQPage` (rich results) a partir de los mensajes traducidos
- `app/robots.ts`: genera `/robots.txt`
- `app/sitemap.ts`: genera `/sitemap.xml` con alternates de idioma
- `app/manifest.ts`: genera `/manifest.webmanifest`
- HTML semántico (`section`, `nav`, `footer`, `figure`/`blockquote` en testimonios) y `alt`/`aria-label` en imágenes y bloques placeholder

Configurá la URL pública real del sitio en `NEXT_PUBLIC_SITE_URL` (ver `.env.example`) antes de desplegar — de esto dependen las URLs canónicas, el sitemap y Open Graph.

## Desarrollo

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000) (español) o [http://localhost:3000/en](http://localhost:3000/en) (inglés).

## Contenido pendiente

El diseño original usa bloques placeholder (`Placeholder.tsx`, clase `.ph`) donde van fotos/video reales — ya se agregaron `full-face.png` y `rinoperfeccion.png` en `public/` para "Armonización facial" y "Rinomodelación". El resto de las fotos, los textos de tratamientos, módulos de formación, testimonios, sedes y teléfonos en `lib/site-config.ts` y en `messages/*.json` son de ejemplo y deben reemplazarse por el contenido real del consultorio (en ambos idiomas).

## Build

```bash
npm run build
npm run start
```
