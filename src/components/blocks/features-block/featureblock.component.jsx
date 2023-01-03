import React from 'react';

import {
  responsiveFlexDirection,
  responsiveVerticalPadding,
} from './featureblock.responsive_values';

import TextBlock from '../text-block/textblock.component';
import {
  Flex
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
          (policy) => <TextBlock detail={policy} />
        )
       }
      </Flex>
  );
}

export default FeatureBlock;