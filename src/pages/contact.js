import React from 'react'

import Image from 'next/image'

const Contact = () => (
  <div className='container -mt-[var(--navbar-height)] flex items-center justify-center sm:h-screen'>
    <div className='mt-6 flex flex-col sm:flex-row'>
      <Image alt='fa picture' className='hidden rounded-3xl sm:block' src='/me-lg.jpeg' width={200} height={2000} />
      <Image
        alt='fa picture'
        className='mx-auto mb-6 rounded-xl sm:hidden'
        src='/me-sm.jpeg'
        width={100}
        height={100}
      />
      <div className='flex flex-col justify-center sm:ml-6'>
        <h3 className='font-bold italic text-violet-300'>past</h3>
        <div className='pb-3'>
          graduated as a mechanical engineering, unsatisfied with job experiences, i looked for something more thrilling
          and challenging. then i found code...
        </div>
        <h3 className='font-bold italic text-violet-300'>present</h3>
        <div className='pb-3'>currently working as a software engineering for capterra, a gartner company</div>
        <h3 className='font-bold italic text-violet-300'>quote</h3>
        <div>
          <span className='font-light'>&quot;simplicity is the ultimate sophistication&quot;</span> - leonardo da vinci
        </div>
        <hr className='my-4' />
        <h3 className='font-bold italic text-violet-300'>contact</h3>
        <div className='pb-3'>fran.altes@gmail.com</div>
      </div>
    </div>
  </div>
)

export default Contact
