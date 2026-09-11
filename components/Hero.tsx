import { useTranslations } from "next-intl";
import Placeholder from "./Placeholder";

export default function Hero() {
  const t = useTranslations("Hero");
  const tCommon = useTranslations("Common");

  return (
    <section className="hero" aria-label={t("ariaLabel")}>
      {/* TODO: reemplazar por <video autoPlay muted loop playsInline src="/hero.mp4" /> cuando haya asset */}
      <Placeholder label={t("videoLabel")} />
      <div className="hero-content">
        <h1>
          {t("titleLine1")}
          <br />
          {t("titleLine2")}
        </h1>
        <p>{t("subtitle")}</p>
        <a className="hero-cta" href="#contacto">
          {tCommon("bookCta")}
        </a>
      </div>
    </section>
  );
}
