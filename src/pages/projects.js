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

const pad = i => String(i + 1).padStart(2, '0')

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
    name: 'use-viewport',
    description: 'react hook + context for responsive breakpoint detection, with ssr support',
    year: '2026',
    role: 'design + dev',
    stack: 'react / npm',
    href: 'https://www.npmjs.com/package/@suki60/use-viewport',
  },
]

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
          className='flex h-[340px] items-center justify-center border-2 border-dashed border-black'
          style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}
        >
          [ more soon ]
        </div>
      </div>
    </div>
  </>
)

export default Projects
