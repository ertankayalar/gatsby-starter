import React from 'react'
import Container from '@components/Container'
import Layout from '@layouts/main'
import Seo from '@components/Seo'
import Content from '@components/Content'
import PageHeader from '@components/ui/page-header'
import Cta from '@components/ui/cta'
import { StaticImage } from 'gatsby-plugin-image'
import Breadcrumbs from '@components/Breadcrumbs'
import { BreadcrumbItem } from '@utils/Navigation'

const Hakkimizda = () => {
  const breadcrumbs = [
    BreadcrumbItem('', 'Ana Sayfa'),
    BreadcrumbItem(`hakkimizda/`, `Hakkımızda`),
  ]
  return (
    <Layout>
      <Seo
        title='Hakkımızda'
        description='test açıklama'
        image='/test.jpg'
        article
      />
      <PageHeader title='Hakkımızda' description='profesyonel hizmetler' />
      <div className='w-full mx-auto md:max-w-2xl'>
        <Breadcrumbs items={breadcrumbs} />
      </div>
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
