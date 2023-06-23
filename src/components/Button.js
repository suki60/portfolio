import React from 'react'

import Link from 'next/link'

const Button = ({ onClick }) => (
  <Link
    className='rounded border border-black py-1 px-2 text-black hover:bg-black hover:text-white'
    href='https://drive.google.com/file/d/1zBiam17FE5C2ZuUv4dCdp0Lo3Y6_UEvG/view?usp=sharing'
    target='_blank'
    role='button'
    onClick={onClick}
  >
    résumé
  </Link>
)

export default Button
