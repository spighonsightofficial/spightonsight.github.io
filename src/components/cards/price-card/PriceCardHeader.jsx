import React from 'react';
import {
  Flex,
  Text,
  HStack,
} from '@chakra-ui/react';


const PriceCardHeader = ({ details={}, fontSize='32px', isPromo=false}) => {
  const { header, rateType, rate, subtext } = details;
  return (
    <Flex direction='column' 
          align='center' 
          py='32px' 
          px='4px'
          >
      <Text fontSize={isPromo? '48px' : fontSize} 
            fontWeight='medium' 
            py='8px' 
            >
        {header}
      </Text>
      <Flex align='center'
            justify='center'
            >
      <Text fontSize={isPromo ? '48px' : '40px'} fontWeight='normal'>
          $
        </Text>
        {
          rateType === 'HOURLY' ?
            <HStack>
              <Text fontSize='84px' fontWeight='bold' px='8px'>
                {rate.toFixed(0)}
              </Text>
              <Text fontSize='28px' color='blackAlpha.600'>
                / hour
              </Text>
            </HStack>
          : 
          <HStack>
            <Text fontSize='84px' fontWeight='bold' px='8px'>
              {rate.toFixed(0)}
            </Text>
            <Text fontSize='28px' color='blackAlpha.600'>
              / {subtext}
            </Text>
          </HStack>
        }
      </Flex>
    </Flex>
  );
}

export default PriceCardHeader;