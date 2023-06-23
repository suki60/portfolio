import Link from 'next/link'
import { useRouter } from 'next/router'

import Button from './Button'

const Menu = ({ open, setOpen }) => {
  const handleOnClick = () => setOpen(false)
  const router = useRouter()
  const currentPage = router.pathname

  return (
    <nav
      className={`flex w-[55%] transform flex-col justify-center bg-violet-100 ${
        open ? 'translate-x-0' : '-translate-x-full'
      } absolute top-0 left-0 z-50 mx-auto h-screen transition-transform duration-300`}
    >
      <div className='mx-auto flex flex-col gap-3 text-center'>
        <Link
          className={currentPage === '/' ? 'pointer-events-none line-through' : ''}
          href='/'
          onClick={handleOnClick}
        >
          home
        </Link>
        <Link
          className={currentPage === '/contact' ? 'pointer-events-none line-through' : ''}
          href='contact'
          onClick={handleOnClick}
        >
          contact
        </Link>
        <Button onClick={handleOnClick} />
      </div>
    </nav>
  )
}

export default Menu
