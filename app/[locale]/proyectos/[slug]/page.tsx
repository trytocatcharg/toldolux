import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/sections/Footer";
import { locales, Locale } from "@/lib/i18n";
import { PROJECT_SLUGS, ProjectSlug, isProjectSlug } from "@/lib/projects";

const siteUrl = "https://toldo-lux.com";

interface Messages {
  projects: {
    menu: { slug: string; title: string }[];
    items: Record<string, { description: string }>;
    backToGallery: string;
    cta: string;
  };
}

async function getMessages(locale: Locale): Promise<Messages> {
  return (await import(`@/messages/${locale}.json`)).default as Messages;
}

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    PROJECT_SLUGS.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params: { locale, slug },
}: {
  params: { locale: Locale; slug: string };
}): Promise<Metadata> {
  if (!isProjectSlug(slug)) return {};

  const messages = await getMessages(locale);
  const title =
    messages.projects.menu.find((item) => item.slug === slug)?.title ?? slug;
  const description = messages.projects.items[slug]?.description ?? "";

  return {
    title: `${title} | Toldo Lux`,
    description,
    alternates: {
      canonical: `/${locale}/proyectos/${slug}`,
      languages: {
        "es-ES": `/es/proyectos/${slug}`,
        "ca-ES": `/ca/proyectos/${slug}`,
        "en-US": `/en/proyectos/${slug}`,
        "x-default": `/es/proyectos/${slug}`,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
    metadataBase: new URL(siteUrl),
  };
}

export default async function ProjectPage({
  params: { locale, slug },
}: {
  params: { locale: Locale; slug: string };
}) {
  if (!isProjectSlug(slug)) {
    notFound();
  }

  const messages = await getMessages(locale);
  const projectSlug = slug as ProjectSlug;
  const title =
    messages.projects.menu.find((item) => item.slug === projectSlug)?.title ??
    projectSlug;
  const description = messages.projects.items[projectSlug]?.description ?? "";

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <Link
          href={`/${locale}/#gallery`}
          className="text-sm font-medium text-accent-600 transition-colors hover:text-accent-700 dark:text-accent-400"
        >
          ← {messages.projects.backToGallery}
        </Link>
        <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-primary-900 dark:text-white sm:text-4xl">
          {title}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-primary-700 dark:text-primary-200">
          {description}
        </p>
        <div className="mt-10">
          <a
            href={`/${locale}/#contact`}
            className="inline-flex items-center justify-center rounded-full bg-accent-500 px-8 py-4 text-base font-semibold text-white shadow-lg transition-transform hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 active:scale-95"
          >
            {messages.projects.cta}
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
