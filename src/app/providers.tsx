'use client'

import { ReactNode } from 'react'

import { ViewportProvider, getServerViewport } from '~/@suki60/use-viewport'

type ProvidersProps = {
  userAgent: string
  children: ReactNode
}

const Providers = ({ userAgent, children }: ProvidersProps) => (
  <ViewportProvider ssrViewport={getServerViewport(userAgent)}>{children}</ViewportProvider>
)

export default Providers
