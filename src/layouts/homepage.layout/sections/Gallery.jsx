import React from 'react';
import SongCarousel from '../../../components/carousels/SongCarousel';
import {
  Box,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';

const Gallery = () => {
  return (
    <Flex id='gallery' 
          as='section' 
          px='64px' 
          py='128px' 
          bg='black'
          direction='column'
          justify='center'
          align='center'
        >
      <Flex direction='column' align='center' w='full'>
        <Heading fontSize='64px' color='whiteAlpha.900'>My Work.</Heading>
        <Text fontSize='32px' 
              noOfLines={3} 
              w='60%' 
              textAlign='center' 
              pt='32px' 
              pb='8px' 
              color='whiteAlpha.800'
              fontWeight='semibold'>
          Stay. Inspired. Together.
        </Text>
        <br />
        <Text fontSize='28px' color='whiteAlpha.700' fontWeight='thin' w='60%' textAlign='center'>
          Music is collaborative. Like what you hear? Let's connect.
        </Text>
      </Flex>
      <SongCarousel />
    </Flex>
  );
}

export default Gallery;