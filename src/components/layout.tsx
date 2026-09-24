import React, { ReactNode } from 'react'

import Navbar from '~/components/navbar'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <div style={{ fontFamily: 'var(--font-inter)' }}>
    <Navbar />
    <main>{children}</main>
  </div>
)

export default Layout
