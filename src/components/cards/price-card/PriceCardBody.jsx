import React from 'react';
import PriceCardHeader from './PriceCardHeader';
import PriceCardFeatures from './PriceCardFeatures';
import {
  Flex,
} from '@chakra-ui/react';

const PriceCardBody = ({details={}, isHorizontalLayout = false}) => {
  return (
    <>
      {
        isHorizontalLayout ? (
          <Flex direction='row' 
                justify='space-between' 
                pl='64px'
                >
            <PriceCardHeader details={details} />
            <PriceCardFeatures details={details} />
          </Flex>
        )
        :
        (
          <Flex direction='column' h='full'>
            <PriceCardHeader details={details} />
            <PriceCardFeatures details={details} />
          </Flex>
        )
      }
    </>
  );
}

export default PriceCardBody;