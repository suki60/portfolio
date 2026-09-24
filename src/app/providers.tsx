'use client'

import { ReactNode } from 'react'

import { ViewportProvider, getServerViewport } from '@suki60/use-viewport'

import { ThemeProvider } from '~/contexts/theme-context'

type ProvidersProps = {
  userAgent: string
  children: ReactNode
}

const Providers = ({ userAgent, children }: ProvidersProps) => (
  <ThemeProvider>
    <ViewportProvider ssrViewport={getServerViewport(userAgent)}>{children}</ViewportProvider>
  </ThemeProvider>
)

export default Providers
