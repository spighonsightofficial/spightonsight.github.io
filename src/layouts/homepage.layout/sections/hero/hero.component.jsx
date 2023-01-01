import React from 'react';
import {
  responsiveFontSize,
  responsiveNumberOfLines,
  responsiveWidth,
  responsiveFlexColumnAlign,
  responsiveFlexColumnJustify,
  responsiveFlexRowJustify,
} from './hero.responsive_values';

import {
  responsiveHorizontalPadding,
  responsiveVerticalPadding,
} from '../../../../utils/global_responsive_values.utility';

import { socialLinks } from '../../../../data/links/social-links.data';
import SocialLink from '../../../../components/links/SocialLink.component';
import {
  Box,
  Flex,
  Heading,
  Text,
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
                   >
            <Text noOfLines={responsiveNumberOfLines} 
                  color='whiteAlpha.900'
                  >
              I'm Jim. A music producer, passionate about helping aspiring artists discover their sound.
            </Text>
          </Heading>
        </Box>
        <Flex mt='64px' 
              w={responsiveWidth} 
              // border='1px' 
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