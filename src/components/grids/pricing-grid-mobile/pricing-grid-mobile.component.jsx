import React from 'react';

import { priceDetails } from '../../../data/details/price-details.data';
import PriceCard from '../../cards/price-card/PriceCard';
import PriceCardBody from '../../cards/price-card/PriceCardBody';

import {
  VStack, 
} from '@chakra-ui/react';

const PricingGridMobile = () => {
  return (
    <VStack width='full'
            px='32px'
            gap='32px'
            >
      <PriceCard width='full'>
        <PriceCardBody details={priceDetails[0]} />
      </PriceCard>
      <PriceCard width='full'>
        <PriceCardBody details={priceDetails[1]} />
      </PriceCard>
      <PriceCard width='full'>
        <PriceCardBody details={priceDetails[2]} />
      </PriceCard>
      <PriceCard width='full'>
        <PriceCardBody details={priceDetails[4]} />
      </PriceCard>
      <PriceCard width='full'>
        <PriceCardBody details={priceDetails[5]} />
      </PriceCard>
    </VStack>
  );
}

export default PricingGridMobile;