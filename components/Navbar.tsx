"use client";

import { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSelector } from "./LanguageSelector";
import { CtaButton } from "./CtaButton";
import { useI18n } from "@/lib/i18n-context";
import { Locale } from "@/lib/i18n";

export function Navbar() {
  const { t } = useI18n();
  const params = useParams();
  const locale = params.locale as Locale;
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: t("navbar.home") as string, href: "#" },
    { label: t("navbar.services") as string, href: "#services" },
    { label: t("navbar.gallery") as string, href: "#gallery" },
    { label: t("navbar.contact") as string, href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary-700 bg-primary-800 backdrop-blur-md dark:border-primary-900 dark:bg-primary-900/95">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center">
          <Image
            src="/images/header.png"
            alt="Toldo Lux"
            width={140}
            height={50}
            className="h-auto w-32"
            priority
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-primary-100 transition-colors hover:text-accent-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSelector currentLocale={locale} />
          <ThemeToggle />
          <CtaButton>{t("navbar.cta") as string}</CtaButton>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? (
            <X className="h-6 w-6 text-primary-100" />
          ) : (
            <Menu className="h-6 w-6 text-primary-100" />
          )}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-primary-700 bg-primary-800 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-base font-medium text-primary-100"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center justify-between pt-4">
              <LanguageSelector currentLocale={locale} />
              <ThemeToggle />
            </div>
            <CtaButton className="w-full">{t("navbar.cta") as string}</CtaButton>
          </div>
        </div>
      )}
    </header>
  );
}
