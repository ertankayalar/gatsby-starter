import React from 'react'
import SimpleMenu from '../ui/simple-menu'
import { FOOTER_MENU } from '../../lib/constants'
const Footer = ({ siteTitle }) => {
  return (
    <footer className='w-full mt-20 border-t border-primary-300 bg-primary-50 pt-10'>
      <div className='w-full py-5 text-sm bg-primary-600'>
        <div className='container mx-auto text-primary-50 flex flex-wrap '>
          <div className='w-1/2'>
            &copy; {siteTitle} 2021 - {new Date().getFullYear()}
            <span className='font-bold mx-2'>{siteTitle}</span>
            Tüm hakları saklıdır
          </div>
          <div className='w-1/2 flex flex-wrap items-center justify-end'>
            <SimpleMenu menuItems={FOOTER_MENU} />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
