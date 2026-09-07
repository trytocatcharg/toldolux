import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  ctaLabel: string;
}

export function ProductCard({
  image,
  name,
  description,
  ctaLabel,
}: ProductCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-primary-200/60 transition-shadow duration-300 hover:shadow-xl dark:bg-primary-900 dark:ring-primary-800">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 via-transparent to-transparent" />
        <h3 className="absolute bottom-4 left-4 right-4 text-lg font-semibold text-white">
          {name}
        </h3>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm leading-relaxed text-primary-600 dark:text-primary-300">
          {description}
        </p>
        <a
          href="#contact"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 transition-colors hover:text-accent-500 dark:text-accent-400"
        >
          {ctaLabel}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}
