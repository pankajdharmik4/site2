import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Import from swiper/modules
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/autoplay'; // Import Autoplay styles
import Hero from './Hero';
import Hero1 from './Hero1';
import Hero2 from './Hero2';

const HeroCarousel = ({openModal}) => {
  
  return (
            <Hero openModal={openModal}/>

  );
};

export default HeroCarousel;
