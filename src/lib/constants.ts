import type { SiteConfig, NavigationItem, FooterLinkGroup } from "@/types";

/**
 * 사이트 전역 설정
 */
export const SITE_CONFIG: SiteConfig = {
  name: "NextJS Starter",
  description: "Next.js, TypeScript, Tailwind CSS로 아름다운 랜딩 페이지를 만드세요",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ogImage: "/og-image.png",
  links: {
    twitter: "https://twitter.com/yourusername",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
  },
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
    title: "소개",
    href: "#about",
  },
  {
    title: "문의",
    href: "#contact",
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
      { title: "가격", href: "#pricing" },
      { title: "문서", href: "/docs" },
    ],
  },
  {
    title: "회사",
    links: [
      { title: "소개", href: "#about" },
      { title: "블로그", href: "/blog" },
      { title: "문의", href: "#contact" },
    ],
  },
  {
    title: "법적 정보",
    links: [
      { title: "개인정보 처리방침", href: "/privacy" },
      { title: "서비스 이용약관", href: "/terms" },
    ],
  },
];

/**
 * 소셜 미디어 링크
 */
export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: SITE_CONFIG.links.github || "#",
    icon: "Github" as const,
  },
  {
    name: "Twitter",
    href: SITE_CONFIG.links.twitter || "#",
    icon: "Twitter" as const,
  },
  {
    name: "LinkedIn",
    href: SITE_CONFIG.links.linkedin || "#",
    icon: "Linkedin" as const,
  },
];
