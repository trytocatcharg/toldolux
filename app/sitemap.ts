import { MetadataRoute } from 'next';
import { locales, defaultLocale } from '@/lib/i18n';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://toldo-lux.com';
  const routes = [''];

  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    for (const locale of locales) {
      const path = `/${locale}/${route}`;
      entries.push({
        url: `${siteUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [
              l === 'ca' ? 'ca-ES' : l === 'en' ? 'en-US' : 'es-ES',
              `${siteUrl}/${l}/${route}`,
            ])
          ),
        },
      });
    }
  }

  return entries;
}
