"use client";

import { ServiceCard } from "@/components/ServiceCard";
import { useI18n } from "@/lib/i18n-context";
import { Sun, Tent, Home } from "lucide-react";

export function Services() {
  const { t } = useI18n();

  const services = [
    {
      icon: <Sun className="h-7 w-7" />,
      title: t("services.awnings.title") as string,
      description: t("services.awnings.description") as string,
    },
    {
      icon: <Tent className="h-7 w-7" />,
      title: t("services.pergolas.title") as string,
      description: t("services.pergolas.description") as string,
    },
    {
      icon: <Home className="h-7 w-7" />,
      title: t("services.solarProtection.title") as string,
      description: t("services.solarProtection.description") as string,
    },
  ];

  return (
    <section id="services" className="bg-primary-50 py-20 dark:bg-primary-900 orange:bg-orange-50/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary-900 dark:text-white sm:text-4xl">
            {t("services.title") as string}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-primary-600 dark:text-primary-200">
            {t("services.subtitle") as string}
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
