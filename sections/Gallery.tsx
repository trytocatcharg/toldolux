"use client";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useI18n } from "@/lib/i18n-context";

const GalleryComponent = ImageGallery as unknown as React.FC<any>;

export function Gallery() {
  const { t } = useI18n();

  const images = [
    {
      original: "/images/gallery/toldo-1.jpg",
      thumbnail: "/images/gallery/toldo-1.jpg",
      originalAlt: "Toldo extensible en balcón moderno",
      thumbnailAlt: "Toldo extensible en balcón moderno",
    },
    {
      original: "/images/gallery/toldo-2.jpg",
      thumbnail: "/images/gallery/toldo-2.jpg",
      originalAlt: "Toldo cofre en fachada mediterránea",
      thumbnailAlt: "Toldo cofre en fachada mediterránea",
    },
    {
      original: "/images/gallery/pergola-1.jpg",
      thumbnail: "/images/gallery/pergola-1.jpg",
      originalAlt: "Pérgola bioclimática de aluminio en jardín",
      thumbnailAlt: "Pérgola bioclimática de aluminio en jardín",
    },
    {
      original: "/images/gallery/pergola-2.jpg",
      thumbnail: "/images/gallery/pergola-2.jpg",
      originalAlt: "Pérgola moderna con techo retráctil",
      thumbnailAlt: "Pérgola moderna con techo retráctil",
    },
    {
      original: "/images/gallery/proteccion-1.jpg",
      thumbnail: "/images/gallery/proteccion-1.jpg",
      originalAlt: "Protección solar vertical en ventanales",
      thumbnailAlt: "Protección solar vertical en ventanales",
    },
    {
      original: "/images/gallery/proteccion-2.jpg",
      thumbnail: "/images/gallery/proteccion-2.jpg",
      originalAlt: "Toldo vela en terraza exterior",
      thumbnailAlt: "Toldo vela en terraza exterior",
    },
  ];

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
            showPlayButton={false}
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
