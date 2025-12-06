"use client";

import MBTITest from "@/app/components/MBTITest";
import Link from "next/link";
import { useParams } from "next/navigation";
import Script from "next/script";
import { LanguageSwitcher } from "@/app/components/LanguageSwitcher";
import { Header } from "@/app/components/Header";

export default function MBTITestPage() {
  const params = useParams();
  const locale = params.locale as string;
  const isKorean = locale === "ko";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: isKorean ? "MBTI 성격 테스트" : "MBTI Personality Test",
    description: isKorean
      ? "16가지 성격 유형 중 나는 어떤 유형일까요? 간단한 질문으로 알아보는 MBTI 성격 테스트"
      : "Which of the 16 personality types are you? Discover through simple MBTI personality test",
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
        id="structured-data-mbti-test"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50">
        {/* 헤더 */}
        <Header
          theme="purple"
          showBackButton={true}
        />

        {/* 메인 컨텐츠 */}
        <main>
          <MBTITest />
        </main>

        {/* 푸터 */}
        <footer className="mt-12 border-t border-purple-100 bg-gradient-to-b from-purple-50 to-white py-8">
          <div className="mx-auto max-w-7xl px-6 text-center text-sm font-medium text-slate-500">
            © 2025 Toolbag. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
}

