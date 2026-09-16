"use client";

import { useI18n } from "@/lib/i18n-context";
import { Phone, Mail, MapPin } from "lucide-react";
import { InstagramIcon } from "@/components/InstagramIcon";
import { INSTAGRAM_URL } from "@/lib/utils";

export function Footer() {
  const { t, locale } = useI18n();

  const links = [
    { label: t("footer.contact") as string, href: "#contact" },
    { label: "Servicios", href: "#services" },
    { label: "Proyectos", href: "#gallery" },
  ];

  const legalLinks = [
    {
      label: t("footer.privacyPolicy") as string,
      href: `/${locale}/politica-de-privacidad`,
    },
    {
      label: t("footer.legalNotice") as string,
      href: `/${locale}/aviso-legal`,
    },
    {
      label: t("footer.cookiePolicy") as string,
      href: `/${locale}/politica-de-cookies`,
    },
  ];

  return (
    <footer className="border-t border-primary-200 bg-white py-12 dark:border-primary-800 dark:bg-primary-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-2 text-xl font-bold text-primary-900 dark:text-white">
              {t("footer.company") as string}
            </h3>
            <p className="text-primary-600 dark:text-primary-200">
              {t("footer.tagline") as string}
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-primary-900 dark:text-white">
              {t("footer.contact") as string}
            </h4>
            <ul className="space-y-3 text-primary-600 dark:text-primary-200">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent-500 dark:text-accent-400" />
                {t("footer.address") as string}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent-500 dark:text-accent-400" />
                <a
                  href={`tel:${(t("footer.phone1") as string).replace(/\s+/g, "")}`}
                  className="hover:text-accent-500 dark:hover:text-accent-400"
                >
                  {t("footer.phone1") as string}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent-500 dark:text-accent-400" />
                <a
                  href={`tel:${(t("footer.phone2") as string).replace(/\s+/g, "")}`}
                  className="hover:text-accent-500 dark:hover:text-accent-400"
                >
                  {t("footer.phone2") as string}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent-500 dark:text-accent-400" />
                {t("footer.email") as string}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-primary-900 dark:text-white">
              Menú
            </h4>
            <ul className="space-y-2 text-primary-600 dark:text-primary-200">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-accent-500 dark:hover:text-accent-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-primary-900 dark:text-white">
              {t("footer.social") as string}
            </h4>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex items-center gap-2 text-primary-600 transition-colors hover:text-accent-500 dark:text-primary-200 dark:hover:text-accent-400"
            >
              <InstagramIcon className="h-5 w-5 text-accent-500 dark:text-accent-400" />
              Instagram
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-200 pt-8 text-center text-sm text-primary-500 dark:border-primary-800 dark:text-primary-400">
          &copy; {new Date().getFullYear()} {t("footer.company") as string}.{" "}
          {t("footer.rights") as string}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-accent-500 dark:hover:text-accent-400"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
