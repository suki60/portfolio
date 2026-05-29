import React from 'react'

import { Inter, Space_Mono } from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '700', '800', '900'],
  variable: '--font-inter',
})

const mono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
})

const NARRATIVE = {
  past: 'mechanical engineering grad, a builder at heart. the desk jobs never thrilled me — so 8 years ago i took the leap into code, and never looked back.',
  present:
    'senior software engineer at gartner, barcelona. building partner & vendor portals and leading next.js app-router migrations in react + typescript.',
  future: 'pairing an engineer\u2019s mindset with the superpowers of AI to push what\u2019s buildable with code.',
}

const LINKS = [
  { k: 'email', v: 'fran.altes@gmail.com', href: 'mailto:fran.altes@gmail.com' },
  { k: 'site', v: 'fran-altes.com', href: 'https://fran-altes.com' },
  { k: 'github', v: 'suki60', href: 'https://github.com/suki60' },
  { k: 'linkedin', v: 'francesc-altes', href: 'https://linkedin.com/in/francesc-altes' },
]

const Label = ({ children }) => (
  <span
    className='inline-block border-2 border-black bg-violet-300 px-[9px] py-0.5 uppercase'
    style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 12, letterSpacing: '0.14em' }}
  >
    {children}
  </span>
)

const Card = ({ label, children, accent }) => (
  <div
    className={`border-2 border-black bg-white p-5 ${
      accent ? 'shadow-[8px_8px_0_#c3b5fd]' : 'shadow-[8px_8px_0_#0a0a0a]'
    }`}
  >
    <Label>{label}</Label>
    <p
      className='mt-3.5 mb-0'
      style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: 17, lineHeight: 1.5 }}
    >
      {children}
    </p>
  </div>
)

const Contact = () => (
  <>
    <Head>
      <title>contact</title>
      <meta name='description' content='francesc altes — senior software engineer' />
    </Head>

    <div className={`${inter.variable} ${mono.variable} container pt-12 pb-14 text-center`}>
      {/* header */}
      <div className='flex flex-col items-center gap-[22px]'>
        <Image
          alt='francesc altes'
          src='/fa-square.jpg'
          width={128}
          height={128}
          className='rounded-full border-[3px] border-black object-cover shadow-[6px_6px_0_#c3b5fd]'
          style={{ filter: 'saturate(1.02) contrast(1.02)' }}
        />
        <div>
          <h1
            className='m-0 lowercase'
            style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 900,
              fontSize: 'clamp(48px,7vw,80px)',
              lineHeight: 0.86,
              letterSpacing: '-0.05em',
            }}
          >
            francesc altes
          </h1>
          <div
            className='mt-3 uppercase'
            style={{ fontFamily: 'var(--font-mono)', fontSize: 14, letterSpacing: '0.06em' }}
          >
            senior software engineer · barcelona
          </div>
        </div>
      </div>

      {/* cards */}
      <div className='mt-10 grid grid-cols-1 gap-6 text-left sm:grid-cols-3'>
        <Card label='past'>{NARRATIVE.past}</Card>
        <Card label='present' accent>
          {NARRATIVE.present}
        </Card>
        <Card label='future'>{NARRATIVE.future}</Card>
      </div>

      {/* quote */}
      <div className='mt-10 flex flex-col gap-4 bg-black px-9 py-10 text-white'>
        <p
          className='m-0'
          style={{
            fontFamily: 'var(--font-inter)',
            fontWeight: 900,
            fontSize: 'clamp(26px,3.6vw,38px)',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
          }}
        >
          &ldquo;simplicity is the ultimate sophistication&rdquo;
        </p>
        <span className='text-violet-300' style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}>
          — leonardo da vinci
        </span>
      </div>

      {/* links */}
      <div
        className='mt-7 flex flex-wrap justify-center gap-7 border-t-[3px] border-black pt-[18px]'
        style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}
      >
        {LINKS.map(l => (
          <a
            key={l.k}
            href={l.href}
            target={l.href.startsWith('mailto') ? undefined : '_blank'}
            rel='noreferrer'
            className='text-black no-underline'
          >
            <span className='opacity-50'>{l.k} /</span>{' '}
            <span className='border-b-2 border-violet-300 hover:bg-violet-300'>{l.v}</span>
          </a>
        ))}
      </div>
    </div>
  </>
)

export default Contact
