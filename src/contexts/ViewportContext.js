import useMediaQuery from '@/hooks/useMediaQuery'
import React, { createContext, useContext } from 'react'
import { useTheme } from './ThemeContext'

const getBreakpoints = (screens) => ({
  xs: screens.xs,
  sm: screens.sm,
  md: screens.md,
  lg: screens.lg,
  xl: screens.xl,
})

const getMinWidthMediaQuery = (width) =>
  `(min-width: ${width})`

export const createBreakpointsHelpers = (
  selectedViewport,
  keys = ['xs', 'sm', 'md', 'lg', 'xl']
) => {
  const is = (breakpoint) => selectedViewport === breakpoint

  const up = (breakpoint) => {
    const breakpointIndex = keys.findIndex((key) => key === breakpoint)
    return keys.slice(breakpointIndex).includes(selectedViewport)
  }

  const down = (breakpoint) => {
    const breakpointIndex = keys.findIndex((key) => key === breakpoint)
    return keys.slice(0, breakpointIndex + 1).includes(selectedViewport)
  }

  return { is, down, up }
}

const ViewportContext = createContext()

export const useViewport = () => useContext(ViewportContext)

export const ViewportProvider = ({ children, ssrViewport }) => {
  const theme = useTheme()
  const breakpoints = getBreakpoints(theme.container.screens)
  const keys = Object.keys(breakpoints).reverse()

  const selectedViewport =
    keys.reduce((output, key) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(getMinWidthMediaQuery(breakpoints[key]))

      return !output && matches ? key : output
    }, null) || ssrViewport

  return (
    <ViewportContext.Provider
      value={{
        ...createBreakpointsHelpers(selectedViewport, keys),
        viewport: selectedViewport,
      }}
    >
      {children}
    </ViewportContext.Provider>
  )
}
