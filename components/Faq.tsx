"use client";

import { useId, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/lib/site-config";

type RawFaq = {
  question: string;
  answer: string[];
};

export default function Faq() {
  const t = useTranslations("Faq");
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  const faqs = useMemo(() => {
    const raw = t.raw("items") as RawFaq[];
    return raw.map((item) => ({
      question: item.question,
      answer: item.answer.map((paragraph) =>
        paragraph.replaceAll("{phone}", siteConfig.phones.turnos),
      ),
    }));
  }, [t]);

  return (
    <section id="faqs" aria-labelledby="faqs-title">
      <div className="wrap">
        <div className="faq-grid">
          <div>
            <span className="pill">{t("pill")}</span>
            <h2 id="faqs-title" className="section-title">
              {t("titleLine1")}
              <br />
              {t("titleLine2")}
            </h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => {
              const open = openIndex === index;
              const panelId = `${baseId}-panel-${index}`;
              const buttonId = `${baseId}-button-${index}`;

              return (
                <div className={`faq-item${open ? " open" : ""}`} key={faq.question}>
                  <h3 style={{ margin: 0 }}>
                    <button
                      type="button"
                      className="faq-question"
                      id={buttonId}
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(open ? null : index)}
                    >
                      {faq.question}
                      <svg
                        className="chev"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        aria-hidden="true"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                  </h3>
                  <div
                    className="faq-answer"
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                  >
                    <div className="faq-answer-inner">
                      {faq.answer.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
