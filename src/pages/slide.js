import React from 'react'
import Container from '@components/Container'
import Layout from '@layouts/main'
import { StaticImage } from 'gatsby-plugin-image'

// import Swiper core and required modules
import SwiperCore, { Navigation, Autoplay, Pagination } from 'swiper'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// install Swiper modules
SwiperCore.use([Navigation, Autoplay, Pagination])

// new Swiper('.my-swiper', {
//   // pass modules here
//   modules: [Navigation, Autoplay, Pagination],
//   // ...
// })

const Slide = () => {
  return (
    <Layout>
      <Container>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={true}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide className='text-2xl font-semibold text-green-500'>
            Slide 1
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
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </Container>
    </Layout>
  )
}

export default Slide
