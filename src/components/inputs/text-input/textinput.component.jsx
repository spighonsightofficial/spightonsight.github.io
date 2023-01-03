import React from 'react'

import {
  responsiveTextInputLabelFontSize,
} from './textinput.responsive_values';

import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';

const TextInput = ({ label='', placeholder='placeholder', leftIcon='', size='sm', required=true, disabled=false, verticalPadding='0px'}) => {
  return (
    <FormControl isRequired={required} 
                 isDisabled={disabled}
                 py={verticalPadding}
                 >
      <FormLabel fontSize={responsiveTextInputLabelFontSize}
                 >
          {label}
      </FormLabel>
      <InputGroup>
        <InputLeftElement children={leftIcon}/>
        <Input type='text'
               placeholder={placeholder} 
               variant='filled'
               size={size}
               />
      </InputGroup>
    </FormControl>
  )
}

export default TextInput