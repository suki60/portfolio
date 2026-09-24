import React, { ReactNode } from 'react'

import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'contact',
  description: 'francesc altes — senior software engineer',
}

const NARRATIVE = {
  past: 'studied mechanical engineering, but made the leap into the digital world. spent 8 years at getapp (gartner) — joined as a junior in its startup days, left as senior once it had become a full-grown enterprise company',
  present:
    'took a break, put my bike in a box, landed in japan, and rode it end to end, chasing quiet roads and ramen. came back recharged — now riding the ai wave, building agents, and looking for my next chapter',
  future: 'let\'s make it, together',
}

const Label = ({ children }: { children: ReactNode }) => (
  <span
    className='inline-block border-2 border-black bg-violet-300 px-[9px] py-0.5 uppercase'
    style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 12, letterSpacing: '0.14em' }}
  >
    {children}
  </span>
)

type CardProps = {
  label: string
  children: ReactNode
  accent?: boolean
}

const Card = ({ label, children, accent }: CardProps) => (
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
  <div className='container pb-12 text-center'>
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
          software engineer · barcelona
        </div>
      </div>
    </div>

    {/* cards */}
    <div className='mt-10 grid grid-cols-1 gap-6 text-left md:grid-cols-3'>
      <Card label='past'>{NARRATIVE.past}</Card>
      <Card label='present' accent>
        {NARRATIVE.present}
      </Card>
      <Card label='future'>
        {NARRATIVE.future}{' '}
        <a
          href='mailto:fran.altes@gmail.com'
          className='border-b-2 border-violet-300 text-black no-underline hover:bg-violet-300'
        >
          fran.altes@gmail.com
        </a>{' '}
        <span className='opacity-50'>/</span>{' '}
        <a
          href='https://linkedin.com/in/francesc-altes'
          target='_blank'
          rel='noreferrer'
          className='border-b-2 border-violet-300 text-black no-underline hover:bg-violet-300'
        >
          linkedin
        </a>
      </Card>
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
  </div>
)

export default Contact
