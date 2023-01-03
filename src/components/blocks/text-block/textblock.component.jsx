import React from 'react';

import {
  responsiveSubheaderFontSize,
  responsiveBodyTextFontSizeSmaller,
} from '../../../utils/global_responsive_values.utility';

import {
  responsiveBodyTextBoxWidth,
  responsiveTextBlockVerticalPaddingTop,
  responsiveTextBlockVerticalPaddingBottom,
} from './textblock.responsive_values';

import {
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';

const TextBlock = ({ detail={} }) => {
  const { header, body } = detail;

  return (
    <Flex direction='column' 
          justify='start' 
          align='center'
          pt={responsiveTextBlockVerticalPaddingTop}
          pb={responsiveTextBlockVerticalPaddingBottom}
          >
      <Heading fontSize={responsiveSubheaderFontSize}
               fontWeight='bold'
               >
        {header}
      </Heading>
      <Text noOfLines={5}
            fontSize={responsiveBodyTextFontSizeSmaller}
            fontWeight='thin' 
            w={responsiveBodyTextBoxWidth}
            textAlign='center' 
            py='8px'
            >
        {body}
      </Text>
    </Flex>
  );
}

export default TextBlock;