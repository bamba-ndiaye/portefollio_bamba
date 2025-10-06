"use client"

import { useRef } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { GlassCard } from "./glass-card"
import { portfolioData } from "@/models/portfolio-data"

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { isVisible } = useScrollAnimation(sectionRef)

  return (
    <section ref={sectionRef} id="about" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-accent font-mono text-xl">01.</span> À Propos
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <GlassCard
            className={`p-8 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-4 text-accent">Formation</h3>
            <div className="space-y-6">
              {portfolioData.education.map((edu, index) => (
                <div key={index} className="border-l-2 border-accent/30 pl-4">
                  <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                  <p className="text-muted-foreground text-sm">{edu.institution}</p>
                  <p className="text-accent text-sm font-mono">{edu.period}</p>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard
            className={`p-8 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-4 text-accent">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-3">
              {portfolioData.softSkills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-accent">▹</span>
                  <span className="text-sm">{skill}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-accent/20">
              <h4 className="font-semibold mb-3 text-foreground">Langues</h4>
              <div className="space-y-2">
                {portfolioData.languages.map((lang, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{lang.name}</span>
                    <span className="text-accent">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
