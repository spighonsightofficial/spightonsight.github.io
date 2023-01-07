import React from 'react';

import {
  responsiveHorizontalPadding,
  responsiveVerticalPadding,
} from '../../../../utils/global_responsive_values.utility';

import {
  responsiveFontSize,
  responsiveWidth,
  responsiveFlexColumnAlign,
  responsiveFlexColumnJustify,
  responsiveFlexRowJustify,
} from './hero.responsive_values';

import { socialLinks } from '../../../../data/links/social-links.data';
import SocialLink from '../../../../components/links/SocialLink.component';
import {
  Box,
  Flex,
  Heading,
} from '@chakra-ui/react';

// TODO: Add Highlights to hero text
const Hero = () => {
  return (
    <Box id='hero'
         as='section' 
         px={responsiveHorizontalPadding} 
         py={responsiveVerticalPadding}
         bg='black'
         >
      <Flex direction='column' 
            justify={responsiveFlexColumnJustify}
            align={responsiveFlexColumnAlign}
            >
        <Box w='80%'>
          <Heading as='h1' 
                   fontSize={responsiveFontSize}
                   color='whiteAlpha.900'
                   >
              I'm Jim. A music producer, passionate about helping aspiring artists discover their sound.
          </Heading>
        </Box>
        <Flex mt='64px' 
              w={responsiveWidth} 
              justify={responsiveFlexRowJustify} 
              color='whiteAlpha.600'
              >
            {
              socialLinks.map(
                (link) => <SocialLink link={link} /> 
              )
            }
        </Flex>
      </Flex>
    </Box>
  );
}

export default Hero;