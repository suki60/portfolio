'use client'

import React, { useState } from 'react'

import { useViewport } from '@suki60/use-viewport'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import Burger from './burger'
import FaLogo from './fa-logo'
import Menu from './menu'
import ThemeToggle from './theme-toggle'

export const RESUME_URL = '/cv'

export type Page = {
  href: string
  label: string
}

export const PAGES: Page[] = [
  { href: '/', label: 'home' },
  { href: '/contact', label: 'contact' },
  { href: '/projects', label: 'projects' },
]

const Navbar = () => {
  const { up } = useViewport()
  const [open, setOpen] = useState(false)
  const current = usePathname()

  return (
    <header className='relative z-50 bg-ink'>
      <div className='mx-auto flex h-[var(--navbar-height)] max-w-[1536px] items-center justify-between px-6 sm:px-10'>
        <Link href='/' className='flex items-center'>
          <FaLogo />
        </Link>

        {up('md') ? (
          <div className='flex items-center gap-7 text-lg' style={{ fontFamily: 'var(--font-mono)' }}>
            {PAGES.map(p =>
              current === p.href ? (
                <span
                  key={p.href}
                  className="relative font-bold lowercase text-accent light:text-fg before:absolute before:right-full before:content-['['] after:absolute after:left-full after:content-[']']"
                >
                  {p.label}
                </span>
              ) : (
                <Link
                  key={p.href}
                  href={p.href}
                  className='lowercase text-fg decoration-2 underline-offset-4 hover:underline focus-visible:underline'
                >
                  {p.label}
                </Link>
              ),
            )}
            <a
              href={RESUME_URL}
              target='_blank'
              rel='noreferrer'
              className='ml-1.5 border-2 border-accent px-4 py-[7px] font-bold lowercase text-accent transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--color-accent)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none light:border-fg light:bg-accent light:text-fg light:shadow-[4px_4px_0_var(--color-fg)] light:hover:shadow-[6px_6px_0_var(--color-fg)] light:active:shadow-none'
            >
              résumé ↗
            </a>
            <ThemeToggle />
          </div>
        ) : (
          <>
            <Menu open={open} setOpen={setOpen} current={current} />
            <div className='flex items-center gap-3'>
              <ThemeToggle />
              <Burger open={open} setOpen={setOpen} />
            </div>
          </>
        )}
      </div>
    </header>
  )
}

export default Navbar
