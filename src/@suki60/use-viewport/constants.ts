const DEFAULT_SCREEN = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}

type Screen = typeof DEFAULT_SCREEN
type Viewport = keyof Screen

export { DEFAULT_SCREEN }

export type { Viewport, Screen }
