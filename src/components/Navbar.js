import React, { useState } from 'react'

import { Inter, Space_Mono } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Burger from './Burger'
import Menu from './Menu'
import { useViewport } from '~/contexts/ViewportContext'

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '700', '800', '900'], variable: '--font-inter' })
const mono = Space_Mono({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-mono' })

export const RESUME_URL = 'https://drive.google.com/file/d/1zBiam17FE5C2ZuUv4dCdp0Lo3Y6_UEvG/view?usp=sharing'

export const PAGES = [
  { href: '/', label: 'home' },
  { href: '/contact', label: 'contact' },
  { href: '/projects', label: 'projects' },
]

const Navbar = () => {
  const { up } = useViewport()
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const current = router.pathname

  return (
    <header
      className={`${inter.variable} ${mono.variable} border-b-2 border-black bg-white`}
      style={{ fontFamily: 'var(--font-inter)' }}
    >
      <div className='mx-auto flex h-[var(--navbar-height)] max-w-[1536px] items-center justify-between px-6 sm:px-10'>
        <Link href='/' className='flex items-center'>
          <Image alt='logo' src='/logo.svg' height={48} width={48} />
        </Link>

        {up('sm') ? (
          <div className='flex items-center gap-[18px]'>
            {PAGES.map(p =>
              current === p.href ? (
                <span
                  key={p.href}
                  className='border-2 border-black bg-black px-3 py-[3px] font-bold lowercase text-white'
                >
                  {p.label}
                </span>
              ) : (
                <Link
                  key={p.href}
                  href={p.href}
                  className='px-1 py-[3px] lowercase text-black underline-offset-4 hover:underline'
                >
                  {p.label}
                </Link>
              )
            )}
            <a
              href={RESUME_URL}
              target='_blank'
              rel='noreferrer'
              className='ml-1.5 border-2 border-black bg-violet-300 px-4 py-[7px] font-bold lowercase text-black shadow-[4px_4px_0_#0a0a0a] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#0a0a0a] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none'
            >
              résumé
            </a>
          </div>
        ) : (
          <>
            <Menu open={open} setOpen={setOpen} current={current} />
            <Burger open={open} setOpen={setOpen} />
          </>
        )}
      </div>
    </header>
  )
}

export default Navbar
