"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site-config";
import LanguageSwitcher from "./LanguageSwitcher";

const linkKeys = [
  { href: "#tratamientos", key: "treatments" },
  { href: "#clinica", key: "clinic" },
  { href: "#formacion", key: "training" },
  { href: "#nosotros", key: "about" },
  { href: "#faqs", key: "faq" },
  { href: "#contacto", key: "contact" },
] as const;

export default function Nav() {
  const t = useTranslations("Nav");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(".hero");

    const onScroll = () => {
      const bottom = hero?.getBoundingClientRect().bottom ?? 0;
      setScrolled(bottom <= 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header className={`nav${scrolled ? "" : " nav-transparent"}`}>
      <div className="nav-inner">
        <Link href="/" className="logo" aria-label={siteConfig.name}>
          <span className="logo-full" aria-hidden="true">
            {siteConfig.name}
          </span>
          <span className="logo-short" aria-hidden="true">
            AF
          </span>
        </Link>
        <nav className="menu" aria-label={t("ariaLabel")}>
          {linkKeys.map((link) => (
            <a key={link.href} href={link.href}>
              {t(link.key)}
            </a>
          ))}
        </nav>
        <div className="nav-icons">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
