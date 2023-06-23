import React from 'react'

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

export default Burger
