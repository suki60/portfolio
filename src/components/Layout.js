import React from 'react'

import Navbar from './Navbar'

const Layout = ({ children }) => (
  <div className='max-w-screen-full overflow-hidden'>
    <Navbar />
    <main>{children}</main>
  </div>
)

export default Layout
