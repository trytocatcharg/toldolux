"use client";

import { useState } from "react";
import { ExternalLink, PenLine, Star } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { cn } from "@/lib/utils";
import type { Review, ReviewsData } from "@/lib/reviews";

const localeTags: Record<string, string> = {
  es: "es-ES",
  ca: "ca-ES",
  en: "en-US",
};

function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.85-.08-1.66-.22-2.45H12v4.64h6.45a5.52 5.52 0 0 1-2.39 3.62v3h3.86c2.26-2.09 3.57-5.17 3.57-8.81z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09A11.99 11.99 0 0 0 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.29A7.2 7.2 0 0 1 4.89 12c0-.8.14-1.57.38-2.29V6.62H1.29a12 12 0 0 0 0 10.76l3.98-3.09z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42A11.98 11.98 0 0 0 1.29 6.62l3.98 3.09C5.22 6.86 7.87 4.75 12 4.75z"
      />
    </svg>
  );
}

function Stars({ rating, className }: { rating: number; className?: string }) {
  return (
    <div
      className={cn("flex items-center gap-0.5", className)}
      role="img"
      aria-label={`${rating} / 5`}
    >
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.min(Math.max(rating - i, 0), 1);
        return (
          <span key={i} className="relative inline-flex">
            <Star className="h-4 w-4 text-primary-300 dark:text-primary-600" />
            <span
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fill * 100}%` }}
            >
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            </span>
          </span>
        );
      })}
    </div>
  );
}

function Avatar({ review }: { review: Review }) {
  const [failed, setFailed] = useState(false);

  if (!review.avatar || failed) {
    return (
      <div
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-500 text-sm font-bold text-white"
        aria-hidden="true"
      >
        {(review.author || "?").trim().charAt(0).toUpperCase()}
      </div>
    );
  }

  // Third-party Google avatar with graceful initials fallback; routing it
  // through the Next image optimizer would break the onError fallback path.
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={review.avatar}
      alt=""
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className="h-11 w-11 shrink-0 rounded-full object-cover"
    />
  );
}

function ReviewCard({
  review,
  localeTag,
  readMore,
  readLess,
}: {
  review: Review;
  localeTag: string;
  readMore: string;
  readLess: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > 240;
  const date = review.timestamp
    ? new Intl.DateTimeFormat(localeTag, {
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(new Date(review.timestamp * 1000))
    : null;

  return (
    <article className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-md ring-1 ring-primary-200/60 dark:bg-primary-800 dark:ring-primary-700">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <Avatar review={review} />
          <div>
            <p className="font-semibold text-primary-900 dark:text-white">
              {review.author}
            </p>
            {date && (
              <p className="text-xs text-primary-500 dark:text-primary-300">
                {date}
              </p>
            )}
          </div>
        </div>
        <GoogleG className="h-5 w-5 shrink-0 opacity-90" />
      </div>

      <Stars rating={review.rating} className="mb-3" />

      <p
        className={cn(
          "text-sm leading-relaxed text-primary-600 dark:text-primary-200",
          !expanded && isLong && "line-clamp-5",
        )}
      >
        {review.text}
      </p>

      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          className="mt-2 self-start text-sm font-semibold text-accent-600 transition-colors hover:text-accent-700 dark:text-accent-400 dark:hover:text-accent-300"
        >
          {expanded ? readLess : readMore}
        </button>
      )}
    </article>
  );
}

export function ReviewsPresentation({ data }: { data: ReviewsData }) {
  const { t, locale } = useI18n();
  const localeTag = localeTags[locale] ?? "es-ES";
  const ratingLabel = new Intl.NumberFormat(localeTag, {
    maximumFractionDigits: 1,
  }).format(data.rating);
  const reviews = data.reviews.slice(0, 6);

  return (
    <section className="py-20 dark:bg-primary-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary-900 dark:text-white sm:text-4xl">
            {t("reviews.title") as string}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-primary-600 dark:text-primary-200">
            {t("reviews.subtitle") as string}
          </p>
        </div>

        <div className="mx-auto mb-12 flex max-w-md flex-col items-center gap-3 rounded-2xl bg-white p-6 text-center shadow-md ring-1 ring-primary-200/60 dark:bg-primary-800 dark:ring-primary-700">
          <div className="flex items-center gap-2">
            <GoogleG className="h-7 w-7" />
            <span className="text-2xl font-bold text-primary-900 dark:text-white">
              {ratingLabel}
            </span>
          </div>
          <Stars rating={data.rating} />
          <p className="text-sm text-primary-600 dark:text-primary-200">
            <span className="font-semibold text-primary-900 dark:text-white">
              {t("reviews.ratingLabel") as string}
            </span>{" "}
            · {data.count} {t("reviews.countLabel") as string}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <a
              href={data.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-white shadow transition-colors hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 dark:focus:ring-offset-primary-800"
            >
              {t("reviews.viewAll") as string}
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href={data.writeReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-accent-500 px-5 py-2.5 text-sm font-semibold text-accent-700 transition-colors hover:bg-accent-50 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 dark:border-accent-400 dark:text-accent-300 dark:hover:bg-primary-700 dark:focus:ring-offset-primary-800"
            >
              {t("reviews.writeReview") as string}
              <PenLine className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard
              key={`${review.author}-${review.timestamp}`}
              review={review}
              localeTag={localeTag}
              readMore={t("reviews.readMore") as string}
              readLess={t("reviews.readLess") as string}
            />
          ))}
        </div>

        {data.source === "live" && (
          <p className="mt-8 text-center text-xs text-primary-400 dark:text-primary-500">
            {t("reviews.autoSynced") as string}
          </p>
        )}
      </div>
    </section>
  );
}
