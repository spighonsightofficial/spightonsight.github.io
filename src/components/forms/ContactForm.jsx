import React from 'react';
import EmailInput from '../inputs/EmailInput';
import TextInput from '../inputs/TextInput';
import MessageArea from '../inputs/input-areas/MessageArea';
import { MdPerson } from 'react-icons/md';
import {
  Box,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';

const ContactForm = () => {
  return (
    <Box  
          borderWidth='1px'
          alignSelf={{ base: 'center', lg: 'flex-start' }}
          borderColor={useColorModeValue('gray.200', 'gray.500')}
          borderRadius='xl'
          transition={'box-shadow 1s ease-in-out'}
          _hover={{
            shadow: 'inner',
          }}
          bg='white'
    >
      <Flex direction='row' 
            align='start' 
            justify='space-between'
            px='16px'
            py='32px'
           >
        <Flex w='50%'
              direction='column'
              pr='16px' 
              py='32px'>
          <EmailInput size='lg'/>
          <TextInput placeholder='Drake' label='First Name' leftIcon={<MdPerson />} size='lg'/>
        </Flex>
        <Box w='50%'>
          <MessageArea />
        </Box>
      </Flex>
    </Box>
  );
}

export default ContactForm;