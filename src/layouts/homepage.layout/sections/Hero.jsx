import React from 'react';
import FreezeShakeAnimatedBox from '../../../components/boxes/animated-boxes/FreezeShakeAnimatedBox';

import { 
  FaInstagram,
  FaLinkedin,
  FaSoundcloud, 
  FaSpotify,
  FaFacebook,
} from 'react-icons/fa';

import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';

//TODO: Add Highlights to hero text
const Hero = () => {
  const iconSize = '58px';

  return (
    <Box id='hero' as='section' px='64px' py='128px' bg='black'>
      <Flex direction="column">
        <Box w='80%'>
          <Heading as='h1' fontSize='64px'>
            <Text noOfLines={3} color='whiteAlpha.900'>
              I'm Jim. A music producer, passionate about helping aspiring rappers discover their sound.
            </Text>
          </Heading>
        </Box>
        <Flex mt='64px' w='30%' justify='space-between' color='whiteAlpha.600'>
          <a  href="https://www.soundcloud.com" 
              aria-label='Soundcloud profile link' 
              target='_blank'>
              <FreezeShakeAnimatedBox>
                <FaSoundcloud fontSize={iconSize}/>
              </FreezeShakeAnimatedBox>
          </a>
          <a  href="https://www.spotify.com" 
              aria-label='Spotify profile link' 
              target='_blank'
              >
              <FreezeShakeAnimatedBox>
                <FaSpotify fontSize={iconSize}/>
              </FreezeShakeAnimatedBox>
          </a>
          <a  href="https://www.facebook.com" 
              aria-label='Facebook profile link' 
              target='_blank'
              >
              <FreezeShakeAnimatedBox>
                <FaFacebook fontSize={iconSize}/>
              </FreezeShakeAnimatedBox>
          </a>
          <a  href="https://www.linkedin.com" 
              aria-label='Linkedin profile link' 
              target='_blank'
              >
              <FreezeShakeAnimatedBox>
                <FaLinkedin fontSize={iconSize}/> 
              </FreezeShakeAnimatedBox>
          </a>
          <a  href="https://www.instagram.com" 
              aria-label='Instagram profile link' 
              target='_blank'>
              <FreezeShakeAnimatedBox>
                <FaInstagram fontSize={iconSize}/>
              </FreezeShakeAnimatedBox>
          </a>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Hero;