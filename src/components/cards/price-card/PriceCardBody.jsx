import React from 'react';
import PriceCardHeader from './PriceCardHeader';
import PriceCardFeatures from './PriceCardFeatures';
import {
  Flex,
} from '@chakra-ui/react';

const PriceCardBody = ({details={}, isHorizontalLayout = false, isPromo=false}) => {
  return (
    <>
      {
        isHorizontalLayout ? (
          <Flex direction='row' 
                justify='space-between' 
                pl='64px'
                >
            <PriceCardHeader details={details} isPromo={isPromo}/>
            <PriceCardFeatures details={details} isPromo={isPromo}/>
          </Flex>
        )
        :
        (
          <Flex direction='column' h='full'>
            <PriceCardHeader details={details} isPromo={isPromo}/>
            <PriceCardFeatures details={details} isPromo={isPromo}/>
          </Flex>
        )
      }
    </>
  );
}

export default PriceCardBody;