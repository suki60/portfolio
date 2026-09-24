import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  transpilePackages: ['@suki60/use-viewport'],
  async rewrites() {
    return process.env.NODE_ENV === 'development'
      ? [
        { source: '/cv', destination: 'https://fran-altes.com/cv' },
        { source: '/cv/:path*', destination: 'https://fran-altes.com/cv/:path*' },
      ]
      : []
  },
}

export default nextConfig
