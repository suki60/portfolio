import React from 'react'

import Link from 'next/link'

const pad = i => String(i + 1).padStart(2, '0')

const Project = ({ project, index }) => {
  const accent = index === 0
  const stripe = accent ? 'rgba(10,10,10,0.16)' : 'rgba(10,10,10,0.10)'

  return (
    <Link
      href={project.href || '#'}
      className='block border-2 border-black bg-white p-[18px] shadow-[8px_8px_0_#0a0a0a] transition-all duration-150 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[12px_12px_0_#c3b5fd] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0_#0a0a0a]'
      style={{ fontFamily: 'var(--font-inter)' }}
    >
      {/* thumbnail placeholder */}
      <div
        className={`flex h-[150px] items-end border-2 border-black ${accent ? 'bg-violet-300' : 'bg-white'}`}
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, ${stripe} 0, ${stripe} 1px, transparent 1px, transparent 9px)`,
        }}
      >
        <span
          className='px-2 py-1.5'
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.04em',
            color: accent ? '#0a0a0a' : 'rgba(10,10,10,0.55)',
          }}
        >
          [ {project.name} — screenshot ]
        </span>
      </div>

      {/* title row */}
      <div className='mt-4 flex items-baseline justify-between'>
        <div className='lowercase' style={{ fontWeight: 900, fontSize: 34, letterSpacing: '-0.03em' }}>
          {project.name}
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700 }}>{pad(index)}</div>
      </div>
      <div className='mt-1' style={{ fontWeight: 300, fontSize: 15 }}>
        {project.description}
      </div>

      {/* meta footer */}
      <div
        className='mt-4 flex flex-wrap items-center gap-4 border-t-2 border-black pt-3'
        style={{ fontFamily: 'var(--font-mono)', fontSize: 11 }}
      >
        <span>{project.year}</span>
        <span className='opacity-[0.55]'>{project.role}</span>
        <span className='ml-auto bg-violet-300 px-1.5 py-px'>{project.stack}</span>
      </div>
    </Link>
  )
}

export default Project
