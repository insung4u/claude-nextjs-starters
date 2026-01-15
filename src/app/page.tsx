import { HeroSection } from "@/features/landing/components/hero-section";
import { FeaturesSection } from "@/features/landing/components/features-section";
import { ExamplesSection } from "@/features/landing/components/examples-section";

/**
 * 홈 페이지
 * 랜딩 페이지로 구성
 */
export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ExamplesSection />
    </>
  );
}
