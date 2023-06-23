import Link from 'next/link'
import React from 'react'

const Button = () => (
  <Link
    className='rounded border border-violet-900 py-1 px-2 text-violet-900 hover:bg-violet-600 hover:text-white'
    href='https://drive.google.com/file/d/1zBiam17FE5C2ZuUv4dCdp0Lo3Y6_UEvG/view?usp=sharing'
    target='_blank'
    role='button'
  >
    résumé
  </Link>
)

export default Button
