import React from 'react'

// Clave de FA (misprint), inlined so its colours follow the theme:
// violet over grey in dark, black over violet in light.
const FaLogo = () => (
  <svg width='48' height='48' viewBox='0 0 64 64' role='img' aria-label='logo'>
    <g className='fill-edge light:fill-accent'>
      <path d='M9 11 H51 V49 L39 61 V23 H9 Z' />
      <rect x='55' y='16' width='9' height='9' />
      <rect x='55' y='33' width='9' height='9' />
    </g>
    <g className='fill-accent light:fill-fg'>
      <path d='M6 8 H48 V46 L36 58 V20 H6 Z' />
      <rect x='52' y='13' width='9' height='9' />
      <rect x='52' y='30' width='9' height='9' />
    </g>
  </svg>
)

export default FaLogo
