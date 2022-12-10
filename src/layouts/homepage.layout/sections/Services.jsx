import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';

const Services = () => {
  return (
    <Flex id='section'
          as='section' 
          bg='black' 
          px='64px' 
          py='128px' 
          direction='column' 
          align='center'
          >
      <Flex direction='column' align='center' w='full'>
        <Heading fontSize='64px' color='whiteAlpha.900'>Services.</Heading>
        <Text fontSize='28px' noOfLines={3} w='60%' textAlign='center' py='32px' color='whiteAlpha.700'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </Flex>
      <Flex w='full' py='80px' justify='space-evenly' align='center'>
        <Box align='center'>
          <Heading as='h3' fontSize='48px' color='whiteAlpha.900' py='16px'>Producing</Heading>
          <Text fontSize='18px' color='whiteAlpha.700' noOfLines={4} w='90%'>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Box> 
        <Box align='center'>
          <Heading as='h3' fontSize='48px' color='whiteAlpha.900' py='16px'>Mixing</Heading>
          <Text fontSize='18px' color='whiteAlpha.700' noOfLines={4} w='90%'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Box>
        <Box align='center'>
          <Heading as='h3' fontSize='48px' color='whiteAlpha.900' py='16px'>Tracking</Heading>
          <Text fontSize='18px' color='whiteAlpha.700' noOfLines={4} w='90%'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Services;