"use client";

import IQTest from "@/app/components/IQTest";
import Link from "next/link";
import { useParams } from "next/navigation";
import Script from "next/script";
import { LanguageSwitcher } from "@/app/components/LanguageSwitcher";
import { Header } from "@/app/components/Header";

export default function IQTestPage() {
  const params = useParams();
  const locale = params.locale as string;
  const isKorean = locale === "ko";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: isKorean ? "IQ 테스트" : "IQ Test",
    description: isKorean
      ? "논리, 수리, 패턴 인식 능력을 측정하는 IQ 테스트"
      : "IQ test measuring logic, math, and pattern recognition abilities",
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
        id="structured-data-iq-test"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
        {/* 헤더 */}
        <Header
          theme="blue"
          showBackButton={true}
        />

        {/* 메인 컨텐츠 */}
        <main>
          <IQTest />
        </main>

        {/* 푸터 */}
        <footer className="mt-12 border-t border-blue-100 bg-gradient-to-b from-blue-50 to-white py-8">
          <div className="mx-auto max-w-7xl px-6 text-center text-sm font-medium text-slate-500">
            © 2025 Toolbag. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
}

