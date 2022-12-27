import React from 'react';
import {
  Box,
  useColorModeValue,
} from '@chakra-ui/react';

const PriceCard= ({ children, height, shouldClip=true }) => {
  return (
      <Box
      height={height || null}
      shadow='2xl'
      borderWidth='1px'
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius='xl'
      transition={'box-shadow 1s ease-in-out'}
      _hover={{
        shadow: 'inner',
      }}
      overflow={ shouldClip ? 'clip' : ''}>
       {children}
    </Box>
  );
}

export default PriceCard;