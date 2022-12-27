import React from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';

const TextInput = ({ label='', placeholder='placeholder', leftIcon='', size='sm'}) => {
  return (
    <FormControl isRequired isDisabled>
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        <InputLeftElement children={leftIcon}/>
        <Input  type='text'
                placeholder={placeholder} 
                variant='filled'
                size={size}
                />
      </InputGroup>
    </FormControl>
  )
}

export default TextInput