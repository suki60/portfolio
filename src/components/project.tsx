import React from 'react'

import Link from 'next/link'

export type ProjectData = {
  name: string
  description: string
  stack: string[]
  href?: string
}

type ProjectProps = {
  project: ProjectData
}

const Project = ({ project }: ProjectProps) => {
  const external = /^https?:\/\//.test(project.href || '')

  return (
    <Link
      href={project.href || '#'}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className='flex flex-col border-2 border-line bg-ink p-[22px] shadow-[8px_8px_0_var(--color-edge)] transition-all duration-150 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[12px_12px_0_var(--color-accent)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0_var(--color-edge)]'
      style={{ fontFamily: 'var(--font-inter)' }}
    >
      <div className='lowercase' style={{ fontWeight: 900, fontSize: 34, letterSpacing: '-0.03em' }}>
        {project.name}
      </div>
      <div
        className='mt-2 mb-4'
        style={{
          fontWeight: 300,
          fontSize: 15,
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {project.description}
      </div>

      {/* meta footer */}
      <div
        className='mt-auto flex flex-wrap items-center gap-2 border-t-2 border-line pt-3'
        style={{ fontFamily: 'var(--font-mono)', fontSize: 11 }}
      >
        {project.stack.map(tech => (
          <span key={tech} className='border border-accent px-1.5 py-px text-accent light:border-0 light:bg-accent light:text-fg'>
            {tech}
          </span>
        ))}
      </div>
    </Link>
  )
}

export default Project
