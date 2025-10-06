"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "À Propos", href: "#about" },
    { name: "Compétences", href: "#skills" },
    { name: "Projets", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-accent/20 shadow-lg" : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-accent font-mono">
            BN
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-muted-foreground hover:text-accent transition-colors font-mono text-sm"
                >
                  <span className="text-accent">0{index + 1}.</span> {item.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="px-4 py-2 border border-accent text-accent rounded hover:bg-accent/10 transition-all text-sm font-mono"
          >
            Me Contacter
          </a>
        </div>
      </div>
    </nav>
  )
}
