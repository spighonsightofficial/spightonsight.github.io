import React from 'react';
import { servicesDetails as data } from '../../../data/services-details.data';
import IconListItem from '../../../components/lists/IconListItem';
import { FaCheck } from 'react-icons/Fa';
import {
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';

const Services = () => {
  return (
    <Flex id='services'
          as='section' 
          bg='black' 
          px='64px' 
          py='128px' 
          direction='column' 
          align='center'
          >
      <Flex direction='column' align='center' w='full'>
        <Heading fontSize='64px' color='whiteAlpha.900'>Services.</Heading>
        <Text fontSize='32px' 
              noOfLines={3} 
              w='60%' 
              textAlign='center' 
              pt='32px' 
              pb='8px' 
              color='whiteAlpha.800'
              fontWeight='semibold'>
          Imagine. Create. Repeat.
        </Text>
        <br />
        <Text fontSize='28px' color='whiteAlpha.700' fontWeight='thin'>
          Here's how I can help bring your sounds to life.
        </Text>
      </Flex>

      <Flex w='full' py='80px' justify='space-around' align='start'>
        {
          data.map((service) => {
            return <IconListItem icon={FaCheck} details={service} />;
          })
        }
      </Flex>
    </Flex>
  );
}

export default Services;