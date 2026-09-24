import React from 'react'

import Navbar from '~/components/navbar'

const Layout = ({ children }) => (
  <div style={{ fontFamily: 'var(--font-inter)' }}>
    <Navbar />
    <main>{children}</main>
  </div>
)

export default Layout
