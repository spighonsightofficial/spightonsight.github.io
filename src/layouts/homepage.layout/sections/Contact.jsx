import React from 'react';
import ContactForm from '../../../components/forms/ContactForm';
import {
  Box,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';

const Contact = () => {
  return (
    <Flex id='contact' px='64px' py='128px' justify='space-between' align='center' bg='black'>
      <Box w='50%'>
        <Heading fontSize='64px' color='whiteAlpha.900' pb='8px'>Let's Connect.</Heading>
        <Text fontSize='24px' color='whiteAlpha.700' noOfLines={8} w='70%' textAlign='left'>
          Collaboration is the key to producing quality music. I've got you covered.
        </Text>
      </Box>
      <Box w='50%'>
        <ContactForm />
      </Box>
    </Flex>
  );
}

export default Contact;