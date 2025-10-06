"use client"

import { useRef } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { GlassCard } from "./glass-card"
import { portfolioData } from "@/models/portfolio-data"

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { isVisible } = useScrollAnimation(sectionRef)

  return (
    <section ref={sectionRef} id="skills" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-accent font-mono text-xl">02.</span> Compétences
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.skills.map((skillGroup, index) => (
            <GlassCard
              key={index}
              className={`p-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-accent">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center gap-2 text-muted-foreground text-sm">
                    <span className="text-accent">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
