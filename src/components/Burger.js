import React from 'react'

// Brutalist burger: a hard-bordered square; the three bars cross into an X when open.
const Burger = ({ open, setOpen }) => (
  <button
    type='button'
    aria-label='menu'
    onClick={() => setOpen(!open)}
    className='z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] border-2 border-black bg-white px-2'
  >
    <span
      className={`h-[3px] w-full bg-black transition-all duration-300 ${open ? 'translate-y-[8px] rotate-45' : ''}`}
    />
    <span className={`h-[3px] w-full bg-black transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
    <span
      className={`h-[3px] w-full bg-black transition-all duration-300 ${open ? '-translate-y-[8px] -rotate-45' : ''}`}
    />
  </button>
)

export default Burger
