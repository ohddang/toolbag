"use client";

import EstrogenTestosteroneTest from "@/app/components/EstrogenTestosteroneTest";
import Link from "next/link";
import { useParams } from "next/navigation";
import Script from "next/script";
import { LanguageSwitcher } from "@/app/components/LanguageSwitcher";
import { Header } from "@/app/components/Header";

export default function EstrogenTestosteroneTestPage() {
  const params = useParams();
  const locale = params.locale as string;
  const isKorean = locale === "ko";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: isKorean ? "에겐지수 테토지수 테스트" : "Estrogen/Testosterone Test",
    description: isKorean
      ? "나의 에겐 성향과 테토 성향을 측정하는 재미있는 성격 테스트"
      : "Fun personality test measuring estrogen and testosterone tendencies",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <>
      <Script
        id="structured-data-estrogen-testosterone-test"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-blue-50">
        {/* 헤더 */}
        <Header
          theme="pink"
          showBackButton={true}
        />

        {/* 메인 컨텐츠 */}
        <main>
          <EstrogenTestosteroneTest />
        </main>

        {/* 푸터 */}
        <footer className="mt-12 border-t border-pink-100 bg-gradient-to-b from-pink-50 to-white py-8">
          <div className="mx-auto max-w-7xl px-6 text-center text-sm font-medium text-slate-500">
            © 2025 Toolbag. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
}

