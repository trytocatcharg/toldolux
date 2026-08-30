"use client";

import { createContext, useContext, ReactNode } from "react";
import { Locale, defaultLocale } from "./i18n";

import es from "../messages/es.json";
import ca from "../messages/ca.json";
import en from "../messages/en.json";

const messagesByLocale: Record<Locale, any> = { es, ca, en };

interface I18nContextValue {
  locale: Locale;
  t: (key: string) => string | string[];
}

const I18nContext = createContext<I18nContextValue>({
  locale: defaultLocale,
  t: () => "",
});

function getNestedValue(obj: any, path: string): any {
  return path.split(".").reduce((acc, part) => acc?.[part], obj);
}

export function I18nProvider({
  children,
  locale,
}: {
  children: ReactNode;
  locale: Locale;
}) {
  const messages = messagesByLocale[locale] || messagesByLocale[defaultLocale];

  const t = (key: string): string | string[] => {
    const value = getNestedValue(messages, key);
    if (typeof value === "string") return value;
    if (Array.isArray(value)) return value;
    return key;
  };

  return <I18nContext.Provider value={{ locale, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
