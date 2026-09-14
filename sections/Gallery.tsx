"use client";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useI18n } from "@/lib/i18n-context";
import galleryManifest from "@/lib/gallery-manifest.json";

// SAFETY: react-image-gallery ships its own bundled types that conflict with React 18's JSX namespace; casting to FC<any> preserves the library's runtime props interface.
const GalleryComponent = ImageGallery as unknown as React.FC<any>;

const images = galleryManifest.images.map((image) => ({
  original: image.src,
  thumbnail: image.thumbnailSrc,
  originalAlt: image.alt,
  thumbnailAlt: image.alt,
  thumbnailLoading: "lazy",
}));

export function Gallery() {
  const { t } = useI18n();

  return (
    <section id="gallery" className="bg-primary-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary-900 dark:text-white sm:text-4xl">
            {t("gallery.title") as string}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-primary-600 dark:text-primary-200">
            {t("gallery.subtitle") as string}
          </p>
        </div>
        <div className="mx-auto max-w-5xl">
          <GalleryComponent
            items={images}
            showPlayButton={true}
            showFullscreenButton={true}
            showThumbnails={true}
            thumbnailPosition="bottom"
            lazyLoad={true}
          />
        </div>
      </div>
    </section>
  );
}
