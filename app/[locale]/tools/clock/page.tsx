"use client";

import Clock from "@/app/components/Clock";
import Link from "next/link";
import Script from "next/script";
import { useParams } from "next/navigation";
import { LanguageSwitcher } from "@/app/components/LanguageSwitcher";
import { Header } from "@/app/components/Header";

export default function ClockPage() {
  const params = useParams();
  const locale = (params.locale as string) || "ko";
  const isKorean = locale === "ko";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: isKorean ? "시계 & 스톱워치" : "Clock & Stopwatch",
    description: isKorean
      ? "큰 화면의 디지털 시계와 정밀한 스톱워치. 모든 기기에서 사용 가능한 무료 온라인 도구"
      : "Large digital clock and precise stopwatch. Free online tool available on all devices",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "1200",
    },
  };

  return (
    <>
      <Script
        id="structured-data-clock"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* 헤더 */}
        <Header
          theme="dark"
          showBackButton={true}
        />

        {/* 메인 컨텐츠 */}
        <Clock locale={locale} />
      </div>
    </>
  );
}

