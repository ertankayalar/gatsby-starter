import React from 'react'
import Container from '../components/layout/container'
import Layout from '../components/layout/layout'
import Seo from '../components/seo/seo'
import Content from '../components/ui/content'
import PageHeader from '../components/ui/page-header'
import Cta from '../components/ui/cta'
import { StaticImage } from 'gatsby-plugin-image'

const Hakkimizda = () => {
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
          <div className='w-full p-5'>
            <StaticImage
              src='../images/logo-2020-medium.jpg'
              alt='ek logo'
              layout='fixed'
              width={500}
              height={570}
            />
          </div>
          örnek içerik
          <h2>Örnek Alt başlık</h2>
          <p>örnek içerik</p>
        </Content>
        <Cta
          title='Bize Ulaşın'
          message='Sorularınız mı var ? Yanıtlamaktan memnun oluruz'
          darkMode={true}
        />
      </Container>
    </Layout>
  )
}

export default Hakkimizda
