import React from 'react'

import {
  responsiveTextInputLabelFontSize,
} from './textinput.responsive_values';

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';

const TextInput = (
  { 
    formik, 
    id, 
    name,
    placeholder, 
    size='lg',
    required=true, 
    disabled=false
  }
) => {
  return (
    <FormControl 
          isInvalid={formik.errors.firstName && formik.touched.firstName} 
          isRequired={required}
          isDisabled={disabled}
          >
      <FormLabel htmlFor={id}>
        {renderCorrectLabelName(name)}
      </FormLabel>
      <Input
        id={id}
        name={name}
        type='text'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={renderCorrectValue(name, formik)}
        placeholder={placeholder}
        size={size}
      />
      <FormErrorMessage>
        {renderCorrectError(name, formik)}
      </FormErrorMessage>
    </FormControl>
  )
}

function renderCorrectValue(name, formik) {
  return (name.toLowerCase() === 'firstName'.toLowerCase()) ?
    formik.values.firstName :
    formik.values.lastName;
}

function renderCorrectError(name, formik) {
  return (name.toLowerCase() === 'firstName'.toLowerCase()) ?
    formik.errors.firstName :
    formik.errors.lastName;
}

function renderCorrectLabelName(name) {
  return (name.toLowerCase() === 'firstName'.toLowerCase()) ?
    'First Name' :
    'Last Name';
}

function renderCorrectInvalidCheck(name, formik) {
  return (name.toLowerCase() === 'firstName'.toLowerCase()) ?
    formik.errors.firstName && formik.touched.firstName :
    formik.errors.lastName && formik.touched.lastName
}
export default TextInput