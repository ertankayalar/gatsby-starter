import React from 'react'
import Container from '@components/Container'
import Seo from '@components/Seo'
import Layout from '@layouts/main'
const Iletisim = () => {
  return (
    <Layout>
      <Seo title='İletişim' description='bize ulaşın' image='/test.jpg' />
      <Container>
        <h1>İletişim</h1>
      </Container>
    </Layout>
  )
}

export default Iletisim
