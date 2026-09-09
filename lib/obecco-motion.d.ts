export {};

declare global {
  interface Window {
    ObeccoMotion?: {
      Motion: new (root?: Document | Element) => MotionInstance;
      heroField: (
        canvas: HTMLCanvasElement | null,
        opts?: Record<string, unknown>
      ) => HeroFieldInstance;
      reduced: () => boolean;
      boot: (
        root?: Document | Element,
        fn?: (m: MotionInstance) => void
      ) => MotionInstance;
    };
  }
}

export interface MotionInstance {
  reveal: () => MotionInstance;
  parallax: () => MotionInstance;
  pointer: () => MotionInstance;
  progress: (
    el: Element | null,
    fn: (p: number, rect?: DOMRectReadOnly) => void,
    mode?: "through" | "sticky" | "exit"
  ) => MotionInstance;
  once: (el: Element | null, fn: () => void) => MotionInstance;
  sync: () => MotionInstance;
  destroy: () => void;
}

export interface HeroFieldInstance {
  setDepth: (d: number) => void;
  destroy: () => void;
}
