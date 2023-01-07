import React from 'react';

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  InputGroup,
  InputLeftElement,
  Input,
} from '@chakra-ui/react';

const EmailInput = ({ formik, size='lg', required=true}) => {
  return (
    <FormControl isInvalid={formik.errors.email && formik.touched.email} isRequired={required}>
      <FormLabel htmlFor='email'>
        Email Address
      </FormLabel>
      <Input
        id='email'
        name='email'
        type='email'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        placeholder='upnext@future.com'
        size={size}
      />
      <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
    </FormControl>
  );
}

export default EmailInput;