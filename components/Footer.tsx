import { useTranslations } from "next-intl";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  const t = useTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer id="contacto">
      <div className="wrap">
        <div className="foot-word" aria-hidden="true">
          Precisión &amp; Arte
        </div>
        <div className="foot-grid">
          <div>
            <div className="logo" style={{ marginBottom: 6 }}>
              {siteConfig.name}
            </div>
            <a className="foot-cta" href="#contacto">
              {t("ctaLabel")}
            </a>
          </div>
          <div>
            <h5>{t("contactsHeading")}</h5>
            <p>
              <b>{t("clinicLabel")}:</b>{" "}
              <a href={`tel:${siteConfig.phones.clinica.replace(/\s/g, "")}`}>
                {siteConfig.phones.clinica}
              </a>
            </p>
            <p>
              <b>{t("turnosLabel")}:</b>{" "}
              <a href={`tel:${siteConfig.phones.turnos.replace(/\s/g, "")}`}>
                {siteConfig.phones.turnos}
              </a>
            </p>
            <p>
              <b>{t("formacionLabel")}:</b>{" "}
              <a href={`tel:${siteConfig.phones.formacion.replace(/\s/g, "")}`}>
                {siteConfig.phones.formacion}
              </a>
            </p>
          </div>
          <div>
            <h5>{t("sedesHeading")}</h5>
            <p>
              <b>{t("sede1Name")}</b>
              <br />
              {t("addressPlaceholder")}
            </p>
            <p>
              <b>{t("sede2Name")}</b>
              <br />
              {t("addressPlaceholder")}
            </p>
          </div>
          <div>
            <h5>{t("socialHeading")}</h5>
            <a href={siteConfig.social.instagramClinica}>{t("socialClinicHandle")}</a>
            <a href={siteConfig.social.instagramFormacion}>{t("socialTrainingHandle")}</a>
          </div>
        </div>
        <div className="foot-bottom">
          {t("copyright", { year, name: siteConfig.name })}
        </div>
      </div>
    </footer>
  );
}
