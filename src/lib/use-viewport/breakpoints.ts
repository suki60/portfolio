const typedKeys = <T extends object>(obj: T) => Object.keys(obj) as (keyof T)[]
const typedValues = <T extends object>(obj: T) => Object.values(obj) as T[keyof T][]

export const SCREEN = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
} as const

export const VIEWPORTS = typedKeys(SCREEN)
export const BREAKPOINTS = typedValues(SCREEN)

type Screen = typeof SCREEN
type Viewport = keyof typeof SCREEN
type Breakpoint = Screen[Viewport]

export const getMinWidthMediaQuery = (width: number): string => `(min-width: ${width}px)`

export const createBreakpointHelpers = (
  selectedViewport: string | null,
  keys: string[],
) => {
  const is = (breakpoint: string): boolean => selectedViewport === breakpoint

  const up = (breakpoint: string): boolean => {
    const breakpointIndex = keys.indexOf(breakpoint)
    return breakpointIndex !== -1 && keys.slice(breakpointIndex).includes(selectedViewport ?? '')
  }

  const down = (breakpoint: string): boolean => {
    const breakpointIndex = keys.indexOf(breakpoint)
    return breakpointIndex !== -1 && keys.slice(0, breakpointIndex + 1).includes(selectedViewport ?? '')
  }

  return { is, up, down }
}

export const selectViewport = (breakpoints: Breakpoint[], keys: string[]): string | null => {
  let selected: string | null = null

  for (const key of keys) {
    if (window.matchMedia(getMinWidthMediaQuery(breakpoints[key])).matches) {
      selected = key
    }
  }

  return selected
}
