import React from 'react';
import {
  Box,
  useColorModeValue,
} from '@chakra-ui/react';

const PriceCard= (
  { children, 
    height='',
    shouldClip=true,
    width='',
    verticalPadding='0px',
    horizontalPadding='0px',
  }
) => {
  return (
      <Box
      height={height}
      width={width}
      shadow='2xl'
      borderWidth='1px'
      // alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius='xl'
      transition={'box-shadow 1s ease-in-out'}
      _hover={{
        shadow: 'inner',
      }}
      overflow={ shouldClip ? 'clip': ''}
      py={verticalPadding} 
      px={horizontalPadding}
      >
       {children}
    </Box>
  );
}

export default PriceCard;