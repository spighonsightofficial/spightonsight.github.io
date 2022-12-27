import React from 'react';
import {
  FormControl,
  FormLabel,
  Textarea,
} from '@chakra-ui/react';

const MessageArea = () => {
  return (
    <FormControl isRequired isDisabled>
      <FormLabel>Message:</FormLabel>
      <Textarea variant='filled' placeholder='Your message here...'/>
    </FormControl>
  );
}

export default MessageArea;