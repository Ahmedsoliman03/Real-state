import { HeroSection } from "@/components/home/hero-section";
import { FeaturedProperties } from "@/components/home/featured-properties";
import { StatsSection } from "@/components/home/stats-section";
import { CTASection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturedProperties />
      <StatsSection />
      <CTASection />
    </main>
  );
}
