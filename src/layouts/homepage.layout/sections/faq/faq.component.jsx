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
          id='faq' 
          py='128px'
          px='64px' 
          justify='space-between' 
          align='start'
          bg='black'>
      <Box w='50%'>
        <Heading color='whiteAlpha.900' fontSize='64px'>FAQs.</Heading>
        <Text noOfLines={5} w='75%' fontSize='24px' py='16px' color='whiteAlpha.700' textAlign='start'>
          The most commonly asked questions. Don't see your question in the list? No worries. Contact me and I will respond ASAP.
        </Text>
      </Box>
      <Box w='50%'>
        <MultiExpansionAccordion />
      </Box>
    </Flex>
  );
}

export default FAQ;