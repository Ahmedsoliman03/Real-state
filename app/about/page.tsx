import { AboutHero } from "@/components/about/about-hero"
import { AboutStory } from "@/components/about/about-story"
import { TeamSection } from "@/components/about/team-section"
import { ValuesSection } from "@/components/about/values-section"

export default function AboutPage() {
  return (
    <main className="pt-20">
      <AboutHero />
      <AboutStory />
      <TeamSection />
      <ValuesSection />
    </main>
  )
}
