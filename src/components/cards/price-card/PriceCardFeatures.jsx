import React from 'react';
import PricingList from '../../lists/PricingList';
import PriceCardButton from '../../buttons/PriceCardButton';
import { FaMixer } from 'react-icons/fa';
import {
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';

const PriceCardFeatures = ({ details={}, hasCTAButton=true, shouldClip=true, isPromo=false}) => {
  return (
    <Flex
      direction='column'
      align={hasCTAButton ? 'space-between' : 'start'}
      justify='center'
      bg={useColorModeValue('gray.50', 'gray.700')}
      borderTopRadius='2xl'
      h='full'
      >
      {
        hasCTAButton ?
        <Flex direction='column' 
              justify='space-between' 
              align='center' 
              h='full'
        >
          <PricingList icon={FaMixer} details={details} isPromo={isPromo}/>
          <PriceCardButton />
        </Flex>
        :
        <PricingList icon={FaMixer} details={details}/>
      }
    </Flex>
  );
}

export default PriceCardFeatures;