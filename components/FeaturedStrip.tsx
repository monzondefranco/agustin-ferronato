import Image from "next/image";
import { useTranslations } from "next-intl";
import Placeholder from "./Placeholder";

type FeaturedItem = { key: string; image?: string };

const featured: FeaturedItem[] = [
  { key: "rino", image: "/rinoperfeccion.png" },
  { key: "labial" },
  { key: "menton" },
  { key: "pomulos" },
];

export default function FeaturedStrip() {
  const t = useTranslations("FeaturedStrip");

  return (
    <section aria-labelledby="destacados-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="destacados-title" className="section-title" style={{ fontSize: 22, letterSpacing: ".06em" }}>
            {t("title")}
          </h2>
        </div>
        <div className="strip">
          {featured.map((item) => {
            const name = t(`items.${item.key}`);
            return (
              <a className="strip-card" href="#tratamientos" key={item.key}>
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={name}
                    fill
                    sizes="(max-width: 900px) 50vw, 25vw"
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <Placeholder label={name} />
                )}
                <div className="label">
                  <b>{name}</b>
                  <span>{t("viewTreatment")}</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
