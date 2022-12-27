import React from 'react';
import PricingGrid from '../../../components/grids/PricingGrid';
import {
  Box,
  Flex,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from '@chakra-ui/react';

const Pricing = () => {
  return (
    <Flex id='pricing' as='section' direction='column' py='128px' align='center'>
      <Heading as='h2' fontSize='48px'>
        Never Overpay Again.
      </Heading>
      <Text color='blackAlpha.700' fontSize='24px' py='16px'>
        Below are the base prices for hourly work. Contact me for package pricing.
      </Text>
      <PricingGrid />
    </Flex>
  );
}

export default Pricing;