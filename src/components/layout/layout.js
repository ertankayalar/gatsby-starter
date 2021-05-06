import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Footer from './footer'
import Header from './header'
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { title: siteTitle } = data.site.siteMetadata
  return (
    <>
      <Header siteTitle={siteTitle} />
      <main className='min-h-full'>{children}</main>
      <Footer siteTitle={siteTitle} />
    </>
  )
}

export default Layout
