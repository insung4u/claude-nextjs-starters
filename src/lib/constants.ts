import type { SiteConfig, NavigationItem, FooterLinkGroup } from "@/types";

/**
 * 사이트 전역 설정
 */
export const SITE_CONFIG: SiteConfig = {
  name: "NextJS Starter",
  description: "모던 웹 개발을 위한 완벽한 스타터킷",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ogImage: "/og-image.png",
};

/**
 * 헤더 네비게이션 메뉴
 */
export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    title: "특징",
    href: "#features",
  },
  {
    title: "예제",
    href: "#examples",
  },
  {
    title: "소개",
    href: "#about",
  },
];

/**
 * 푸터 링크 그룹
 */
export const FOOTER_LINKS: FooterLinkGroup[] = [
  {
    title: "제품",
    links: [
      { title: "특징", href: "#features" },
    ],
  },
  {
    title: "회사",
    links: [
      { title: "소개", href: "#about" },
    ],
  },
];

