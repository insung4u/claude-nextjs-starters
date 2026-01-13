import type { SiteConfig, NavigationItem, FooterLinkGroup } from "@/types";

/**
 * 사이트 전역 설정
 */
export const SITE_CONFIG: SiteConfig = {
  name: "Your Landing Page",
  description: "Build beautiful landing pages with Next.js, TypeScript, and Tailwind CSS",
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
    title: "Features",
    href: "#features",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

/**
 * 푸터 링크 그룹
 */
export const FOOTER_LINKS: FooterLinkGroup[] = [
  {
    title: "Product",
    links: [
      { title: "Features", href: "#features" },
      { title: "Pricing", href: "#pricing" },
      { title: "Documentation", href: "/docs" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About", href: "#about" },
      { title: "Blog", href: "/blog" },
      { title: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Terms of Service", href: "/terms" },
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
