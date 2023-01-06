import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import DemoOne from '../../assets/demos/demo-1/demo-1.wav';
import DemoTwo from '../../assets/demos/demo-2/demo-2.wav';
import DrillDemo from '../../assets/demos/demo-3-drill/drill.wav';
import SetMeFreeDemo from '../../assets/demos/demo-4-set-me-free/demo-set-me-free.wav';
import { demoItems } from '../../data/items/demo-items.data';
import SongCard from '../../components/cards/SongCard';
import {
  HStack,
  Flex,
  Box,
} from '@chakra-ui/react';

export default function App() {
  return (
    <Box pt='64px'>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Flex justify='center' align='center'>
            <HStack spacing={16}>
              <SongCard src={DemoOne} title={'Demo One'}/>
              <SongCard src={SetMeFreeDemo} title={'Set Me Free'}/>
            </HStack>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex justify='center' align='center'>
            <HStack spacing={16}>
              <SongCard src={DemoTwo} title={'Demo Two'}/>
              <SongCard src={DrillDemo} title={'Drill'}/>
            </HStack>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}