'use client'

import { ViewportProvider, getServerViewport } from '@suki60/use-viewport'

import { ThemeProvider } from '~/contexts/ThemeContext'

const Providers = ({ userAgent, children }) => (
  <ThemeProvider>
    <ViewportProvider ssrViewport={getServerViewport(userAgent)}>{children}</ViewportProvider>
  </ThemeProvider>
)

export default Providers
