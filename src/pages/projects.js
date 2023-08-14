import React from 'react'

import Project from '~/components/Project'

const projects = [
  {
    name: 'portfolio',
    description: 'personal portfolio',
    logo: '/logo.svg',
  },
  {
    name: 'whitepepper',
    description: 'simulates white paper',
    logo: '/whitepepper.svg',
  },
]

const Projects = () => (
  <div className='container mt-6'>
    <div className='flex flex-col gap-6'>
      {projects.map(project => (
        <Project key={project.name} project={project} />
      ))}
    </div>
  </div>
)

export default Projects
