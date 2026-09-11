import type { ReactNode } from "react";
import { useTranslations } from "next-intl";
import Placeholder from "./Placeholder";

type Block = {
  heading: string;
  items: string[];
};

type ModuleSectionProps = {
  id?: string;
  mediaLabel: string;
  kicker: string;
  title: ReactNode;
  lede: string[];
  blocks: Block[];
  price: { value: string; unit: string };
  reverse?: boolean;
};

export default function ModuleSection({
  id,
  mediaLabel,
  kicker,
  title,
  lede,
  blocks,
  price,
  reverse = false,
}: ModuleSectionProps) {
  const tCommon = useTranslations("Common");

  return (
    <section id={id}>
      <div className="wrap">
        <div className={`module${reverse ? " reverse" : ""}`}>
          <div className="module-media">
            <Placeholder label={mediaLabel} />
          </div>
          <div className="module-copy">
            <div className="kicker">{kicker}</div>
            <h3>{title}</h3>
            {lede.map((paragraph, i) => (
              <p className="lede" key={i}>
                {paragraph}
              </p>
            ))}

            {blocks.map((block) => (
              <div className="module-block" key={block.heading}>
                <h4>{block.heading}</h4>
                <ul>
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="module-price">
              <div>
                <div className="value">{price.value}</div>
                <div className="unit">{price.unit}</div>
              </div>
              <a className="btn-dark" href="#contacto">
                {tCommon("bookCta")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
