import Image from "next/image";
import Link from "next/link";

interface ProjectTemplateProps {
  title: string;
  heroImage: string;
  paragraphs: string[];
  sideImage: string;
  backHref: string;
  backLabel: string;
  ctaHref: string;
  ctaLabel: string;
}

/**
 * Template for project landing pages, mirroring the original site's layout:
 * full-width hero image with the title centered on it, then a two-column
 * section with the text on the left and an image on the right.
 */
export function ProjectTemplate({
  title,
  heroImage,
  paragraphs,
  sideImage,
  backHref,
  backLabel,
  ctaHref,
  ctaLabel,
}: ProjectTemplateProps) {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
        <Image
          src={heroImage}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-primary-800/50 to-primary-800/30" />
        <h1 className="relative z-10 px-4 text-center text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
          {title}
        </h1>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Link
          href={backHref}
          className="text-sm font-medium text-accent-600 transition-colors hover:text-accent-700 dark:text-accent-400"
        >
          ← {backLabel}
        </Link>
        <div className="mt-8 grid items-start gap-10 md:grid-cols-2">
          <div>
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`text-lg leading-relaxed text-primary-700 dark:text-primary-200 ${
                  index > 0 ? "mt-5" : ""
                }`}
              >
                {paragraph}
              </p>
            ))}
            <div className="mt-10">
              <a
                href={ctaHref}
                className="inline-flex items-center justify-center rounded-full bg-accent-500 px-8 py-4 text-base font-semibold text-white shadow-lg transition-transform hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 active:scale-95"
              >
                {ctaLabel}
              </a>
            </div>
          </div>
          <Image
            src={sideImage}
            alt={title}
            width={800}
            height={600}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="h-auto w-full rounded-xl shadow-lg"
          />
        </div>
      </section>
    </>
  );
}
