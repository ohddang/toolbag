export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Toolbag",
    url: "https://toolbag.vercel.app",
    logo: "https://toolbag.vercel.app/logo.png",
    description:
      "유용한 소프트웨어와 게임 도구를 제공하는 플랫폼",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "ohddang509@gmail.com",
      areaServed: "KR",
      availableLanguage: ["Korean", "English"],
    },
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Toolbag",
    url: "https://toolbag.vercel.app",
    description:
      "게임, 유틸리티, 최신 소프트웨어 정보를 한 곳에서",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://toolbag.vercel.app/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "홈",
        item: "https://toolbag.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "서비스",
        item: "https://toolbag.vercel.app/#services",
      },
    ],
  };
}
