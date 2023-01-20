import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import DemoOne from '../../../assets/demos/demo-1/demo-1.wav';
import DemoTwo from '../../../assets/demos/demo-2/demo-2.wav';
import DrillDemo from '../../../assets/demos/demo-3-drill/drill.wav';
import SetMeFreeDemo from '../../../assets/demos/demo-4-set-me-free/demo-set-me-free.wav';
import SongCardMobile from '../../cards/song-card-mobile/song-card-mobile.component';

import {
  Box,
  Text,
} from '@chakra-ui/react';

const SongCarouselMobile = () => {
  return (
    <Box py='64px' px='16px' w='full' border='1px'>
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
        <SwiperSlide>
          <SongCardMobile src={DemoOne} title={'Demo One'}/>
        </SwiperSlide>
        <SwiperSlide>
          <SongCardMobile src={SetMeFreeDemo} title={'Set Me Free'}/>
        </SwiperSlide>
        <SwiperSlide>
          <SongCardMobile src={DemoTwo} title={'Demo Two'}/>
        </SwiperSlide>
        <SwiperSlide>
          <SongCardMobile src={DrillDemo} title={'Drill Demo'}/>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}

export default SongCarouselMobile;
