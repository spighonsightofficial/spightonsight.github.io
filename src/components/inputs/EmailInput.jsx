import React from 'react';
import { MdMail } from 'react-icons/md';
import {
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Input
} from '@chakra-ui/react';

const EmailInput = ({ size='sm' }) => {
  return (
    <FormControl isDisabled isRequired>
      <FormLabel>Email address</FormLabel>
      <InputGroup>
        <InputLeftElement pointerEvents='none' children={<MdMail />}/>
        <Input  type='email' 
                variant='filled' 
                placeholder='nextup@future.com'
                size={size}
                />
      </InputGroup>
    </FormControl>
  );
}

export default EmailInput;