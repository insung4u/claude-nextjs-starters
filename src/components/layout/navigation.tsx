"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NAVIGATION_ITEMS } from "@/lib/constants";
import { useMobile } from "@/hooks/use-mobile";

/**
 * 네비게이션 메뉴 컴포넌트
 * 데스크탑: 수평 링크, 모바일: 드롭다운 메뉴
 */
export function Navigation() {
  const isMobile = useMobile();

  if (isMobile) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          {NAVIGATION_ITEMS.map((item) => (
            <DropdownMenuItem key={item.href} asChild>
              <Link
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
              >
                {item.title}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <nav className="flex items-center gap-6">
      {NAVIGATION_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          target={item.external ? "_blank" : undefined}
          rel={item.external ? "noopener noreferrer" : undefined}
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
