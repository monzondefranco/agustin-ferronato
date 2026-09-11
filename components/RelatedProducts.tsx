import { useTranslations } from "next-intl";
import Placeholder from "./Placeholder";

const productKeys = ["skincare", "spf", "serum", "kit"] as const;

export default function RelatedProducts() {
  const t = useTranslations("RelatedProducts");

  return (
    <section aria-labelledby="productos-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="productos-title" className="section-title" style={{ fontSize: 28 }}>
            {t("title")}
          </h2>
        </div>
        <div className="related">
          {productKeys.map((key) => {
            const name = t(`items.${key}`);
            return (
              <div className="related-card" key={key}>
                <Placeholder label={name} />
                <div className="rname">{name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
