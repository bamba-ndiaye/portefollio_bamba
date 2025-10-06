class AnimationController {
  private static instance: AnimationController
  private animations: Map<string, Animation> = new Map()

  private constructor() {}

  static getInstance(): AnimationController {
    if (!AnimationController.instance) {
      AnimationController.instance = new AnimationController()
    }
    return AnimationController.instance
  }

  registerAnimation(id: string, animation: Animation): void {
    this.animations.set(id, animation)
  }

  pauseAll(): void {
    this.animations.forEach((animation) => animation.pause())
  }

  playAll(): void {
    this.animations.forEach((animation) => animation.play())
  }

  removeAnimation(id: string): void {
    this.animations.delete(id)
  }
}

export default AnimationController
