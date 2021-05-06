import React from 'react'
import Container from '../components/layout/container'
import Layout from '../components/layout/layout'
import Seo from '../components/seo/seo'
import BigButton from '../components/ui/big-button'
import Content from '../components/ui/content'
import PageHeader from '../components/ui/page-header'
import { graphql } from 'gatsby'
// import Img from 'gatsby-plugin-image'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Img from 'gatsby-image'

const Hakkimizda = ({ data }) => {
  console.log(`data.logo`, data.logo)
  return (
    <Layout>
      <Seo
        title='Hakkımızda'
        description='test açıklama'
        image='/test.jpg'
        article
      />
      <PageHeader title='Hakkımızda' description='profesyonel hizmetler' />
      <Container addClass='py-10'>
        <h1 className='text-green-600'>Hakkımızda</h1>

        <Content>
          örnek içerik
          <h2>Örnek Alt başlık</h2>
          <p>örnek içerik</p>
          {/* <Img fluid={data.file.childImageSharp.fluid} alt='ertan kayalar' /> */}
          {/* <img src={getImage(data.mainImage)} alt='test' /> */}
          <GatsbyImage image={getImage(data.mainImage)} alt={`test`} />
          <GatsbyImage
            image={getImage(data.logo)}
            alt={`test`}
            // width={data.logo.childImageSharp.width}
            // height={data.logo.childImageSharp.height}
          />
          <Img
            fluid={data.logo2.childImageSharp.fluid}
            alt='A corgi smiling happily'
          />
          <img src='/images/ek-logo-2020.png' alt='ek logo' />
        </Content>
        <BigButton to='/'>Ana Sayfa</BigButton>
      </Container>
    </Layout>
  )
}
export const query = graphql`
  query MyQuery {
    mainImage: file(relativePath: { regex: "/logo-2020-medium.jpg/" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, transformOptions: {}, layout: CONSTRAINED)
      }
    }
    logo: file(relativePath: { regex: "/ek-logo-2020.png/" }) {
      childImageSharp {
        gatsbyImageData(
          quality: 80
          width: 280
          transformOptions: {}
          layout: CONSTRAINED
        )
      }
    }
    logo2: file(relativePath: { regex: "/ek-logo-2020.png/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default Hakkimizda
