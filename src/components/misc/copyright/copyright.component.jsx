import React from 'react';

import {
  responsiveTextAlign,
  responsiveCopyrightVerticalPadding,
  responsiveCopyrightLeadTextFontSize,
  responsiveCopyrightAltTextFontSize,
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
      <Text fontWeight='semibold'
            fontSize={responsiveCopyrightLeadTextFontSize}
            >
        © {new Date().getFullYear()} Spight on Sight, Home Studio.
      </Text>
      <Text fontWeight='hairline'
            fontSize={responsiveCopyrightAltTextFontSize}
            >
        All rights reserved.
      </Text>
    </Box>
  );
}

export default Copyright;