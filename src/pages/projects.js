import { Inter, Space_Mono } from 'next/font/google'
import Head from 'next/head'

import Project from '~/components/Project'

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

const projects = [
  {
    name: 'portfolio',
    description: 'personal portfolio',
    year: '2024',
    role: 'design + dev',
    stack: 'next.js / tailwind',
    href: '/',
  },
  {
    name: 'whitepepper',
    description: 'simulates white paper',
    year: '2023',
    role: 'solo build',
    stack: 'react / canvas',
    href: '#',
  },
  {
    name: 'ledger',
    description: 'a stupidly minimal expense tracker',
    year: '2024',
    role: 'design + dev',
    stack: 'next.js / sqlite',
    href: '#',
  },
  {
    name: 'frame',
    description: 'photo grid + contact-sheet generator',
    year: '2023',
    role: 'weekend hack',
    stack: 'svelte / wasm',
    href: '#',
  },
  {
    name: 'monospace',
    description: 'type specimen playground for mono fonts',
    year: '2022',
    role: 'experiment',
    stack: 'vanilla js',
    href: '#',
  },
]

const pad = i => String(i + 1).padStart(2, '0')

const Projects = () => (
  <>
    <Head>
      <title>projects</title>
      <meta name='description' content='things i made' />
    </Head>
    <div className={`${inter.variable} ${mono.variable} container mt-2 pb-20`}>
      {/* page head */}
      <div className='flex items-end justify-between gap-5'>
        <h1
          className='m-0 lowercase'
          style={{
            fontFamily: 'var(--font-inter)',
            fontWeight: 900,
            fontSize: 92,
            lineHeight: 0.88,
            letterSpacing: '-0.045em',
          }}
        >
          projects
        </h1>
        <div className='pb-2 text-right' style={{ fontFamily: 'var(--font-mono)', fontSize: 12, lineHeight: 1.6 }}>
          <div>[ {pad(projects.length - 1)} entries ]</div>
          <div className='opacity-60'>things i made</div>
        </div>
      </div>

      {/* grid */}
      <div className='mt-11 grid grid-cols-1 gap-7 md:grid-cols-2'>
        {projects.map((project, i) => (
          <Project key={project.name} project={project} index={i} />
        ))}
        <div
          className='flex min-h-[120px] items-center justify-center border-2 border-dashed border-black'
          style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}
        >
          [ more soon ]
        </div>
      </div>
    </div>
  </>
)

export default Projects
