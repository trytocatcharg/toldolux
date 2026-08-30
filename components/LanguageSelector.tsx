"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, Locale, labels } from "@/lib/i18n";

export function LanguageSelector({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (locale: Locale) => {
    const newPath = pathname.replace(`/${currentLocale}`, `/${locale}`);
    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-1">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => handleChange(locale)}
          aria-label={`Cambiar idioma a ${locale}`}
          className={`rounded px-2 py-1 text-sm font-medium transition-colors ${
            currentLocale === locale
              ? "bg-primary-600 text-white"
              : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          }`}
        >
          {labels[locale]}
        </button>
      ))}
    </div>
  );
}
