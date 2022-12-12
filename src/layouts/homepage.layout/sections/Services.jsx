import React from 'react';
import { FaCheck } from 'react-icons/Fa';
import {
  Box,
  Flex,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
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
        <Text fontSize='28px' noOfLines={3} w='60%' textAlign='center' py='32px' color='whiteAlpha.700'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </Flex>
      <Flex w='full' py='80px' justify='space-around' align='center'>
        <Box textAlign='left'>
          <Heading as='h3' fontSize='48px' color='whiteAlpha.900' py='16px'>Producing</Heading>
          <List pt='16px' textAlign='left' spacing='24px' fontSize='18px' color='whiteAlpha.700'>
            <ListItem>
              <ListIcon as={FaCheck} color={'yellow.400'}/>
              Voice Overs
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheck} color={'yellow.400'}/>
              Creating robust demos
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheck} color={'yellow.400'}/>
              Crafting full productions
            </ListItem>
          </List>
        </Box> 
        <Box textAlign='left'>
          <Heading as='h3' fontSize='48px' color='whiteAlpha.900' py='16px'>Mixing</Heading>
          <List pt='16px' spacing='24px' fontSize='18px' color='whiteAlpha.700'>
            <ListItem>
              <ListIcon as={FaCheck} color={'yellow.400'}/>
              Voice Overs
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheck} color={'yellow.400'}/>
              Creating robust demos
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheck} color={'yellow.400'}/>
              Crafting full productions
            </ListItem>
          </List>
        </Box>
        <Box textAlign='left'>
          <Heading as='h3' fontSize='48px' color='whiteAlpha.900' py='16px'>Tracking</Heading>
          <List pt='16px' spacing='24px' fontSize='18px' color='whiteAlpha.700'>
            <ListItem>
              <ListIcon as={FaCheck} color={'yellow.400'}/>
              Voice Overs
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheck} color={'yellow.400'}/>
              Creating robust demos
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheck} color={'yellow.400'}/>
              Crafting full productions
            </ListItem>
          </List>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Services;