/**
 * 공통 타입 정의
 */

export interface NavigationItem {
  title: string;
  href: string;
  external?: boolean;
}

export interface Feature {
  icon: string; // lucide-react 아이콘 이름
  title: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
}

export interface FooterLinkGroup {
  title: string;
  links: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}
