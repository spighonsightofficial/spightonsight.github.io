import React from 'react';

import {
  responsiveFeatureBlockBoxWidth,
  responsiveFlexDirection,
  responsiveVerticalPadding,
} from './featureblock.responsive_values';

import TextBlock from '../text-block/textblock.component';
import {
  Flex,
  Box,
} from '@chakra-ui/react';

const FeatureBlock = ({ details=[] }) => {
  return (
    <Flex py={responsiveVerticalPadding}
          direction={responsiveFlexDirection}
          justify='space-between'
          align='start'
          >
       {
        details.map(
          (policy) => 
            <Box w={responsiveFeatureBlockBoxWidth}>
              <TextBlock detail={policy} />
            </Box>
        )
       }
      </Flex>
  );
}

export default FeatureBlock;