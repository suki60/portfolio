import { useViewport } from '@/contexts/ViewportContext'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = ({}) => {
  const { is } = useViewport()

  return (
    <div className='flex justify-between items-center px-6 h-[var(--navbar-height)]'>
      <Link href='/'>
        <Image alt='logo' src='/fa.svg' height={30} width={30} />
      </Link>
      {is('xs') ? (
        <div>burger</div>
      ) : (
        <div className='flex items-center gap-6'>
          <Link href='/'>home</Link>
          <Link href='contact'>contact</Link>
          <a
            className='hover:bg-black text-black hover:text-white py-1 px-2 border border-black rounded'
            href='https://drive.google.com/file/d/1zBiam17FE5C2ZuUv4dCdp0Lo3Y6_UEvG/view?usp=sharing'
            target='_blank'
            role='button'
          >
            résumé
          </a>
        </div>
      )}
    </div>
  )
}

export default Navbar
