import React from 'react';

import {
  responsiveMessageAreaLabelFontSize,
} from './messagearea.responsive_styles';

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Textarea,
} from '@chakra-ui/react';

const MessageArea = (
  { 
    formik,
    placeholder='Your message goes here...',
    size='lg', 
    required=true, 
    disabled=false, 
    verticalPadding='0px'
  }
) => {
  return (
    <FormControl 
              isInvalid={formik.errors.message && formik.touched.message} 
              isRequired={required}
              isDisabled={disabled}
              py={verticalPadding}
              >
    <FormLabel htmlFor='message'>Your Message</FormLabel>
    <Textarea id='message'
              name='message'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              placeholder={placeholder}
              size={size}
              />
    <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
  </FormControl>

  );
}

export default MessageArea;