import React from 'react'
import RightArrow from './svg/RightArrow'
import { Link } from 'gatsby'
import HomeIcon from './svg/HomeIcon'

export default function Breadcrumbs({ items }) {
  const isLast = (i) => {
    return items.length === i + 1
  }

  const Bitem = ({ item, i, isLastItem }) => {
    const lastItemClass = isLastItem ? ' text-gray-400' : ''

    const ShowHomeIcon = () => {
      return item.url === `/` ? <HomeIcon /> : item.name
    }

    return (
      <li className='flex items-center'>
        <Link
          to={item.url}
          className={
            'flex items-center hover:underline overflow-hidden ' + lastItemClass
          }
        >
          <ShowHomeIcon />
          {!isLastItem && <RightArrow />}
        </Link>
      </li>
    )
  }

  return (
    <nav
      className='px-2 my-3 text-xs font-semibold text-gray-500 lg:text-sm md:px-0'
      aria-label='Breadcrumb'
    >
      <ol className='inline-flex p-0 list-none'>
        {items.map((item, i) => (
          <Bitem item={item} key={i} isLastItem={isLast(i)} />
        ))}
      </ol>
    </nav>
  )
}
