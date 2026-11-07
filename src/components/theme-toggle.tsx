'use client'

import React, { useLayoutEffect } from 'react'

export const THEME_KEY = 'theme'

// Hard-bordered square that flips data-theme on <html> between dark and light.
// The inline script in layout.tsx applies the saved choice before first paint.
const ThemeToggle = () => {
  // React's dev remount clears the attribute the inline script set; re-apply it.
  useLayoutEffect(() => {
    const theme = localStorage.getItem(THEME_KEY)
    if (theme) document.documentElement.dataset.theme = theme
  }, [])

  const toggle = () => {
    const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light'
    document.documentElement.dataset.theme = next
    localStorage.setItem(THEME_KEY, next)
  }

  return (
    <button
      type='button'
      aria-label='toggle theme'
      onClick={toggle}
      className='flex h-10 w-10 cursor-pointer items-center justify-center border-2 border-edge bg-ink text-fg transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--color-edge)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none'
    >
      {/* sun in dark mode, moon in light mode */}
      <svg
        className='light:hidden'
        width='20'
        height='20'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2.5'
        strokeLinecap='square'
        aria-hidden='true'
      >
        <circle cx='12' cy='12' r='4' />
        <path d='M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4' />
      </svg>
      <svg
        className='hidden light:block'
        width='20'
        height='20'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2.5'
        strokeLinejoin='miter'
        aria-hidden='true'
      >
        <path d='M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z' />
      </svg>
    </button>
  )
}

export default ThemeToggle
