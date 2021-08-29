import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Footer from '@components/Footer'
import Header from '@components/Header'

const Main = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleMainLayoutQuery {
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

export default Main
