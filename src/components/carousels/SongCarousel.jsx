import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
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
              <SongCard />
              <SongCard />
            </HStack>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex justify='center' align='center'>
            <HStack spacing={16}>
              <SongCard />
              <SongCard />
            </HStack>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}