import React from 'react';

import {
  responsiveTextAlign,
  responsiveCopyrightVerticalPadding,
} from './copyright.responsive_values';

import {
  Box,
  Text,
} from '@chakra-ui/react';

const Copyright = () => {
  return (
    <Box textAlign={responsiveTextAlign}
         py={responsiveCopyrightVerticalPadding}
         >
      <Text fontWeight='semibold'>
        © {new Date().getFullYear()} Spight on Sight, Home Studio.
      </Text>
      <Text fontWeight='hairline'>
        All rights reserved.
      </Text>
    </Box>
  );
}

export default Copyright;