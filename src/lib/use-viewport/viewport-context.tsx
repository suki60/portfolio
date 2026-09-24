import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

import { SCREEN, type Breakpoint, VIEWPORTS } from './constants'
import { createBreakpointHelpers, getMinWidthMediaQuery, selectViewport } from './helpers'

type ViewportContextValue = {
  viewport: string | null
}

const ViewportContext = createContext<ViewportContextValue | undefined>(undefined)

const useViewport = (): ViewportContextValue => {
  const context = useContext(ViewportContext)

  if (!context) {
    throw new Error('useViewport must be used within a ViewportProvider')
  }

  return context
}

interface ViewportProviderProps {
  children: ReactNode
  /** Map of breakpoint name -> min-width in px. Defaults to MUI-style breakpoints. */
  breakpoints?: Breakpoint[]
  /** Breakpoint to use for the first server-rendered pass, before matchMedia can run client-side. */
  ssrViewport?: string | null
}

const ViewportProvider = ({ children, breakpoints = SCREEN, ssrViewport = null }: ViewportProviderProps) => {
  const [viewport, setViewport] = useState<string | null>(ssrViewport)

  useEffect(() => {
    const update = () => {
      const v = selectViewport(breakpoints, VIEWPORTS)
      setViewport(selectViewport(breakpoints, VIEWPORTS))
      console.log(v)
    }

    // update in case server Viewport !== client viewport
    update()

    const mediaQueryLists = VIEWPORTS.map(key => window.matchMedia(getMinWidthMediaQuery(breakpoints[key])))

    mediaQueryLists.forEach(mql => mql.addEventListener('change', update))

    return () => {
      mediaQueryLists.forEach(mql => mql.removeEventListener('change', update))
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(breakpoints)])

  const value: ViewportContextValue = {
    viewport,
    ...createBreakpointHelpers(viewport, VIEWPORTS),
  }

  return <ViewportContext.Provider value={value}>{children}</ViewportContext.Provider>
}

export { useViewport, ViewportProvider }
export type { ViewportContextValue, ViewportProviderProps }
