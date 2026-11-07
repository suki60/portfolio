import { Metadata } from 'next'

import Project, { ProjectData } from '~/components/project'

export const metadata: Metadata = {
  title: 'projects',
  description: 'things i made',
}

const pad = (i: number) => String(i + 1).padStart(2, '0')

const projects: ProjectData[] = [
  {
    name: 'fran-altes.com',
    description: 'my personal website. simple, minimal, mine.',
    stack: ['next.js', 'react', 'typescript', 'tailwind', 'vercel'],
    href: '/',
  },
  {
    name: 'juliafrancesc.com',
    description:
      'my wedding website. lovely custom animations lead guests to an rsvp form. backed by neon, ci backups, google sheets sync and telegram notifications.',
    stack: ['next.js', 'gsap', 'postgres', 'drizzle', 'playwright'],
    href: 'https://www.juliafrancesc.com/',
  },
  {
    name: 'use-viewport',
    install: 'npm i @suki60/use-viewport',
    description:
      'a lightweight react hook for breakpoints. no css show/hide hacks, no resize listeners: one layout, picked on the server.',
    stack: ['react', 'typescript', 'ssr', 'next.js', 'npm'],
    href: 'https://www.npmjs.com/package/@suki60/use-viewport',
  },
]

const Projects = () => (
  <div className='container mx-auto mt-2 px-4 pb-20'>
    {/* page head */}
    <div className='flex flex-wrap items-end justify-between gap-5'>
      <h1
        className='m-0 lowercase'
        style={{
          fontFamily: 'var(--font-inter)',
          fontWeight: 900,
          fontSize: 'clamp(48px,11vw,92px)',
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
    <div className='mt-11 grid auto-rows-fr grid-cols-1 gap-7 md:grid-cols-2'>
      {projects.map(project => (
        <Project key={project.name} project={project} />
      ))}
      <div
        className='flex items-center justify-center border-2 border-dashed border-black'
        style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}
      >
        [ more soon ]
      </div>
    </div>
  </div>
)

export default Projects
