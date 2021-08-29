import React, { useRef } from 'react'
import MenuIcon from './svg/MenuIcon'
import { Link, graphql, useStaticQuery } from 'gatsby'
import TopMenu from './TopMenu'

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query siteMainMenuQuery {
      site {
        siteMetadata {
          mainMenu {
            href
            label
          }
        }
      }
    }
  `)

  const { mainMenu } = data.site.siteMetadata

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
      <section className='flex flex-wrap w-full max-w-screen-sm mx-auto md:max-w-screen-sm lg:max-w-screen-lg'>
        <div className='flex items-center justify-center w-full py-5 md:w-1/3 md:justify-start md:pl-2 '>
          <span className='mx-auto text-lg lg:ml-0'>
            <Link href='/'>
              <img src='/images/ek-logo-2020.png' alt={siteTitle} />
            </Link>
          </span>

          <div
            className='right-0 px-4 text-gray-600 cursor-pointer md:hidden'
            id='burger'
            onClick={clickHandler}
          >
            <MenuIcon />
          </div>
        </div>

        <div
          className='flex-wrap items-center justify-end hidden w-full h-auto text-sm md:w-2/3 md:pr-2 lg:flex text-primary-700'
          ref={menu}
        >
          <TopMenu menuItems={mainMenu} />
        </div>
      </section>
      {/* <section className='border-bottom' id='menu'>
      
      </section> */}
    </header>
  )
}

export default Header
