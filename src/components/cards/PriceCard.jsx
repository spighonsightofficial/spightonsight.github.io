import React from 'react';
import {
  Box,
  useColorModeValue,
} from '@chakra-ui/react';

const PriceCard = ({ children }) => {
  return (
    <Box
      mb={4}
      shadow='inner'
      borderWidth='1px'
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius='xl'
      transition={'box-shadow 1s ease-in-out s'}
      _hover={{
        shadow: '2xl',
      }}>
      {children}
    </Box>
  );
}

export default PriceCard;