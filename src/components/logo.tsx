import React from 'react'

import Image from 'next/image'

type LogoProps = {
  src: string
  alt: string
  size: number | string
}

const Logo = ({ src, alt, size }: LogoProps) => (
  <div className='relative' style={{ height: size, width: size }}>
    <Image
      alt={alt}
      className='object-contain'
      src={src}
      fill
    />
  </div>
)

export default Logo
