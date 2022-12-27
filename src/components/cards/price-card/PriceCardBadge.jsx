import React from 'react';
import {
  Box,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const PriceCardBadge = ({ badgeText }) => {
  return (
    <Box
      position='absolute'
      top='-16px'
      left='50%'
      style={{ transform: 'translate(-50%)' }}>
      <Text
        textTransform='uppercase'
        bg={useColorModeValue('yellow.300', 'red.700')}
        px='8px'
        py='4px'
        color={useColorModeValue('blackAlpha.900', 'gray.300')}
        fontSize='16px'
        fontWeight='semibold'
        rounded='full'>
        {badgeText}
      </Text>
    </Box>
  );
}

export default PriceCardBadge;