'use client'

import { ReactNode, useEffect } from 'react'

import { ViewportProvider, getServerViewport } from '@suki60/use-viewport'

type ProvidersProps = {
  userAgent: string
  children: ReactNode
}

const Providers = ({ userAgent, children }: ProvidersProps) => {
  // iOS Safari restores pages from the back/forward cache with stale layout; reload instead.
  useEffect(() => {
    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) location.reload()
    }

    window.addEventListener('pageshow', onPageShow)
    return () => window.removeEventListener('pageshow', onPageShow)
  }, [])

  return <ViewportProvider ssrViewport={getServerViewport(userAgent)}>{children}</ViewportProvider>
}

export default Providers
