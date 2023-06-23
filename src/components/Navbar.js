import { useViewport } from '@/contexts/ViewportContext'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

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
        <Link
          className='rounded border border-black py-1 px-2 text-black hover:bg-black hover:text-white'
          href='https://drive.google.com/file/d/1zBiam17FE5C2ZuUv4dCdp0Lo3Y6_UEvG/view?usp=sharing'
          target='_blank'
          role='button'
        >
          résumé
        </Link>
      </div>
    </nav>
  )
}

const Burger = ({ open, setOpen }) => {
  return (
    <button className='z-50 flex h-8 w-8 flex-col justify-around p-0' onClick={() => setOpen(!open)}>
      <div
        className={`h-1 w-full origin-center transform rounded-full bg-black transition-all duration-300 ${
          open ? ' rotate-45' : 'rotate-0'
        }`}
        style={{ transformOrigin: '1px center' }}
      />
      <div
        className={`h-1 w-full transform rounded-full bg-black transition-all duration-300 ${
          open ? 'opacity-0' : 'opacity-100'
        } ${open ? 'translate-x-20' : 'translate-x-0'}`}
      />
      <div
        className={`h-1 w-full origin-center transform rounded-full bg-black transition-all duration-300 ${
          open ? '-rotate-45' : 'rotate-0'
        }`}
        style={{ transformOrigin: '1px center' }}
      />
    </button>
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
          <Link
            className='rounded border border-black py-1 px-2 text-black hover:bg-black hover:text-white'
            href='https://drive.google.com/file/d/1zBiam17FE5C2ZuUv4dCdp0Lo3Y6_UEvG/view?usp=sharing'
            target='_blank'
            role='button'
          >
            résumé
          </Link>
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
