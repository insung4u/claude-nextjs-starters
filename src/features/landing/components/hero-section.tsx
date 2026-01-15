import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/**
 * 히어로 섹션
 * 메인 제목, 부제목, CTA 버튼
 */
export function HeroSection() {
  return (
    <section className="container mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        {/* Badge */}
        <Badge variant="secondary" className="mb-4">
          🎉 Next.js 16으로 제작
        </Badge>

        {/* Main Heading */}
        <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
          모던 웹 개발을 위한 완벽한 스타터킷
        </h1>

        {/* Subtitle */}
        <p className="mb-8 text-lg text-muted-foreground md:text-xl">
          Next.js 16 + TypeScript + Tailwind CSS + shadcn/ui로 구성된 최신 스타터 킷입니다.
          검증된 컴포넌트와 구조로 빠르게 시작하세요.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="#features">
              시작하기
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link
              href="https://github.com/insung4u/claude-nextjs-starters"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub에서 보기
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
