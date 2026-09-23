import localFont from 'next/font/local'

export const inter = localFont({
  src: './inter-latin-variable.woff2',
  weight: '100 900',
  variable: '--font-inter',
})

export const mono = localFont({
  src: [
    { path: './space-mono-400-latin.woff2', weight: '400' },
    { path: './space-mono-700-latin.woff2', weight: '700' },
  ],
  variable: '--font-mono',
})
