import React from 'react'

import Navbar from '~/components/Navbar'
import { inter, mono } from '~/fonts'

const Layout = ({ children }) => (
  <div className={`${inter.variable} ${mono.variable}`} style={{ fontFamily: 'var(--font-inter)' }}>
    <Navbar />
    <main>{children}</main>
  </div>
)

export default Layout
