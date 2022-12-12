import React from 'react';
import { 
  FaInstagram,
  FaLinkedin,
  FaSoundcloud, 
  FaTwitter,
} from 'react-icons/fa';

import {
  Box,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';

//TODO: Add Highlights to hero text
// Social Links: Twitter, LinkedIn, Instagram, SoundCloud
const Hero = () => {
  const iconSize = '58px';
  return (
    <Box as='section' px='64px' py='128px' bg='black'>
      <Flex direction="column">
        <Box w='80%'>
          <Heading as='h1' fontSize='64px'>
            <Text noOfLines={3} color='whiteAlpha.900'>
              I'm Jim. A music producer, passionate about helping aspiring rappers discover their sound.
            </Text>
          </Heading>
        </Box>
        <Flex mt='64px' w='30%' justify='space-between' color='whiteAlpha.600'>
          <FaSoundcloud fontSize={iconSize}/>
          <FaTwitter fontSize={iconSize}/>
          <FaInstagram fontSize={iconSize}/>
          <FaLinkedin fontSize={iconSize}/>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Hero;