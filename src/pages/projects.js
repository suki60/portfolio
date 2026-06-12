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
]

const Projects = () => (
  <>
    <Head>
      <title>projects</title>
      <meta name='description' content='things i made' />
    </Head>
    <div className={`${inter.variable} ${mono.variable} container mt-2 pb-20`}>
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
