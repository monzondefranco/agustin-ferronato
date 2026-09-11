import { useTranslations } from "next-intl";

type Testimonial = {
  initial: string;
  name: string;
  quote: string;
};

export default function Testimonials() {
  const t = useTranslations("Testimonials");
  const testimonials = t.raw("items") as Testimonial[];

  return (
    <section className="testi-wrap" aria-labelledby="testimonios-title">
      <div className="wrap">
        <div className="testi-head">
          <h2 id="testimonios-title">{t("heading")}</h2>
        </div>
        <div className="testi-row">
          {testimonials.map((testimonial) => (
            <figure className="testi-card" key={testimonial.name}>
              <div className="testi-top">
                <div className="avatar" aria-hidden="true">
                  {testimonial.initial}
                </div>
                <div className="who">
                  <b>{testimonial.name}</b>
                  <span>{t("patientLabel")}</span>
                </div>
              </div>
              <blockquote style={{ margin: 0 }}>
                <p>&ldquo;{testimonial.quote}&rdquo;</p>
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
