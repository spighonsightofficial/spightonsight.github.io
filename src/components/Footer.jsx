import React from 'react';
import SocialButton from '../components/buttons/SocialButton';

import { 
  FaInstagram,
  FaLinkedin,
  FaSoundcloud, 
  FaTwitter,
} from 'react-icons/fa';

import {
  Box,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export default function SmallCentered() {
  return (
    <Box  as='footer'
          bg={useColorModeValue('black', 'gray.900')}
          color={useColorModeValue('whiteAlpha.900', 'gray.200')}
    > 
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}>
        <Stack direction={'row'} spacing={6} border='1px'>
          <Link href={'#'}>Home</Link>
          <Link href={'#'}>About</Link>
          <Link href={'#'}>Blog</Link>
          <Link href={'#'}>Contact</Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>© 2022 Spight Sounds. All rights reserved.</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Soundcloud'} href={'#'}>
              <FaSoundcloud />
            </SocialButton>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
            <SocialButton label={'Linkedin'} href={'#'}>
              <FaLinkedin />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}