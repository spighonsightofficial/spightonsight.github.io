import React from 'react';
import {
  useMediaQuery
} from '@chakra-ui/react';

import {
  responsiveVerticalPadding,
  responsiveHorizontalPadding,
} from '../../../../utils/global_responsive_values.utility';

import {
  responsiveSubheaderFontSize,
} from './pricing.responsive_values';

import PricingGrid from '../../../../components/grids/PricingGrid';
import PricingGridMobile from '../../../../components/grids/pricing-grid-mobile/pricing-grid-mobile.component';
import {
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';

const Pricing = () => {
  const [isUnder500px] = useMediaQuery("(max-width: 500px)");

  return (
    <Flex id='pricing' 
          as='section' 
          direction='column' 
          align='center'
          px={responsiveHorizontalPadding}
          py={responsiveVerticalPadding}
          >
      <Heading as='h2'
               fontSize={['48px', '48px' , null, '64px', null]}
               textAlign='center'
               >
        Never Overpay Again.
      </Heading>
      <Text color='blackAlpha.700' 
            py='16px'
            fontSize={responsiveSubheaderFontSize}
            textAlign='center'
            >
        Below are the base prices for hourly work. 
        Contact me for package pricing.
      </Text>
      {
        isUnder500px ? <PricingGridMobile /> : <PricingGrid />
      }
    </Flex>
  );
}

export default Pricing;