"use client"

import { useTypewriter } from "@/hooks/use-typewriter"
import { portfolioData } from "@/models/portfolio-data"
import Image from "next/image"

export function HeroSection() {
  const { displayText: nameText, isComplete: nameComplete } = useTypewriter(portfolioData.contact.name, 150, 500)
  const { displayText: titleText } = useTypewriter(portfolioData.contact.title, 100, nameComplete ? 1000 : 999999)

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative z-10">
      <div className="max-w-6xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-accent text-sm font-mono">Bonjour, je suis</p>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground">
                {nameText}
                <span className="animate-pulse text-accent">|</span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold text-muted-foreground">
                {titleText}
                {titleText && <span className="animate-pulse text-accent">|</span>}
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Passionné par la création d'expériences web modernes et performantes. Je transforme des idées en
              applications élégantes et fonctionnelles.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={`tel:${portfolioData.contact.phone}`}
                className="px-6 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent/20"
              >
                Me Contacter
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-all"
              >
                Voir Mes Projets
              </a>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative mt-8">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl animate-pulse" />
              <div className="relative w-80 h-64 md:w-96 md:h-80 rounded-full overflow-hidden border-4 border-accent/30 shadow-2xl shadow-accent/20">
                <Image
                  src="/images/profile.png"
                  alt={portfolioData.contact.name}
                  fill
                  className="object-center bg-card"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
