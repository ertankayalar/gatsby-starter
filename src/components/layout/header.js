import React from 'react'
import Container from './container'
import MenuIcon from '../ui/menu-icon'
import { MAIN_MENU } from '../../lib/constants'
import { Link } from 'gatsby'
import TopMenu from '../ui/top-menu'

const Header = ({ siteTitle }) => {
  return (
    <header className='w-full bg-gray-100'>
      <section className=' mx-auto max-w-screen-sm md:max-w-screen-sm lg:max-w-screen-lg grid grid-flow-col grid-cols-3 sm:grid-cols-1'>
        <div className='col-span-1 flex justify-center items-center md:justify-start py-5 h-24 md:pl-2 '>
          <span className='text-lg bg-gray-900 mx-auto lg:ml-0 w-16 h-16 rounded'>
            <Link href='/'>
              <a>
                <img src='/logo.png' alt={siteTitle} />
              </a>
            </Link>
          </span>

          <div className='px-4 cursor-pointer hidden text-gray-600' id='burger'>
            <MenuIcon />
          </div>
        </div>

        <div className='col-span-2  h-auto md:h-24 pr-2 flex flex-wrap  items-center justify-end text-primary-700 text-sm'>
          {' '}
          <TopMenu menuItems={MAIN_MENU} />
        </div>
      </section>
      {/* <section className='border-bottom' id='menu'>
      
      </section> */}
    </header>
  )
}

export default Header
