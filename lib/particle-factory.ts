export interface Particle {
  id: string
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  type: "ice" | "crystal" | "glow"
}

export class ParticleFactory {
  private static particleCount = 0

  static createParticle(type: "ice" | "crystal" | "glow", width: number, height: number): Particle {
    this.particleCount++

    const baseParticle = {
      id: `particle-${this.particleCount}`,
      x: Math.random() * width,
      y: Math.random() * height,
      size: 0,
      speedX: 0,
      speedY: 0,
      opacity: 0,
      type,
    }

    // STRATEGY PATTERN - Different creation strategies for different particle types
    switch (type) {
      case "ice":
        return {
          ...baseParticle,
          size: Math.random() * 4 + 2,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: Math.random() * 0.3 + 0.1,
          opacity: Math.random() * 0.5 + 0.3,
        }
      case "crystal":
        return {
          ...baseParticle,
          size: Math.random() * 6 + 3,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: Math.random() * 0.2 + 0.05,
          opacity: Math.random() * 0.4 + 0.2,
        }
      case "glow":
        return {
          ...baseParticle,
          size: Math.random() * 8 + 4,
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: Math.random() * 0.15,
          opacity: Math.random() * 0.3 + 0.1,
        }
      default:
        return baseParticle
    }
  }

  static createBatch(count: number, width: number, height: number): Particle[] {
    const particles: Particle[] = []
    const types: Array<"ice" | "crystal" | "glow"> = ["ice", "crystal", "glow"]

    for (let i = 0; i < count; i++) {
      const type = types[Math.floor(Math.random() * types.length)]
      particles.push(this.createParticle(type, width, height))
    }

    return particles
  }
}
