import React, { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Burger from './Burger'
import Button from './Button'
import Menu from './Menu'
import { useViewport } from '~/contexts/ViewportContext'

const Navbar = () => {
  const { up } = useViewport()
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const currentPage = router.pathname

  return (
    <div className='mx-auto flex h-[var(--navbar-height)] max-w-[1536px] items-center justify-between px-6'>
      <Link href='/'>
        <Image alt='logo' src='/fa.svg' height={30} width={30} />
      </Link>
      {up('sm') ? (
        <div className='flex items-center gap-6'>
          <Link className={currentPage === '/' ? 'pointer-events-none line-through' : ''} href='/'>
            home
          </Link>
          <Link className={currentPage === '/contact' ? 'pointer-events-none line-through' : ''} href='/contact'>
            contact
          </Link>
          <Link className={currentPage === '/projects' ? 'pointer-events-none line-through' : ''} href='/projects'>
            projects
          </Link>
          <Button />
        </div>
      ) : (
        <>
          <Menu open={open} setOpen={setOpen} />
          <Burger open={open} setOpen={setOpen} />
        </>
      )}
    </div>
  )
}

export default Navbar
