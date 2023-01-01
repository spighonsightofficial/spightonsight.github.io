import React from 'react';
import { navLinks } from '../data/links/nav-links.data';
import SocialButton from '../components/buttons/SocialButton';
import NavLink from './links/Navlink';

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

const Footer = () => {
  return (
    <Box  as='footer'
          bg={useColorModeValue('black', 'gray.900')}
          color={useColorModeValue('whiteAlpha.900', 'gray.200')}
    > 
      <Flex
        px='64px'
        justify='center'
        align='center'>
        <Flex w='40%' 
              justify='space-between' 
              fontWeight='thin' 
              fontSize='20px'
              py='32px'>
          {navLinks.map((link) => (
              <NavLink key={link.id} link={link} paddingLR='24px' fontSize='16px'/>
            ))
          }
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
          <Box>
            <Text fontWeight='semibold'>© {new Date().getFullYear()} Spight on Sight, Home Studio.</Text>
            <Text fontWeight='hairline'>All rights reserved.</Text>
          </Box>
          <Flex w='216px' justify='space-between'>
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

export default Footer;