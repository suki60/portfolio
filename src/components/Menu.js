import Link from 'next/link'

import Button from './Button'

const Menu = ({ open }) => {
  return (
    <nav
      className={`flex w-[55%] transform flex-col justify-center bg-violet-100 ${
        open ? 'translate-x-0' : '-translate-x-full'
      } absolute top-0 left-0 z-50 mx-auto h-screen transition-transform duration-300`}
    >
      <div className='mx-auto flex flex-col gap-3 text-center'>
        <Link href='/'>home</Link>
        <Link href='contact'>contact</Link>
        <Button />
      </div>
    </nav>
  )
}

export default Menu
