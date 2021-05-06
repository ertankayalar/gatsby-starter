import React from 'react'
import { Link } from 'gatsby'
const SimpleMenu = ({ menuItems }) => {
  return (
    <div>
      {menuItems.map(({ href, label }) => (
        <Link to={href} key={href}>
          <a className='text-md hover:underline mr-1'>{label}</a>
        </Link>
      ))}
    </div>
  )
}

export default SimpleMenu
