import * as React from 'react'
import Container from '@components/Container'
import Layout from '@layouts/main'
import Hero from '@components/ui/hero'
import Seo from '@components/Seo'

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Seo
        title='Ana Sayfa'
        description='Ana sayfa açıklama'
        image='/test.jpg'
      />
      <div className='bg-gray-100'>
        <Hero
          heroTitle='Hoşgeldiniz'
          heroMessage='profesyonel hizmet'
          buttonLink='/iletisim/'
          buttonText='Bize Ulaşın'
        />

        <Container>
          <h1 className='text-xl text-indigo-600'>Congratulations</h1>
          <p className='text-lg font-semibold'>tailwindcss setup completed</p>
        </Container>
      </div>
    </Layout>
  )
}

export default IndexPage
