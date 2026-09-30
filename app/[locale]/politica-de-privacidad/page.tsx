import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/sections/Footer";
import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { locales, Locale } from "@/lib/i18n";
import { SITE_URL } from "@/lib/utils";

interface LegalContent {
  meta: { title: string; description: string };
  heading: string;
  sections: LegalSection[];
}

async function getLegal(locale: Locale): Promise<LegalContent> {
  const messages = (await import(`@/messages/${locale}.json`)).default;
  return messages.legal.privacy as LegalContent;
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const { meta } = await getLegal(locale);

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/politica-de-privacidad`,
      languages: {
        "es-ES": "/es/politica-de-privacidad",
        "ca-ES": "/ca/politica-de-privacidad",
        "en-US": "/en/politica-de-privacidad",
        "x-default": "/es/politica-de-privacidad",
      },
    },
    robots: {
      index: false,
      follow: false,
    },
    metadataBase: new URL(SITE_URL),
  };
}

export default async function PrivacyPolicyPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const { heading, sections } = await getLegal(locale);

  return (
    <>
      <Navbar />
      <LegalPage heading={heading} sections={sections} />
      <Footer />
    </>
  );
}
