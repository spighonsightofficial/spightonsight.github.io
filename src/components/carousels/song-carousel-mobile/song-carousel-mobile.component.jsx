import React from 'react';
import DemoOne from '../../../assets/demos/demo-1/demo-1.wav';
import SetMeFreeDemo from '../../../assets/demos/demo-4-set-me-free/demo-set-me-free.wav';
import SongCard from '../../cards/SongCard';
import {
  VStack,
} from '@chakra-ui/react';

// TODO: Implement vertical swiper
const SongCarouselMobile = () => {
  return (
    <VStack width='full'
            px='32px'
            pt='64px'
            gap='32px'
            >
       <SongCard src={DemoOne} title={'Demo One'}/>
       <SongCard src={SetMeFreeDemo} title={'Set Me Free'}/>
    </VStack>
  );
}

export default SongCarouselMobile;