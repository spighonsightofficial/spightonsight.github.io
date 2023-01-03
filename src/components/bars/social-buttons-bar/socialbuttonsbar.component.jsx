import React from 'react';

import {
  responsiveBarWidth,
  responsiveIconFontSize,
} from './socialbuttonsbar.responsive_values';

import {
  FaSoundcloud,
  FaSpotify,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa';

import { socialLinks } from '../../../data/links/social-links.data';
import SocialButton from '../../buttons/social-button/socialbutton.component';
import {
  Flex,
  Text,
} from '@chakra-ui/react';

const SocialButtonsBar = () => {
  return (
    <Flex w={responsiveBarWidth}
          justify='space-between'
          >
        {
          socialLinks.map(
            (link) => 
              <SocialButton label={link.linkTo} 
                            href={link.href}
                            >
                <Text fontSize={responsiveIconFontSize}
                      >
                    {
                      (link.linkTo === 'soundcloud')  ? <FaSoundcloud color='black' /> :
                      (link.linkTo === 'spotify')     ? <FaSpotify color='black' />    :
                      (link.linkTo === 'facebook')    ? <FaFacebook color='black' />   :
                      (link.linkTo === 'linkedin')    ? <FaLinkedin color='black' />   :
                      (link.linkTo === 'instagram')   ? <FaInstagram color='black' />  :
                      null
                    }    
                </Text>
              </SocialButton>
          )
        }
    </Flex>
  );
}

export default SocialButtonsBar;