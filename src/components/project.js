import React from 'react'

import Link from 'next/link'

const pad = i => String(i + 1).padStart(2, '0')

const Project = ({ project, index }) => {
  const external = /^https?:\/\//.test(project.href || '')

  return (
    <Link
      href={project.href || '#'}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className='flex h-[220px] flex-col border-2 border-black bg-white p-[22px] shadow-[8px_8px_0_#0a0a0a] transition-all duration-150 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[12px_12px_0_#c3b5fd] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0_#0a0a0a]'
      style={{ fontFamily: 'var(--font-inter)' }}
    >
      {/* title row */}
      <div className='flex items-baseline justify-between'>
        <div className='lowercase' style={{ fontWeight: 900, fontSize: 34, letterSpacing: '-0.03em' }}>
          {project.name}
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700 }}>{pad(index)}</div>
      </div>
      <div
        className='mt-2'
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
        className='mt-auto flex flex-wrap items-center gap-2 border-t-2 border-black pt-3'
        style={{ fontFamily: 'var(--font-mono)', fontSize: 11 }}
      >
        {project.stack.map(tech => (
          <span key={tech} className='bg-violet-300 px-1.5 py-px'>
            {tech}
          </span>
        ))}
      </div>
    </Link>
  )
}

export default Project
