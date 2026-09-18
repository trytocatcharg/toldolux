import type { Metadata } from "next";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { locales, Locale } from "@/lib/i18n";
import { I18nProvider } from "@/lib/i18n-context";
import { Providers } from "@/components/providers";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PageLoader } from "@/components/PageLoader";
import "./globals.css";
import { CallNowButton } from "@/components/CallNowButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const messages = await import(`@/messages/${locale}.json`).then(
    (m) => m.default,
  );
  const t = (key: string) =>
    key.split(".").reduce((acc, part) => acc?.[part], messages) as string;
  const siteUrl = "https://toldo-lux.com";

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
    metadataBase: new URL(siteUrl),
    icons: {
      icon: "/images/favicon.png",
    },
    alternates: {
      canonical: `/${locale}/`,
      languages: {
        "es-ES": "/es/",
        "ca-ES": "/ca/",
        "en-US": "/en/",
        "x-default": "/es/",
      },
    },
    openGraph: {
      title: t("metadata.ogTitle"),
      description: t("metadata.ogDescription"),
      url: `/${locale}/`,
      siteName: "Toldo Lux",
      locale: locale === "ca" ? "ca_ES" : locale === "en" ? "en_US" : "es_ES",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("metadata.ogTitle"),
      description: t("metadata.ogDescription"),
    },
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: Locale };
}) {
  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <PageLoader />
        <I18nProvider locale={locale}>
          <Providers>
            {children}
            <CallNowButton />
            <WhatsAppButton />
          </Providers>
        </I18nProvider>
      </body>
    </html>
  );
}
