"use client";

import { useI18n } from "@/lib/i18n-context";

const PHONE_NUMBER = "+34680787990";

export function CallNowButton() {
  const { t } = useI18n();

  return (
    <a
      href={`tel:${PHONE_NUMBER}`}
      className="fixed bottom-4 left-4 z-50 inline-flex items-center gap-2 rounded-full bg-accent-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:bg-accent-600 active:scale-95 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 md:hidden"
      aria-label={t("callNow") as string}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
      {t("callNow") as string}
    </a>
  );
}
