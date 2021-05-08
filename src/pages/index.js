import * as React from 'react'
import Container from '../components/layout/container'
import Layout from '../components/layout/layout'
import Hero from '../components/ui/hero'

// markup
const IndexPage = () => {
  return (
    <Layout>
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
