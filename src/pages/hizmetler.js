import React from 'react'
import Container from '../components/layout/container'
import Layout from '../components/layout/layout'
import Seo from '../components/seo/seo'
import Slider from '../components/ui/slider'
import { SwiperSlide } from 'swiper/react'
import { StaticImage } from 'gatsby-plugin-image'

const Hizmetler = () => {
  return (
    <Layout>
      <Seo
        title='Hizmetler'
        description='hizmetler açıklaması'
        image='/test.jpg'
      />
      <Container>
        <h1>Hizmetler</h1>

        <Slider>
          <SwiperSlide className='text-2xl font-semibold text-green-500'>
            Hizmetler 1
          </SwiperSlide>
          <SwiperSlide>
            <StaticImage
              src='../images/logo-2020-medium.jpg'
              alt='ek logo'
              layout='fixed'
              width={500}
              height={570}
            />
          </SwiperSlide>
          <SwiperSlide>Hizmetler 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Slider>
      </Container>
    </Layout>
  )
}

export default Hizmetler
