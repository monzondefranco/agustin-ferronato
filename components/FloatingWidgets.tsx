import { useTranslations } from "next-intl";
import { siteConfig } from "@/lib/site-config";

const whatsappNumber = siteConfig.phones.clinica.replace(/[^\d]/g, "");
const whatsappHref = `https://wa.me/${whatsappNumber}`;

export default function FloatingWidgets() {
  const t = useTranslations("FloatingWidgets");

  return (
    <>
      <div className="chat-bubble">
        <div className="top">{t("chatTitle")}</div>
        <div className="body">
          <b>{t("assistantName")}</b>
          <span>● {t("onlineLabel")}</span>
          <a className="go" href={whatsappHref} target="_blank" rel="noopener noreferrer">
            {t("whatsappLabel")}
          </a>
        </div>
      </div>
      <a
        className="fab"
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("fabAriaLabel")}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3.1.8.8-3-.2-.3A8 8 0 1 1 12 20Zm4.4-5.9c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1s-.6.8-.7.9-.3.2-.5.1a6.6 6.6 0 0 1-2-1.2 7.3 7.3 0 0 1-1.3-1.7c-.1-.2 0-.4.1-.5l.4-.4c.1-.1.2-.3.2-.4s0-.3 0-.4-.6-1.4-.8-1.9-.4-.4-.5-.4h-.5a.9.9 0 0 0-.7.3 2.7 2.7 0 0 0-.8 2 4.7 4.7 0 0 0 1 2.5 10.7 10.7 0 0 0 4.1 3.6c1.4.6 2 .6 2.3.6.4 0 1.2-.5 1.4-1s.2-.9.1-1c0-.1-.2-.2-.4-.3Z" />
        </svg>
      </a>
    </>
  );
}
