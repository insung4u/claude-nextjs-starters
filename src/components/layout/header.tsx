import Link from "next/link";
import { Navigation } from "./navigation";
import { ThemeToggle } from "./theme-toggle";
import { SITE_CONFIG } from "@/lib/constants";

/**
 * 사이트 헤더
 * sticky 위치, backdrop blur 효과
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">{SITE_CONFIG.name}</span>
        </Link>

        {/* Navigation + Theme Toggle */}
        <div className="flex items-center gap-4">
          <Navigation />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
