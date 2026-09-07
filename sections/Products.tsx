"use client";

import { ProductCard } from "@/components/ProductCard";
import { useI18n } from "@/lib/i18n-context";

export function Products() {
  const { t } = useI18n();

  const products = [
    {
      image: "/images/products/bioclimaticas.png",
      name: t("products.items.pergolas.name") as string,
      description: t("products.items.pergolas.description") as string,
    },
    {
      image: "/images/products/toldo-brazo-art.jpeg",
      name: t("products.items.brazoArticulado.name") as string,
      description: t("products.items.brazoArticulado.description") as string,
    },
    {
      image: "/images/products/toldo-cofre.jpeg",
      name: t("products.items.cofre.name") as string,
      description: t("products.items.cofre.description") as string,
    },
    {
      image: "/images/products/toldo-corredero.jpg",
      name: t("products.items.corredero.name") as string,
      description: t("products.items.corredero.description") as string,
    },
    {
      image: "/images/products/toldo-punto-recto.jpg",
      name: t("products.items.puntoRecto.name") as string,
      description: t("products.items.puntoRecto.description") as string,
    },
    {
      image: "/images/products/toldo-stor.jpg",
      name: t("products.items.stor.name") as string,
      description: t("products.items.stor.description") as string,
    },
    {
      image: "/images/products/toldos-vertical.jpg",
      name: t("products.items.vertical.name") as string,
      description: t("products.items.vertical.description") as string,
    },
    {
      image: "/images/products/cortinas-interior.jpg",
      name: t("products.items.cortinas.name") as string,
      description: t("products.items.cortinas.description") as string,
    },
    {
      image: "/images/products/mosquitero.jpg",
      name: t("products.items.mosquiteros.name") as string,
      description: t("products.items.mosquiteros.description") as string,
    },
  ];

  return (
    <section id="products" className="bg-white py-20 dark:bg-primary-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary-900 dark:text-white sm:text-4xl">
            {t("products.title") as string}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-primary-600 dark:text-primary-200">
            {t("products.subtitle") as string}
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              image={product.image}
              name={product.name}
              description={product.description}
              ctaLabel={t("products.cta") as string}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
