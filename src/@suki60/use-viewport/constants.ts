const DEFAULT_SCREEN = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
}

type Screen = typeof DEFAULT_SCREEN
type Viewport = keyof Screen

export { DEFAULT_SCREEN }

export type { Viewport, Screen }
