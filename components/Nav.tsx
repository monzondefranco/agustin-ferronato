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

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/" className="logo">
          {siteConfig.name}
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
