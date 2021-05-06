import React from 'react'
import Container from '../components/layout/container'
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'

const Hizmetler = () => {
  return (
    <Layout>
      <SEO
        title='Hizmetler'
        description='hizmetler açıklaması'
        image='/test.jpg'
      />
      <Container>
        <h1>Hizmetler</h1>
      </Container>
    </Layout>
  )
}

export default Hizmetler
