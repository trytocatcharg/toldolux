"use client";

import { useI18n } from "@/lib/i18n-context";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const { t } = useI18n();

  const links = [
    { label: t("footer.contact") as string, href: "#" },
    { label: "Servicios", href: "#services" },
    { label: "Galería", href: "#gallery" },
  ];

  return (
    <footer id="contact" className="border-t border-slate-200 bg-white py-12 dark:border-slate-700 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">{t("footer.company") as string}</h3>
            <p className="text-slate-600 dark:text-slate-300">{t("footer.tagline") as string}</p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-slate-900 dark:text-white">{t("footer.contact") as string}</h4>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                {t("footer.address") as string}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                {t("footer.phone") as string}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                {t("footer.email") as string}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-slate-900 dark:text-white">Menú</h4>
            <ul className="space-y-2 text-slate-600 dark:text-slate-300">
              {links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-primary-600 dark:hover:text-primary-400">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-8 text-center text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
          &copy; {new Date().getFullYear()} {t("footer.company") as string}. {t("footer.rights") as string}
        </div>
      </div>
    </footer>
  );
}
