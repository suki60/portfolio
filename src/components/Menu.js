import React from 'react'

import Link from 'next/link'

import { PAGES, RESUME_URL } from './Navbar'

// Brutalist slide-in panel: violet field, hard right border, big lowercase links
// with mono index numbers, line-through on the current page, black résumé button.
const Menu = ({ open, setOpen, current }) => {
  const close = () => setOpen(false)

  return (
    <nav
      className={`fixed left-0 top-0 z-40 h-screen w-[74%] max-w-[320px] transform border-r-[3px] border-black bg-violet-300 px-6 pb-8 pt-[calc(var(--navbar-height)+8px)] transition-transform duration-300 ${
        open ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className='flex h-full flex-col'>
        <span className='text-xs uppercase tracking-[0.14em]' style={{ fontFamily: 'var(--font-mono)' }}>
          menu
        </span>

        <div className='mt-6 flex flex-col gap-3.5'>
          {PAGES.map((p, i) => {
            const active = current === p.href
            return (
              <Link
                key={p.href}
                href={p.href}
                onClick={close}
                className={`flex items-baseline gap-3 ${active ? 'pointer-events-none' : ''}`}
              >
                <span className='text-[13px]' style={{ fontFamily: 'var(--font-mono)' }}>
                  0{i + 1}
                </span>
                <span
                  className={`lowercase ${active ? 'line-through opacity-50' : ''}`}
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 900,
                    fontSize: 40,
                    lineHeight: 1,
                    letterSpacing: '-0.03em',
                  }}
                >
                  {p.label}
                </span>
              </Link>
            )
          })}
        </div>

        <a
          href={RESUME_URL}
          target='_blank'
          rel='noreferrer'
          onClick={close}
          className='mt-auto inline-block w-fit border-2 border-black bg-black px-[18px] py-2 font-bold text-violet-300'
          style={{ fontFamily: 'var(--font-inter)', fontSize: 16 }}
        >
          résumé →
        </a>
      </div>
    </nav>
  )
}

export default Menu
