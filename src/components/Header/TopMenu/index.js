import React from 'react'
import { Link } from 'gatsby'
const TopMenu = ({ menuItems }) => {
  return (
    <nav className='flex flex-wrap items-center justify-center  md:ml-0  md:justify-center md:space-x-4 h-auto md:h-14 text-gray-700  bg-gray-100 md:bg-white p-0 px-2'>
      {menuItems.map(({ href, label }) => (
        <Link
          key={`${href}${label}`}
          to={href}
          className='w-full text-left  py-2 md:py-1 px-1 font-header md:w-auto hover:underline'
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}

export default TopMenu
