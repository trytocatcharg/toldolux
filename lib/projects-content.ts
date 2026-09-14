import { ProjectSlug } from "./projects";

export interface ProjectVisuals {
  /** Full-width background image behind the centered title. */
  heroImage: string;
  /** Image shown on the right column, next to the text. */
  sideImage: string;
}

// Images are locale-independent, so they live here instead of the messages JSON.
// TODO(user): these are placeholders taken from the site gallery — replace with
// the real project photos for each slug (hero first, then the side image).
export const PROJECT_VISUALS: Record<ProjectSlug, ProjectVisuals> = {
  "instalacion-toldos-calafell": {
    heroImage: "/images/gallery/12-scaled.jpg",
    sideImage: "/images/ChatOn-image-3.jpg",
  },
  "instalacion-pergola-bioclimatica-el-vendrell": {
    heroImage: "/images/gallery/102-scaled.jpg",
    sideImage: "/images/ChatOn-image-4.jpg",
  },
  "instalacion-toldos-baix-penedes": {
    heroImage: "/images/gallery/toldo-2.jpg",
    sideImage: "/images/gallery/toldo-1.jpg",
  },
  "instalacion-pergolas-bioclimaticas-calafell": {
    heroImage: "/images/gallery/pergola-2.jpg",
    sideImage: "/images/gallery/pergola-1.jpg",
  },
  "instalacion-pergola-bioclimatica-roda-de-bera": {
    heroImage: "/images/gallery/pergola-1.jpg",
    sideImage: "/images/gallery/pergola-2.jpg",
  },
  "instalacion-toldo-torredembarra": {
    heroImage: "/images/gallery/toldo-1.jpg",
    sideImage: "/images/gallery/toldo-2.jpg",
  },
};
