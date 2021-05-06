import React from 'react'
import Container from '../components/layout/container'
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'
import BigButton from '../components/ui/big-button'
import Content from '../components/ui/content'

const Hakkimizda = () => {
  return (
    <Layout>
      <SEO
        title='Hakkımızda'
        description='test açıklama'
        image='/test.jpg'
        article
      />
      <Container>
        <h1 className='text-green-600'>Hakkımızda</h1>

        <Content>
          örnek içerik
          <h2>Örnek Alt başlık</h2>
          <p>örnek içerik</p>
        </Content>
        <BigButton to='/'>Ana Sayfa</BigButton>
      </Container>
    </Layout>
  )
}

export default Hakkimizda
