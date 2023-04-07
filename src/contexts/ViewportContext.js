import useMediaQuery from '@/hooks/useMediaQuery'
import React, { createContext, useContext } from 'react'

// TODO: add tailwind breakpoints from config
// const config = resolveConfig(tailwindConfig)

const BREAKPOINTS = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
}

const breakpointsKeys = Object.keys(BREAKPOINTS)

const getMinWidthMediaQuery = key => `(min-width: ${BREAKPOINTS[key]}px)`

export const createBreakpointsHelpers = (selectedViewport, keys = ['xs', 'sm', 'md', 'lg', 'xl']) => {
  const is = breakpoint => selectedViewport === breakpoint

  const up = breakpoint => {
    const breakpointIndex = keys.findIndex(key => key === breakpoint)
    return keys.slice(breakpointIndex).includes(selectedViewport)
  }

  const down = breakpoint => {
    const breakpointIndex = keys.findIndex(key => key === breakpoint)
    return keys.slice(0, breakpointIndex + 1).includes(selectedViewport)
  }

  const between = (from, to) => {
    const fromIndex = keys.findIndex(key => key === from)
    const toIndex = keys.findIndex(key => key === to)

    const breakpointsList =
      fromIndex > toIndex ? keys.slice(toIndex, fromIndex + 1) : keys.slice(fromIndex, toIndex + 1)

    return breakpointsList.includes(selectedViewport)
  }
  return { is, down, up, between }
}

const ViewportContext = createContext()

export const useViewport = () => useContext(ViewportContext)

export const ViewportProvider = ({ children, ssrViewport }) => {
  const keys = [...breakpointsKeys].reverse()

  const selectedViewport =
    keys.reduce((output, key) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(getMinWidthMediaQuery(key))
      return !output && matches ? key : output
    }, null) || ssrViewport

  return (
    <ViewportContext.Provider
      value={{
        ...createBreakpointsHelpers(selectedViewport, breakpointsKeys),
        viewport: selectedViewport,
      }}
    >
      {children}
    </ViewportContext.Provider>
  )
}
