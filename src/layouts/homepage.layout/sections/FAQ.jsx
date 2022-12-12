import React from 'react';
import MultiExpansionAccordion from '../../../components/accordions/MultiExpansionAccordion';
import {
  Flex,
  Heading,
  Box,
  Text,
} from '@chakra-ui/react';

const FAQ = () => {
  return (
    <Flex as='section' 
          py='128px'
          px='64px' 
          justify='space-between' 
          align='center'
          bg='black'>
      <Box w='50%'>
        <Heading color='whiteAlpha.900' fontSize='64px'>FAQs.</Heading>
        <Text noOfLines={5} w='75%' fontSize='24px' py='16px' color='whiteAlpha.700' textAlign='start'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet non curabitur gravida arcu ac tortor.
        </Text>
      </Box>
      <Box w='50%'>
        <MultiExpansionAccordion />
      </Box>
    </Flex>
  );
}

export default FAQ;