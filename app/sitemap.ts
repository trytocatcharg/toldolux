import { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { PROJECT_SLUGS } from "@/lib/projects";
import { SITE_URL } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "politica-de-privacidad", priority: 0.3 },
    { path: "politica-de-cookies", priority: 0.3 },
    { path: "aviso-legal", priority: 0.3 },
    ...PROJECT_SLUGS.map((slug) => ({
      path: `proyectos/${slug}`,
      priority: 0.8,
    })),
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    for (const locale of locales) {
      const path = `/${locale}/${route.path}`;
      entries.push({
        url: `${SITE_URL}${path}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: route.priority,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [
              l === "ca" ? "ca-ES" : l === "en" ? "en-US" : "es-ES",
              `${SITE_URL}/${l}/${route.path}`,
            ]),
          ),
        },
      });
    }
  }

  return entries;
}
