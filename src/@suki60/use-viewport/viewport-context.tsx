import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

import { DEFAULT_SCREEN, type Screen, type Viewport } from './constants'
import { createBreakpointHelpers, getClientViewport, getMinWidthMediaQuery, typedKeys, type BreakpointHelpers } from './helpers'

type ViewportContextValue = {
  viewport: Viewport
} & BreakpointHelpers

const ViewportContext = createContext<ViewportContextValue | undefined>(undefined)

const useViewport = (): ViewportContextValue => {
  const context = useContext(ViewportContext)

  if (!context) {
    throw new Error('useViewport must be used within a ViewportProvider')
  }

  return context
}

type ViewportProviderProps = {
  children: ReactNode
  ssrViewport: Viewport
  screen?: Screen
}

const ViewportProvider = ({ children, ssrViewport, screen = DEFAULT_SCREEN }: ViewportProviderProps) => {
  const [viewport, setViewport] = useState(ssrViewport)
  const viewports = typedKeys(screen)

  useEffect(() => {
    const update = () => {
      const viewport = getClientViewport(screen)
      setViewport(viewport)
    }

    // update viewport in case server viewport !== client viewport
    update()

    const mediaQueryLists = viewports.map(key => window.matchMedia(getMinWidthMediaQuery(screen[key])))
    mediaQueryLists.forEach(mql => mql.addEventListener('change', update))

    return () => {
      mediaQueryLists.forEach(mql => mql.removeEventListener('change', update))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ViewportContext.Provider
      value={{
        viewport,
        ...createBreakpointHelpers(viewport, viewports),
      }}
    >
      {children}
    </ViewportContext.Provider>
  )
}

export { useViewport, ViewportProvider }
export type { ViewportContextValue, ViewportProviderProps }
