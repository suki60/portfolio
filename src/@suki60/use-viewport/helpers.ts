import { UAParser } from 'ua-parser-js'

import { DEFAULT_SCREEN, getViewports, type Screen } from './constants'

const DEFAULT_VIEWPORTS = getViewports(DEFAULT_SCREEN)

const getMinWidthMediaQuery = (width: number): string => `(min-width: ${width}px)`

const createBreakpointHelpers = <V extends string>(selectedViewport: V, viewports: V[]) => {
  const is = (breakpoint: V): boolean => selectedViewport === breakpoint

  const up = (breakpoint: V): boolean => {
    const breakpointIndex = viewports.indexOf(breakpoint)
    const selectedIndex = viewports.indexOf(selectedViewport)
    return breakpointIndex !== -1 && selectedIndex >= breakpointIndex
  }

  const down = (breakpoint: V): boolean => {
    const breakpointIndex = viewports.indexOf(breakpoint)
    const selectedIndex = viewports.indexOf(selectedViewport)
    return breakpointIndex !== -1 && selectedIndex !== -1 && selectedIndex <= breakpointIndex
  }

  return { is, up, down }
}

const getServerViewport = <V extends string>(userAgent: string, viewports: V[] = DEFAULT_VIEWPORTS as V[]): V => {
  const ua = UAParser(userAgent)
  const deviceType = ua.device.type

  if (deviceType === 'mobile') return viewports[0]
  if (deviceType === 'tablet') return viewports[1] ?? viewports[0]
  return viewports[viewports.length - 1]
}

const getClientViewport = <S extends Screen, V extends keyof S & string>(screen: S, viewports: V[]): V => {
  const viewport = [...viewports].reverse().find(v => window.matchMedia(getMinWidthMediaQuery(screen[v])).matches)
  return viewport ?? viewports[0]
}

export { getMinWidthMediaQuery, createBreakpointHelpers, getServerViewport, getClientViewport }
