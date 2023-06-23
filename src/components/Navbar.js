import { useViewport } from '~/contexts/ViewportContext'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Button from './Button'
import Burger from './Burger'
import Menu from './Menu'

const Navbar = ({}) => {
  const { up } = useViewport()
  const [open, setOpen] = useState(false)

  return (
    <div className='flex h-[var(--navbar-height)] items-center justify-between px-6'>
      <Link href='/'>
        <Image alt='logo' src='/fa.svg' height={30} width={30} />
      </Link>
      {up('sm') ? (
        <div className='flex items-center gap-6'>
          <Link href='/'>home</Link>
          <Link href='contact'>contact</Link>
          <Button />
        </div>
      ) : (
        <>
          <Menu open={open} />
          <Burger open={open} setOpen={setOpen} />
        </>
      )}
    </div>
  )
}

export default Navbar
