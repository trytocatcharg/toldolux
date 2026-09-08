"use client";

import { CtaButton } from "@/components/CtaButton";
import { useI18n } from "@/lib/i18n-context";

export function Hero() {
  const { t } = useI18n();

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/60 to-primary-800/40" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          {t("hero.headline") as string}
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-100 sm:text-xl">
          {t("hero.subtitle") as string}
        </p>
        <CtaButton
          variant="primary"
          className="px-8 py-4 text-base"
          onClick={scrollToContact}
        >
          {t("hero.cta") as string}
        </CtaButton>
      </div>
    </section>
  );
}
