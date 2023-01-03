import React from 'react';

import {
  responsiveFlexDirection,
} from './footer.responsive_styles';

import { navLinks } from '../../data/links/nav-links.data';
import SocialButtonsBar from '../../components/bars/social-buttons-bar/socialbuttonsbar.component';
import NavLinkBar from '../bars/nav-links-bar/navlinkbar.component';
import Copyright from '../misc/copyright/copyright.component';
import {
  Box,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as='footer'
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
              direction={responsiveFlexDirection}
              justify='space-between'
              align='center'
              >
          <Copyright />
          <SocialButtonsBar />
        </Flex>
      </Box>
    </Box>
  );
}
export default Footer;