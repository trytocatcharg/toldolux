"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { LanguageSelector } from "./LanguageSelector";
import { CtaButton } from "./CtaButton";
import { useI18n } from "@/lib/i18n-context";
import { Locale } from "@/lib/i18n";

export function Navbar() {
  const { t } = useI18n();
  const params = useParams();
  const locale = params.locale as Locale;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileProjectsOpen(false);
  };

  const scrollToContact = () => {
    closeMobileMenu();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  // SAFETY: projects.menu is a JSON array of { slug, title } objects defined identically in every locale file.
  const projectMenu = t("projects.menu") as unknown as {
    slug: string;
    title: string;
  }[];

  const homeHref = `/${locale}/`;

  const linksBeforeProjects = [
    { label: t("navbar.home") as string, href: homeHref },
    { label: t("navbar.products") as string, href: homeHref + "#products" },
    { label: t("navbar.services") as string, href: homeHref + "#services" },
  ];

  const linksAfterProjects = [
    { label: t("navbar.gallery") as string, href: homeHref + "#gallery" },
    { label: t("navbar.contact") as string, href: homeHref + "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary-700 bg-primary-800 backdrop-blur-md dark:border-primary-900 dark:bg-primary-900/95">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href={homeHref}
          className="flex items-center"
          aria-label="Toldo Lux"
        >
          <Image
            src="/images/header-removebg.png"
            alt="Toldo Lux"
            width={140}
            height={50}
            className="h-auto w-16"
            priority
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {linksBeforeProjects.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-primary-100 transition-colors hover:text-accent-400"
            >
              {link.label}
            </a>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setProjectsOpen(true)}
            onMouseLeave={() => setProjectsOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-sm font-medium text-primary-100 transition-colors hover:text-accent-400"
              onClick={() => setProjectsOpen(!projectsOpen)}
              aria-expanded={projectsOpen}
              aria-haspopup="true"
            >
              {t("navbar.projects") as string}
              <ChevronDown
                className={`h-4 w-4 transition-transform ${projectsOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`absolute left-0 top-full pt-2 transition-all duration-200 ${
                projectsOpen ? "visible opacity-100" : "invisible opacity-0"
              }`}
            >
              <div className="w-80 rounded-lg border border-primary-100 bg-white py-2 shadow-xl dark:border-primary-700 dark:bg-primary-900">
                {projectMenu.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/${locale}/proyectos/${item.slug}`}
                    className="block px-4 py-2 text-sm text-primary-800 transition-colors hover:bg-accent-50 hover:text-accent-700 dark:text-primary-100 dark:hover:bg-primary-800"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {linksAfterProjects.map((link) => (
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
          {/* <ThemeToggle /> */}
          <CtaButton onClick={scrollToContact}>
            {t("navbar.cta") as string}
          </CtaButton>
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
            {linksBeforeProjects.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-base font-medium text-primary-100"
                onClick={closeMobileMenu}
              >
                {link.label}
              </a>
            ))}

            <div>
              <button
                className="flex w-full items-center justify-between text-base font-medium text-primary-100"
                onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                aria-expanded={mobileProjectsOpen}
              >
                {t("navbar.projects") as string}
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${mobileProjectsOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileProjectsOpen && (
                <div className="mt-2 flex flex-col gap-1 border-l-2 border-primary-600 pl-3">
                  {projectMenu.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/${locale}/proyectos/${item.slug}`}
                      className="py-1.5 text-sm text-primary-200"
                      onClick={closeMobileMenu}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {linksAfterProjects.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-base font-medium text-primary-100"
                onClick={closeMobileMenu}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center justify-between pt-4">
              <LanguageSelector currentLocale={locale} />
              {/* <ThemeToggle /> */}
            </div>
            <CtaButton className="w-full" onClick={scrollToContact}>
              {t("navbar.cta") as string}
            </CtaButton>
          </div>
        </div>
      )}
    </header>
  );
}
