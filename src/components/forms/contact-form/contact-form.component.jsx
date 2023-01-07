import React from 'react';
import { useFormik } from 'formik';
import { formValidationSchema } from '../../../utils/yup-schemas/form_validation.schema.yup';

// import {
//   responsiveFromInputHorizontalPadding,
// } from './contact-form.responsive_values';

import EmailInput from '../../inputs/email-input/email-input.component';
import TextInput from '../../inputs/text-input/textinput.component';
import MessageArea from '../../inputs/input-areas/message-area/messagearea.component';
import {
  Box,
  Flex,
  // useColorModeValue,
  Textarea,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
} from '@chakra-ui/react';


// TODO: convert to Formik component
// TODO: abstract initial values contact_form.logic.js
// TODO: setup Rest button via resetForm & onClick props from Formik
const ContactForm = () => {

  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      message: '',
    },
    onSubmit: (values, { resetForm }) => {
      resetForm();
      alert('Your email has been submitted. We will respond ASAP.');
    },
    onClick: ({ resetForm }) => resetForm(),
    validationSchema: formValidationSchema,
  });
  
  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md">
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <EmailInput formik={formik}/>
            <TextInput formik={formik}
                       id='firstName'
                       name='firstName'
                       placeholder='Biggie'
                       />
            <TextInput formik={formik}
                       id='lastName'
                       name='lastName'
                       placeholder='Smalls'
                       />
            <MessageArea formik={formik} required={false} />
            <Button type='submit' 
                    colorScheme='purple' 
                    width='full'
                    >
              Send
            </Button>
            <Button type='reset'
                    colorScheme='purple'
                    width='full'
                    variant='outline'
                    >
              Clear
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
}

export default ContactForm;