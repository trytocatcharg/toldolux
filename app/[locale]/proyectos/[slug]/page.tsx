import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/sections/Footer";
import { ProjectTemplate } from "@/components/ProjectTemplate";
import { locales, Locale } from "@/lib/i18n";
import { PROJECT_SLUGS, ProjectSlug, isProjectSlug } from "@/lib/projects";
import { PROJECT_VISUALS } from "@/lib/projects-content";

const siteUrl = "https://toldo-lux.com";

interface Messages {
  projects: {
    menu: { slug: string; title: string }[];
    items: Record<string, { description: string; paragraphs?: string[] }>;
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
  const item = messages.projects.items[projectSlug];
  const paragraphs =
    item?.paragraphs && item.paragraphs.length > 0
      ? item.paragraphs
      : [item?.description ?? ""];
  const visuals = PROJECT_VISUALS[projectSlug];

  return (
    <>
      <Navbar />
      <ProjectTemplate
        title={title}
        heroImage={visuals.heroImage}
        paragraphs={paragraphs}
        sideImage={visuals.sideImage}
        backHref={`/${locale}/#gallery`}
        backLabel={messages.projects.backToGallery}
        ctaHref={`/${locale}/#contact`}
        ctaLabel={messages.projects.cta}
      />
      <Footer />
    </>
  );
}
