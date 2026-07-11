import { BlackrootHero } from "@/components/blackroot-hero"
import { BlackrootStats } from "@/components/blackroot-stats"
import { BlackrootAbout } from "@/components/blackroot-about"
import { BlackrootTeam } from "@/components/blackroot-team"
import { BlackrootJourney } from "@/components/blackroot-journey"
import { BlackrootProjects } from "@/components/blackroot-projects"
import { BlackrootGallery } from "@/components/blackroot-gallery"
import { BlackrootVision } from "@/components/blackroot-vision"
import { BlackrootContact } from "@/components/blackroot-contact"

export default function Page() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden relative">
      {/* Animated Premium Background */}
      <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden">
        {/* Tech Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(1_0_0/0.02)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0/0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]" />
      </div>

      <BlackrootHero />

      <div className="section-divider" />
      <BlackrootStats />

      <div className="section-divider" />
      <BlackrootAbout />

      <div className="section-divider" />
      <BlackrootTeam />

      <div className="section-divider" />
      <BlackrootJourney />

      <div className="section-divider" />
      <BlackrootProjects />

      <div className="section-divider" />
      <BlackrootGallery />

      <div className="section-divider" />
      <BlackrootVision />

      <div className="section-divider" />
      <BlackrootContact />
    </main>
  )
}
