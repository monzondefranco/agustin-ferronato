import { useTranslations } from "next-intl";
import Placeholder from "./Placeholder";

export default function About() {
  const t = useTranslations("About");

  return (
    <section id="nosotros" aria-labelledby="nosotros-title">
      <div className="wrap">
        <span className="pill">{t("pill")}</span>
        <div className="about-lead">
          <h2 id="nosotros-title">
            {t("leadStrong")} <span className="muted">{t("leadMuted")}</span>
          </h2>
        </div>

        <div className="about-block">
          <div className="about-media">
            <Placeholder label={t("mediaLabel")} />
          </div>
          <div className="about-copy">
            <p>{t("copyParagraph1")}</p>
            <p>{t("copyParagraph2")}</p>
          </div>
        </div>

        <div className="about-split">
          <div className="label">
            {t.rich("splitLabel", { b: (chunks) => <b>{chunks}</b> })}
          </div>
          <p>{t.rich("splitParagraph", { b: (chunks) => <b>{chunks}</b> })}</p>
        </div>
      </div>
    </section>
  );
}
