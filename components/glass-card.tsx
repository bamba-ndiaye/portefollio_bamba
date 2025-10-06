import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-xl border border-accent/20 bg-card/40 backdrop-blur-md",
        "shadow-lg shadow-black/20",
        hover &&
          "transition-all duration-300 hover:border-accent/40 hover:shadow-accent/10 hover:shadow-xl hover:-translate-y-1",
        className,
      )}
    >
      {children}
    </div>
  )
}
