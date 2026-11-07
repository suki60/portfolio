import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'home',
  description: 'welcome to my world — i\'m francesc altes',
}

const Home = () => (
  <div
    className='flex min-h-[calc(100vh-var(--navbar-height))] flex-col items-center justify-center px-6 text-center'
    style={{ transform: 'translateY(calc(var(--navbar-height) / -2))' }}
  >
    {/* mono location tag */}
    <div className='mb-9 uppercase text-muted' style={{ fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '0.18em' }}>
      [ made in barcelona ]
    </div>

    {/* THE WORD GAME — violet box is the hinge:
        "hello" (top) -> hello i'm francesc altes
        "world" (bottom) -> welcome to my world */}
    <div className='grid w-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-x-[8px] gap-y-0 sm:gap-x-[18px]'>
      {/* left phrase — drops to meet "world" */}
      <div className='flex flex-col justify-center justify-self-end'>
        <h1
          className='m-0 whitespace-nowrap lowercase translate-y-[0.675em]'
          style={{
            fontFamily: 'var(--font-inter)',
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: '-0.04em',
            fontSize: 'clamp(12px,3.5vw,46px)',
          }}
        >
          welcome to my
        </h1>
      </div>

      {/* the hinge */}
      <span
        className='inline-flex flex-col items-center justify-center border-2 border-accent bg-ink lowercase text-accent shadow-[5px_5px_0_var(--color-accent)] light:border-fg light:bg-accent light:text-fg light:shadow-[5px_5px_0_var(--color-fg)]'
        style={{
          fontFamily: 'var(--font-mono)',
          fontWeight: 700,
          lineHeight: 1,
          fontSize: 'clamp(12px,3.5vw,46px)',
          aspectRatio: '16 / 10',
          width: '4.7em',
          padding: '0',
          gap: '0.35em',
        }}
      >
        <span>hello</span>
        <span>world</span>
      </span>

      {/* right phrase — rises to meet "hello" */}
      <div className='flex flex-col justify-center justify-self-start'>
        <h1
          className='m-0 whitespace-nowrap lowercase -translate-y-[0.675em]'
          style={{
            fontFamily: 'var(--font-inter)',
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: '-0.04em',
            fontSize: 'clamp(12px,3.5vw,46px)',
          }}
        >
          i&rsquo;m francesc altes
        </h1>
      </div>
    </div>

    {/* CTAs */}
    <div className='relative z-10 mt-12 flex flex-wrap justify-center gap-4'>
      <Link
        href='/projects'
        className='border-2 border-accent bg-accent px-5 py-2.5 font-bold text-ink shadow-[4px_4px_0_var(--color-edge)] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_var(--color-edge)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none light:border-fg light:bg-fg light:text-ink light:shadow-[4px_4px_0_var(--color-accent)] light:hover:shadow-[6px_6px_0_var(--color-accent)] light:active:shadow-none'
        style={{ fontFamily: 'var(--font-inter)', fontSize: 16 }}
      >
        see projects →
      </Link>
      <Link
        href='/contact'
        className='border-2 border-edge bg-ink px-5 py-2.5 font-bold text-fg transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--color-edge)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none'
        style={{ fontFamily: 'var(--font-inter)', fontSize: 16 }}
      >
        say hello
      </Link>
    </div>
  </div>
)

export default Home
