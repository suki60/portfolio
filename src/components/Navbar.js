import { useViewport } from '@/contexts/ViewportContext'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Button from './Button'
import Burger from './Burger'

const Menu = ({ open }) => {
  return (
    <nav
      className={`flex w-[55%] transform flex-col justify-center bg-violet-100 ${
        open ? 'translate-x-0' : '-translate-x-full'
      } absolute top-0 left-0 z-50 mx-auto h-screen transition-transform duration-300`}
    >
      <div className='mx-auto flex flex-col gap-3 text-center'>
        <Link href='/'>home</Link>
        <Link href='contact'>contact</Link>
        <Button />
      </div>
    </nav>
  )
}

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
