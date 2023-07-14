import React from 'react'

import Project from '~/components/Project'

const projects = {
  portfolio: {
    name: 'portfolio',
    description: 'personal portfolio',
    logo: '/fa.svg',
  },
}

const Projects = () => (
  <div className='container mt-6'>
    <Project project={projects.portfolio} />
  </div>
)

export default Projects
