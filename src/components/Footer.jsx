import React from 'react';
import SocialButton from '../components/buttons/SocialButton';

import { 
  FaInstagram,
  FaLinkedin,
  FaSoundcloud, 
  FaSpotify, 
} from 'react-icons/fa';

import {
  Box,
  Link,
  Flex,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export default function SmallCentered() {
  return (
    <Box  as='footer'
          bg={useColorModeValue('black', 'gray.900')}
          color={useColorModeValue('whiteAlpha.900', 'gray.200')}
          pt='64px'
    > 
      <Flex
        px='64px'
        py='16px'
        justify='start'
        align='center'>
        <Flex w='300px' justify='space-between' fontWeight='thin'>
          <Link href='#'>Works</Link>
          <Link href='#'>Services</Link>
          <Link href='#'>Pricing</Link>
          <Link href='#'>Contact</Link>
          <Link href='#'>FAQs</Link>
        </Flex>
      </Flex>

      <Box
        borderTopWidth={1}
        borderStyle='inset'
        borderColor={useColorModeValue('blackAlpha.900', 'gray.700')}>
        <Flex
          px='64px'
          py='16px'
          direction={{ base: 'row', md: 'row' }}
          spacing={4}
          justify='space-between'
          align='center'>
          <Text fontWeight='semibold'>© 2022 Spight Sounds. All rights reserved.</Text>
          <Flex w='200px' justify='space-evenly'>
            <SocialButton label='Soundcloud' href='#'>
              <Text fontSize='24px'>
               <FaSoundcloud color='black' />
              </Text>
            </SocialButton>
            <SocialButton label='Twitter' href='#'>
              <Text fontSize='24px'>
               <FaSpotify color='black' />
              </Text>
            </SocialButton>
            <SocialButton label='Instagram' href='#'>
              <Text fontSize='24px'>
               <FaLinkedin color='black' />
              </Text>
            </SocialButton>
            <SocialButton label='Linkedin' href='#'>
              <Text fontSize='24px'>
               <FaInstagram color='black' />
              </Text>
            </SocialButton>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}