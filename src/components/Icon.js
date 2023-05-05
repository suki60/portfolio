import React from 'react'
import clsx from 'clsx'

const ICONS = {}

const SIZES = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24,
  '2xl': 32,
}

const Icon = ({ className, color = 'black', icon, size = 'md', ...props }) => {
  const Component = ICONS[icon]

  return (
    <div
      className={clsx('flex items-center justify-center', className)}
      ref={ref}
      style={{ height: SIZES[size], width: SIZES[size] }}
      {...props}
    >
      <Component fill={themeColors[color]} style={{ maxHeight: '100%', maxWidth: '100%' }} />
    </div>
  )
}

Icon.displayName = 'Icon'

export default Icon
