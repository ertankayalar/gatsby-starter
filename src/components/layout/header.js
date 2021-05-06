import React, { useRef } from 'react'
import MenuIcon from '../ui/menu-icon'
import { MAIN_MENU } from '../../lib/constants'
import { Link } from 'gatsby'
import TopMenu from '../ui/top-menu'

const Header = ({ siteTitle }) => {
  const menu = useRef(null)

  const clickHandler = () => {
    console.log(`menu`, menu.current.classList)
    // menu.current.className =
    //   'col-span-2  h-auto md:h-24 pr-2 flex flex-wrap  items-center justify-end text-primary-700 text-sm' +
    //   ' hidden'

    if (menu.current.classList.contains('hidden')) {
      menu.current.classList.remove('hidden')
    } else {
      menu.current.classList.add('hidden')
    }
  }
  return (
    <header className='w-full bg-white'>
      <section className=' mx-auto max-w-screen-sm md:max-w-screen-sm lg:max-w-screen-lg flex flex-wrap w-full '>
        <div className='w-full md:w-1/3 flex justify-center items-center md:justify-start py-5  md:pl-2 '>
          <span className='text-lg  mx-auto lg:ml-0'>
            <Link href='/'>
              <img src='/images/ek-logo-2020.png' alt={siteTitle} />
            </Link>
          </span>

          <div
            className='px-4 cursor-pointer md:hidden text-gray-600 right-0'
            id='burger'
            onClick={clickHandler}
          >
            <MenuIcon />
          </div>
        </div>

        <div
          className='w-full md:w-2/3 h-auto  md:pr-2 lg:flex flex-wrap hidden   items-center justify-end text-primary-700 text-sm'
          ref={menu}
        >
          <TopMenu menuItems={MAIN_MENU} />
        </div>
      </section>
      {/* <section className='border-bottom' id='menu'>
      
      </section> */}
    </header>
  )
}

export default Header
