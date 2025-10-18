"use client"
import { HeroSection } from "@/components/home/hero-section";
import { FeaturedProperties } from "@/components/home/featured-properties";
import { StatsSection } from "@/components/home/stats-section";
import { CTASection } from "@/components/home/cta-section";
import { useEffect } from "react";
import { useStrapiHomePage } from "@/hooks/useStrapiHomePage";
import { useLocale } from "next-intl";
import { Spiner } from "@/components/loading";

export default function HomePage() {

  const locale = useLocale();

  const { data, isLoading, error } = useStrapiHomePage(locale);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <main>
{isLoading  ? <Spiner/> :
data &&
     <>
    
     <HeroSection content={data?.hero[0]} />
      <FeaturedProperties />
      <StatsSection />
      <CTASection />
     </>
}
    </main>
  );
}
