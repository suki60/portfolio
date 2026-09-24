import type { Breakpoint } from './constants'

type MinWidthMediaQuery = `(min-width: ${Breakpoint}px)`
const getMinWidthMediaQuery = (width: Breakpoint): MinWidthMediaQuery => `(min-width: ${width}px)`

const createBreakpointHelpers = (selectedViewport: string | null, keys: string[]) => {
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

const selectViewport = (breakpoints: Breakpoint[], keys: string[]): string | null => {
  let selected: string | null = null

  for (const key of keys) {
    if (window.matchMedia(getMinWidthMediaQuery(breakpoints[key])).matches) {
      selected = key
    }
  }

  return selected
}

export { getMinWidthMediaQuery, createBreakpointHelpers, selectViewport }
