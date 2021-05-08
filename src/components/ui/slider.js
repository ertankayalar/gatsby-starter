import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

// import Swiper core and required modules
import SwiperCore, { Navigation, Autoplay, Pagination } from 'swiper'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
require('swiper/swiper.scss')
require('swiper/components/navigation/navigation.scss')
require('swiper/components/pagination/pagination.scss')

// install Swiper modules
SwiperCore.use([Navigation, Autoplay, Pagination])

const Slider = ({ children }) => {
  return (
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
      {children}
    </Swiper>
  )
}

export default Slider
