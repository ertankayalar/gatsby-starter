import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import SimpleMenu from '@components/ui/simple-menu'
const Footer = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query siteFooterMenuQuery {
      site {
        siteMetadata {
          footerMenu {
            href
            label
          }
        }
      }
    }
  `)

  const { footerMenu } = data.site.siteMetadata

  return (
    <footer className='w-full pt-10 mt-20 border-t border-primary-300 bg-primary-50'>
      <div className='w-full py-5 text-sm bg-primary-600'>
        <div className='container flex flex-wrap mx-auto text-primary-50 '>
          <div className='w-1/2'>
            &copy; {siteTitle} 2021 - {new Date().getFullYear()}
            <span className='mx-2 font-bold'>{siteTitle}</span>
            Tüm hakları saklıdır
          </div>
          <div className='flex flex-wrap items-center justify-end w-1/2'>
            <SimpleMenu menuItems={footerMenu} />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
