type Screen = Record<string, number>

const DEFAULT_SCREEN = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
} as const

type DefaultScreen = typeof DEFAULT_SCREEN

const getViewports = <S extends Screen>(screen: S) =>
  (Object.keys(screen) as (keyof S & string)[]).sort((a, b) => screen[a] - screen[b])

export { DEFAULT_SCREEN, getViewports }
export type { Screen, DefaultScreen }
