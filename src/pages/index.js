import { Inter, Space_Mono } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'

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

const Home = () => (
  <>
    <Head>
      <title>home</title>
      <meta name='description' content="welcome to my world — i'm francesc altes" />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <div
      className={`${inter.variable} ${mono.variable} flex min-h-[calc(100vh-var(--navbar-height))] flex-col items-center justify-center px-6 text-center`}
    >
      {/* mono location tag */}
      <div className='mb-9 uppercase' style={{ fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '0.18em' }}>
        [ barcelona · design + dev ]
      </div>

      {/* THE WORD GAME — violet box is the hinge:
          "hello" (top) -> hello i'm francesc altes
          "world" (bottom) -> welcome to my world */}
      <div className='grid w-full grid-cols-1 justify-items-center gap-1.5 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] sm:items-center sm:gap-x-[18px] sm:gap-y-0'>
        {/* left phrase — drops to meet "world" */}
        <div className='flex flex-col justify-center sm:justify-self-end'>
          <h1
            className='m-0 whitespace-nowrap lowercase sm:translate-y-[0.675em]'
            style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: '-0.04em',
              fontSize: 'clamp(34px,4.6vw,46px)',
            }}
          >
            welcome to my
          </h1>
        </div>

        {/* the hinge */}
        <span
          className='inline-flex flex-col items-center justify-center bg-violet-300 lowercase'
          style={{
            fontFamily: 'var(--font-mono)',
            fontWeight: 700,
            lineHeight: 1,
            fontSize: 'clamp(34px,4.6vw,46px)',
            color: '#0a0a0a',
            aspectRatio: '16 / 10',
            width: '4.7em',
            border: '2px solid #0a0a0a',
            boxShadow: '5px 5px 0 #0a0a0a',
            padding: '0',
            gap: '0.35em',
          }}
        >
          <span>hello</span>
          <span>world</span>
        </span>

        {/* right phrase — rises to meet "hello" */}
        <div className='flex flex-col justify-center sm:justify-self-start'>
          <h1
            className='m-0 whitespace-nowrap lowercase sm:-translate-y-[0.675em]'
            style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: '-0.04em',
              fontSize: 'clamp(34px,4.6vw,46px)',
            }}
          >
            i&rsquo;m francesc altes
          </h1>
        </div>
      </div>

      {/* CTAs */}
      <div className='mt-12 flex flex-wrap justify-center gap-4'>
        <Link
          href='/projects'
          className='border-2 border-black bg-black px-5 py-2.5 font-bold text-white shadow-[4px_4px_0_#c3b5fd] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#c3b5fd] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none'
          style={{ fontFamily: 'var(--font-inter)', fontSize: 16 }}
        >
          see projects →
        </Link>
        <Link
          href='/contact'
          className='border-2 border-black px-5 py-2.5 font-bold text-black transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#0a0a0a] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none'
          style={{ fontFamily: 'var(--font-inter)', fontSize: 16 }}
        >
          say hello
        </Link>
      </div>
    </div>
  </>
)

export default Home
