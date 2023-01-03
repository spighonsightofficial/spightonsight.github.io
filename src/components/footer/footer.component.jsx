import React from 'react';

import { 
  FaInstagram,
  FaLinkedin,
  FaSoundcloud, 
  FaSpotify, 
} from 'react-icons/fa';

import { navLinks } from '../../data/links/nav-links.data';
import SocialButtonsBar from '../../components/bars/social-buttons-bar/socialbuttonsbar.component';
import NavLinkBar from '../bars/nav-links-bar/navlinkbar.component';
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
      <NavLinkBar links={navLinks}/>

      <Box borderTopWidth={1}
           borderStyle='inset'
           borderColor={useColorModeValue('blackAlpha.900', 'gray.700')}
           >
        <Flex px='64px'
              py='16px'
              direction={{ base: 'row', md: 'row' }}
              spacing={4}
              justify='space-between'
              align='center'
              >
          <Box>
            <Text fontWeight='semibold'>
              © {new Date().getFullYear()} Spight on Sight, Home Studio.
            </Text>
            <Text fontWeight='hairline'>
              All rights reserved.
            </Text>
          </Box>
          <SocialButtonsBar />
        </Flex>
      </Box>
    </Box>
  );
}
export default Footer;