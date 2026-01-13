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
          🎉 Built with Next.js 16
        </Badge>

        {/* Main Heading */}
        <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
          Build Beautiful Landing Pages
        </h1>

        {/* Subtitle */}
        <p className="mb-8 text-lg text-muted-foreground md:text-xl">
          A modern Next.js starter kit with TypeScript, Tailwind CSS, and
          shadcn/ui. Get started in minutes and focus on building your product.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="#features">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
