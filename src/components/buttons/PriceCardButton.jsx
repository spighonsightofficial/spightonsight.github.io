import React from 'react';
import { 
  Box, 
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

const PriceCardButton = ({ variant='outline', colorScheme='purple', hasHorizontalPadding=true, hasVerticalPadding=true }) => {
  return (
    <Box  py={hasVerticalPadding ? '32px' : '0'}
          px={hasHorizontalPadding ? '32px' : '0'}
          width='full'
          bg={useColorModeValue('gray.50', 'gray.700')}
          >
      <Button w='full' colorScheme={colorScheme} variant={variant}>
        More Info
      </Button>
    </Box>
  );
}

export default PriceCardButton;