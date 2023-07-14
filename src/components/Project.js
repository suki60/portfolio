import React from 'react'

import Logo from './Logo'

const Project = ({ project }) => (
  <div className='flex'>
    <Logo size={60} src={project.logo} />
    <div className='ml-6'>
      <h3 className='font-bold italic text-violet-300'>{project.name}</h3>
      <p className='font-light'>{project.description}</p>
    </div>
  </div>
)

export default Project
