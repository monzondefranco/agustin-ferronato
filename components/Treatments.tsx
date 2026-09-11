import Image from "next/image";
import { useTranslations } from "next-intl";
import Placeholder from "./Placeholder";

type Category = { key: string; image?: string };

const categories: Category[] = [
  { key: "armonizacion", image: "/full-face.png" },
  { key: "rino", image: "/rinoperfeccion.png" },
  { key: "bio" },
  { key: "labial" },
  { key: "skin" },
];

export default function Treatments() {
  const t = useTranslations("Treatments");

  return (
    <section id="tratamientos" aria-labelledby="tratamientos-title">
      <div className="wrap">
        <span className="pill">{t("pill")}</span>
        <div className="section-head">
          <h2 id="tratamientos-title" className="section-title">
            {t("title")}
          </h2>
        </div>
        <div className="card-row">
          {categories.map((category) => {
            const name = t(`categories.${category.key}`);
            return (
              <div className="t-card" key={category.key}>
                {category.image ? (
                  <Image
                    src={category.image}
                    alt={name}
                    fill
                    sizes="300px"
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <Placeholder label={name} />
                )}
                <div className="t-card-label">
                  <div className="name">{name}</div>
                  <a href="#clinica" className="more">
                    ↳ {t("more")}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="dots" aria-hidden="true">
          <span className="active" />
          <span />
          <span />
          <span />
        </div>
      </div>
    </section>
  );
}
