import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { demos } from '../../../data/items/demo-items.data';
import SongCardMobile from '../../cards/song-card-mobile/song-card-mobile.component';

import {
  Box,
  Text,
} from '@chakra-ui/react';

const SongCarouselMobile = () => {

  return (
    <Box py='64px' px='16px' w='full'>
      <Swiper
        effect={"coverflow"}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
        className="mySwiper"
        onSlideChange={() => console.log("Changed")}
      >
       {
        demos.map(demo => (
          <SwiperSlide key={demo.id}>
            <SongCardMobile src={demo.src} title={demo.title}/>
          </SwiperSlide>
        ))
       }
      </Swiper>
    </Box>
  );
}

export default SongCarouselMobile;
