import React from 'react';

import { 
  responsiveHeaderFontSize,
  responsiveSubheaderFontSize,
  responsiveHorizontalPadding,
  responsiveVerticalPadding,
} from '../../../../utils/global_responsive_values.utility';

import {
  responsiveBodyTextBoxWidth,
} from './gallery.responsive_values';

import { FaArrowRight } from 'react-icons/fa';
import SongGrid from '../../../../components/grids/song-grid/song-grid.component';
import SongCarouselMobile from '../../../../components/carousels/song-carousel-mobile/song-carousel-mobile.component';
import {
  Flex,
  HStack,
  Heading,
  Text,
  useMediaQuery,
  Box,
} from '@chakra-ui/react';

const Gallery = () => {

  const [isUnder500px] = useMediaQuery('(max-width: 500px)');

  return (
    <Flex id='gallery' 
          as='section' 
          px={responsiveHorizontalPadding}
          py={responsiveVerticalPadding}
          bg='black'
          direction='column'
          justify='center'
          align='center'
          >
      <Flex direction='column' 
            align='center' 
            w='full'
            >
        <Heading fontSize={responsiveHeaderFontSize} 
                 color='whiteAlpha.900'
                 >
          My Work.
        </Heading>
        <Text fontSize={responsiveSubheaderFontSize}
              noOfLines={3}
              w='60%'
              textAlign='center'
              pt='32px'
              pb='8px'
              color='whiteAlpha.800'
              fontWeight='semibold'
              >
          Stay. Inspired. Together.
        </Text>
        <br />
        <Text color='whiteAlpha.700' 
              fontWeight='thin' 
              w={responsiveBodyTextBoxWidth}
              textAlign='center'
              >
          Music is collaborative. Like what you hear? Let's connect.
        </Text>
      </Flex>
      {
        isUnder500px ? <SongCarouselMobile/> : <SongGrid />
      }
      {
        isUnder500px && (<HStack>
          <Text fontSize='20px' fontWeight='thin' color='whiteAlpha.900'>Swipe To View</Text>
          <Box color='whiteAlpha.900' fontSize='24px'>
           <FaArrowRight />
          </Box>
        </HStack>)
      }
    </Flex>
  );
}

export default Gallery;