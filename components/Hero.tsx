import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");
  const tCommon = useTranslations("Common");

  return (
    <section className="hero" aria-label={t("ariaLabel")}>
      <video
        className="hero-media hero-media-mobile"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
      >
        <source src="/hero-section/hero-video-mobile.mp4" type="video/mp4" />
      </video>
      <Image
        src="/hero-section/hero-section-imagen.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero-media hero-media-desktop"
        style={{ objectFit: "cover" }}
      />
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
