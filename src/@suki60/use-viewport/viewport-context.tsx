import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

import { DEFAULT_SCREEN, getViewports, type Screen } from './constants'
import { createBreakpointHelpers, getClientViewport, getMinWidthMediaQuery } from './helpers'

type ViewportContextValue<V extends string> = {
  viewport: V
  is: (breakpoint: V) => boolean
  up: (breakpoint: V) => boolean
  down: (breakpoint: V) => boolean
}

interface ViewportProviderProps<V extends string> {
  children: ReactNode
  ssrViewport: V
}

const createViewport = <S extends Screen>(screen: S) => {
  type V = keyof S & string

  const viewports = getViewports(screen)

  const ViewportContext = createContext<ViewportContextValue<V> | undefined>(undefined)

  const useViewport = (): ViewportContextValue<V> => {
    const context = useContext(ViewportContext)

    if (!context) {
      throw new Error('useViewport must be used within a ViewportProvider')
    }

    return context
  }

  const ViewportProvider = ({ children, ssrViewport }: ViewportProviderProps<V>) => {
    const [viewport, setViewport] = useState<V>(ssrViewport)

    useEffect(() => {
      const update = () => setViewport(getClientViewport(screen, viewports))

      // update viewport in case server viewport !== client viewport
      update()

      const mediaQueryLists = viewports.map(key => window.matchMedia(getMinWidthMediaQuery(screen[key])))
      mediaQueryLists.forEach(mql => mql.addEventListener('change', update))

      return () => {
        mediaQueryLists.forEach(mql => mql.removeEventListener('change', update))
      }
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

  return { ViewportProvider, useViewport }
}

const { ViewportProvider, useViewport } = createViewport(DEFAULT_SCREEN)

export { createViewport, useViewport, ViewportProvider }
export type { ViewportContextValue, ViewportProviderProps }
