import { Metadata } from 'next'

import Project, { ProjectData } from '~/components/project'

export const metadata: Metadata = {
  title: 'projects',
  description: 'things i made',
}

const pad = (i: number) => String(i + 1).padStart(2, '0')

const projects: ProjectData[] = [
  {
    name: 'portfolio',
    description: 'personal portfolio',
    stack: ['next.js', 'tailwind'],
    href: '/',
  },
  {
    name: 'use-viewport',
    description:
      'Type-safe React hook for responsive breakpoints — no innerWidth listeners or media query hacks. up/down/is helpers, SSR-safe.',
    stack: ['react', 'npm'],
    href: 'https://www.npmjs.com/package/@suki60/use-viewport',
  },
]

const Projects = () => (
  <div className='container mt-2 pb-20'>
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
    <div className='mt-11 grid grid-cols-1 gap-7 md:grid-cols-2'>
      {projects.map((project, i) => (
        <Project key={project.name} project={project} index={i} />
      ))}
      <div
        className='flex h-[220px] items-center justify-center border-2 border-dashed border-black'
        style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}
      >
        [ more soon ]
      </div>
    </div>
  </div>
)

export default Projects
