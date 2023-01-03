import React from 'react';

import {
  responsiveEmailInputLabelFontSize,
} from './email-input.responsive_values';

import { MdMail } from 'react-icons/md';
import {
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Input
} from '@chakra-ui/react';

const EmailInput = ({ size='sm', required=true, disabled=false }) => {
  return (
    <FormControl isRequired={required} 
                 isDisabled={disabled}
                 >
      <FormLabel fontSize={responsiveEmailInputLabelFontSize}
                 >
        Email address
      </FormLabel>
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