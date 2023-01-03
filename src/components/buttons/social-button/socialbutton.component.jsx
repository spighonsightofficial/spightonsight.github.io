import React from 'react';
import {
  Button,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';

const SocialButton = ({ children, label, href}) => {
  return (
    <Button
      bg={useColorModeValue('whiteAlpha.900', 'whiteAlpha.100')}
      rounded='md'
      w='32px'
      h='32px'
      cursor='pointer'
      as='a'
      href={href}
      transition={'background 0.4s ease'}
      _hover={{
        bg: useColorModeValue('whiteAlpha.700', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </Button>
  );
};

export default SocialButton;