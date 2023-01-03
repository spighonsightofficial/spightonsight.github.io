import React from 'react';

import {
  responsiveBodyTextFontSizeSmaller,
} from '../../../utils/global_responsive_values.utility';

import {
  responsiveTextBlockTextAlign,
  responsiveTextBlockHeaderFontSize,
  responsiveTextBlockBodyFontSize,
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
          justify='center' 
          align='center'
          pt={responsiveTextBlockVerticalPaddingTop}
          pb={responsiveTextBlockVerticalPaddingBottom}
          >
      <Heading fontSize={responsiveTextBlockHeaderFontSize}
               fontWeight='bold'
               >
        {header}
      </Heading>
      <Text noOfLines={5}
            fontSize={responsiveTextBlockBodyFontSize}
            fontWeight='thin' 
            w={responsiveBodyTextBoxWidth}
            textAlign={responsiveTextBlockTextAlign}
            py='8px'
            >
        {body}
      </Text>
    </Flex>
  );
}

export default TextBlock;