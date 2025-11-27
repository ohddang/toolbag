'use client';

import { useParams, usePathname } from 'next/navigation';
import type { Locale } from './settings';
import ko from './locales/ko.json';
import en from './locales/en.json';

const translations = {
  ko,
  en,
} as const;

export function useTranslation() {
  const params = useParams();
  const pathname = usePathname();
  
  // pathname에서 locale 추출 (예: /ko/games -> ko)
  const pathLocale = pathname?.split('/')[1] as Locale;
  const locale = (params?.locale as Locale) || pathLocale || 'ko';

  const t = (key: string, options?: { returnObjects?: boolean }): any => {
    const keys = key.split('.');
    let value: any = translations[locale] || translations['ko'];

    for (const k of keys) {
      value = value?.[k];
    }

    if (options?.returnObjects) {
      return value || [];
    }

    return value || key;
  };

  return { t, locale };
}

