import React from 'react';

import { 
  responsiveHeaderFontSize,
  responsiveSubheaderFontSize,
  responsiveBodyTextFontSize,
  responsiveHorizontalPadding,
  responsiveVerticalPadding,
} from '../../../../utils/global_responsive_values.utility';

import {
  responsiveBodyTextBoxWidth,
} from './gallery.responsive_values';

import SongCarousel from '../../../../components/carousels/songcarousel.component';

import {
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';

const Gallery = () => {
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
        <Text fontSize={responsiveBodyTextFontSize}
              color='whiteAlpha.700' 
              fontWeight='thin' 
              w={responsiveBodyTextBoxWidth}
              textAlign='center'
              >
          Music is collaborative. Like what you hear? Let's connect.
        </Text>
      </Flex>
      <SongCarousel />
    </Flex>
  );
}

export default Gallery;