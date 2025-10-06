import { AnimatedBackground } from "@/components/animated-background"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <AnimatedBackground />
      <Navigation />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <footer className="relative z-10 py-8 text-center border-t border-accent/20">
        <p className="text-muted-foreground text-sm font-mono">
          Conçu et développé par <span className="text-accent">Cheikh Ahmadou Bamba Ndiaye</span>
        </p>
        <p className="text-muted-foreground text-xs mt-2">© 2025 Tous droits réservés</p>
      </footer>
    </div>
  )
}
