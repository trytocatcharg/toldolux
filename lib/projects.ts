export const PROJECT_SLUGS = [
  "instalacion-toldos-calafell",
  "instalacion-pergola-bioclimatica-el-vendrell",
  "instalacion-toldos-baix-penedes",
  "instalacion-pergolas-bioclimaticas-calafell",
  "instalacion-pergola-bioclimatica-roda-de-bera",
  "instalacion-toldo-torredembarra",
] as const;

export type ProjectSlug = (typeof PROJECT_SLUGS)[number];

export function isProjectSlug(slug: string): slug is ProjectSlug {
  return (PROJECT_SLUGS as readonly string[]).includes(slug);
}
