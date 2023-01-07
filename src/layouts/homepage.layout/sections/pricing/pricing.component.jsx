import React from 'react';
import {
  responsiveSubheaderFontSize,
} from './pricing.responsive_values';

import PricingGrid from '../../../../components/grids/PricingGrid';
import {
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';

const Pricing = () => {
  return (
    <Flex id='pricing' 
          as='section' 
          direction='column' 
          py='128px' 
          align='center'
          >
      <Heading as='h2'
               >
        Never Overpay Again.
      </Heading>
      <Text color='blackAlpha.700' 
            py='16px'
            fontSize={responsiveSubheaderFontSize}
            >
        Below are the base prices for hourly work. 
        Contact me for package pricing.
      </Text>
      <PricingGrid />
    </Flex>
  );
}

export default Pricing;