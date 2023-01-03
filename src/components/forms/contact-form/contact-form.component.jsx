import React from 'react';

import {
  responsiveFromInputHorizontalPadding,
} from './contact-form.responsive_values';

import EmailInput from '../../inputs/email-input/email-input.component';
import TextInput from '../../inputs/text-input/textinput.component';
import MessageArea from '../../inputs/input-areas/message-area/messagearea.component';
import { MdPerson } from 'react-icons/md';
import {
  Box,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';

const ContactForm = () => {
  return (
    <Box  borderRadius='xl'
          borderColor={useColorModeValue('gray.200', 'gray.500')}
          bg='white'
          >
      <Flex direction='column'
            justify='space-between'
            align='center' 
            px={responsiveFromInputHorizontalPadding}
            py='32px'
            >
        <EmailInput size='lg' />
        <TextInput placeholder='Drake' 
                   label='First Name' 
                   leftIcon={<MdPerson />} 
                   size='lg'
                   verticalPadding='40px'
                   />
        <MessageArea verticalPadding='16px'/>
      </Flex>
    </Box>
  );
}

export default ContactForm;