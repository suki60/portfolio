import React from 'react'

import Image from 'next/image'

const Logo = ({ src, alt, size }) => (
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
