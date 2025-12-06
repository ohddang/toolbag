'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useTranslation } from '../i18n/client';
import type { Locale } from '../i18n/settings';

type Theme = 'orange' | 'blue' | 'purple' | 'pink' | 'dark';

interface HeaderProps {
  theme?: Theme;
  showNavigation?: boolean;
  showBackButton?: boolean;
  sticky?: boolean;
  selectedCategory?: '게임' | '유틸리티' | '테스트';
  onCategoryChange?: (category: '게임' | '유틸리티' | '테스트') => void;
}

const themeConfig: Record<Theme, {
  border: string;
  bg: string;
  logoGradient: string;
  titleGradient: string;
  backButton: {
    bg: string;
    text: string;
    hover: string;
  };
  navActive: string;
  navInactive: string;
  navHover: string;
}> = {
  orange: {
    border: 'border-orange-100',
    bg: 'bg-white/90',
    logoGradient: 'from-orange-400 to-pink-500',
    titleGradient: 'from-orange-600 to-pink-600',
    backButton: {
      bg: 'bg-orange-50',
      text: 'text-orange-600',
      hover: 'hover:bg-orange-100',
    },
    navActive: 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-md',
    navInactive: 'text-slate-600',
    navHover: 'hover:text-orange-600 hover:bg-orange-50',
  },
  blue: {
    border: 'border-blue-100',
    bg: 'bg-white/90',
    logoGradient: 'from-blue-400 to-indigo-500',
    titleGradient: 'from-blue-600 to-indigo-600',
    backButton: {
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      hover: 'hover:bg-blue-100',
    },
    navActive: 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md',
    navInactive: 'text-slate-600',
    navHover: 'hover:text-blue-600 hover:bg-blue-50',
  },
  purple: {
    border: 'border-purple-100',
    bg: 'bg-white/90',
    logoGradient: 'from-purple-400 to-blue-500',
    titleGradient: 'from-purple-600 to-blue-600',
    backButton: {
      bg: 'bg-purple-50',
      text: 'text-purple-600',
      hover: 'hover:bg-purple-100',
    },
    navActive: 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md',
    navInactive: 'text-slate-600',
    navHover: 'hover:text-purple-600 hover:bg-purple-50',
  },
  pink: {
    border: 'border-pink-100',
    bg: 'bg-white/90',
    logoGradient: 'from-pink-400 to-blue-500',
    titleGradient: 'from-pink-600 to-blue-600',
    backButton: {
      bg: 'bg-pink-50',
      text: 'text-pink-600',
      hover: 'hover:bg-pink-100',
    },
    navActive: 'bg-gradient-to-r from-pink-500 to-blue-500 text-white shadow-md',
    navInactive: 'text-slate-600',
    navHover: 'hover:text-pink-600 hover:bg-pink-50',
  },
  dark: {
    border: 'border-purple-500/20',
    bg: 'bg-slate-900/50',
    logoGradient: 'from-purple-400 to-pink-500',
    titleGradient: 'from-purple-400 to-pink-400',
    backButton: {
      bg: 'bg-purple-500/20',
      text: 'text-purple-300',
      hover: 'hover:bg-purple-500/30',
    },
    navActive: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md',
    navInactive: 'text-slate-300',
    navHover: 'hover:text-purple-300 hover:bg-purple-500/20',
  },
};

export function Header({
  theme = 'orange',
  showNavigation = false,
  showBackButton = false,
  sticky = false,
  selectedCategory,
  onCategoryChange,
}: HeaderProps) {
  const params = useParams();
  const { t, locale } = useTranslation();
  const config = themeConfig[theme];
  const isDark = theme === 'dark';

  const mainCategories: Array<'게임' | '유틸리티' | '테스트'> = ['게임', '유틸리티', '테스트'];

  return (
    <header
      className={`${sticky ? 'sticky top-0 z-30' : ''} border-b ${config.border} ${config.bg} backdrop-blur-sm shadow-sm`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center gap-2 md:gap-3 group">
            <div
              className={`flex h-8 w-8 md:h-10 md:w-10 ${showNavigation ? 'h-12 w-12' : ''} items-center justify-center rounded-xl md:rounded-2xl bg-gradient-to-br ${config.logoGradient} shadow-md ${showNavigation ? 'rotate-3 group-hover:rotate-0' : 'group-hover:scale-110'} transition-transform`}
            >
              <span className={`text-lg md:text-xl ${showNavigation ? 'text-2xl font-bold' : ''} text-white`}>
                🧰
              </span>
            </div>
            <h1
              className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${config.titleGradient} bg-clip-text text-transparent`}
            >
              Toolbag
            </h1>
          </Link>

          <div className="flex items-center gap-2 md:gap-4">
            {showNavigation ? (
              <nav
                className="hidden items-center gap-6 md:flex"
                aria-label="Main navigation"
              >
                {mainCategories.map((category) => (
                  <Link
                    key={category}
                    href={`/${locale}?category=${category}`}
                    scroll={false}
                    className={`text-sm font-bold transition-all rounded-full px-4 py-2 ${
                      selectedCategory === category
                        ? config.navActive
                        : `${config.navInactive} ${config.navHover}`
                    }`}
                  >
                    {category === '게임'
                      ? t('header.games')
                      : category === '유틸리티'
                        ? t('header.utilities')
                        : t('header.tests')}
                  </Link>
                ))}
                <div className="hidden md:block">
                  <LanguageSwitcher />
                </div>
              </nav>
            ) : (
              <>
                <div className="hidden md:block">
                  <LanguageSwitcher />
                </div>
                {showBackButton && (
                  <Link
                    href={`/${locale}`}
                    className={`rounded-full ${config.backButton.bg} px-3 py-2 md:px-5 text-xs md:text-sm font-bold ${config.backButton.text} transition-all ${config.backButton.hover} hover:scale-105 ${isDark ? 'backdrop-blur-sm' : ''}`}
                  >
                    ← {locale === 'ko' ? '돌아가기' : 'Back'}
                  </Link>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

