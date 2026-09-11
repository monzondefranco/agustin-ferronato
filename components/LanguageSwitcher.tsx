"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const labels: Record<(typeof routing.locales)[number], string> = {
  es: "ES",
  en: "EN",
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations("Nav");

  return (
    <div className="lang-switch" role="group" aria-label={t("languageSwitchGroupLabel")}>
      {routing.locales.map((l, index) => {
        const isCurrent = l === locale;
        return (
          <span key={l} className="lang-switch-item">
            {index > 0 && (
              <span className="lang-switch-sep" aria-hidden="true">
                /
              </span>
            )}
            {isCurrent ? (
              <span className="lang-switch-current" aria-current="true">
                {labels[l]}
              </span>
            ) : (
              <Link
                href="/"
                locale={l}
                className="lang-switch-link"
                aria-label={t(l === "es" ? "switchToEs" : "switchToEn")}
              >
                {labels[l]}
              </Link>
            )}
          </span>
        );
      })}
    </div>
  );
}
