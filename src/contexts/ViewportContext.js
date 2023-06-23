import useMediaQuery from '~/hooks/useMediaQuery'
import React, { createContext, useContext } from 'react'

const BREAKPOINTS = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
}

const keys = Object.keys(BREAKPOINTS)

const getMinWidthMediaQuery = (width) =>
  `(min-width: ${width}px)`

export const createBreakpointsHelpers = (
  selectedViewport,
  keys,
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
  const selectedViewport =
    [...keys].reverse().reduce((output, key) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(getMinWidthMediaQuery(BREAKPOINTS[key]))

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
