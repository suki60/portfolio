import { SCREEN, VIEWPORTS, type Breakpoint, type Viewport } from './constants'

type MinWidthMediaQuery = `(min-width: ${Breakpoint}px)`
type BreakpointHelpers = ReturnType<typeof createBreakpointHelpers>

const getMinWidthMediaQuery = (width: Breakpoint): MinWidthMediaQuery => `(min-width: ${width}px)`

const createBreakpointHelpers = (selectedViewport: Viewport, keys: string[]) => {
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


const getClientViewport = (): Viewport => {
  const viewport = VIEWPORTS.toReversed().find((v) => window.matchMedia(getMinWidthMediaQuery(SCREEN[v])).matches)

  return viewport ?? 'xs'
}

export { getMinWidthMediaQuery, createBreakpointHelpers, getClientViewport }
export type { BreakpointHelpers }
