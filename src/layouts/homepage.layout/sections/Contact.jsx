import React from 'react';
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
        <Heading fontSize='64px' color='whiteAlpha.900'>Let's Connect.</Heading>
        <Text fontSize='24px' color='whiteAlpha.700' noOfLines={8} w='70%' textAlign='left'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu cursus euismod quis viverra nibh. Libero justo laoreet sit amet cursus sit amet dictum.
        </Text>
      </Box>
      <Box>
        Contact Form Here
      </Box>
    </Flex>
  );
}

export default Contact;