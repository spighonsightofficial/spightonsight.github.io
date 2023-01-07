import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// import {
//   responsiveFromInputHorizontalPadding,
// } from './contact-form.responsive_values';

// import EmailInput from '../../inputs/email-input/email-input.component';
// import TextInput from '../../inputs/text-input/textinput.component';
// import MessageArea from '../../inputs/input-areas/message-area/messagearea.component';
import { MdMail } from 'react-icons/md';
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
    validationSchema: Yup.object({
      firstName: Yup.string()
                    .min(1, 'Name cannot be shorter than 1 character')
                    .max(5, 'Name cannot be longer than 40 characters')
                    .ensure(),
                   
      lastName:  Yup.string()
                    .min(1, 'Name cannot be shorter than 1 character')
                    .max(5, 'Name cannot be longer than 5 characters')
                    .ensure(),

      email: Yup.string().email().ensure(),

      message: Yup.string()
                  .min(5, 'Message cannot be shorter than 5 characters')
                  .max(20, 'Message cannot be longer than 20 characters')
                  .ensure(),
    }),
  });
  
  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md">
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4} align="flex-start">

            <FormControl isInvalid={formik.errors.email && formik.touched.email} isRequired>
              <FormLabel htmlFor='email'>Email Address</FormLabel>
              <Input
                id='email'
                name='email'
                type='email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                placeholder='upnext@future.com'
                size='lg'
              />
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={formik.errors.firstName && formik.touched.firstName} isRequired>
              <FormLabel htmlFor='firstName'>
                First Name
              </FormLabel>
              <Input
                id='firstName'
                name='firstName'
                type='firstName'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                placeholder='Biggie'
                size='lg'
              />
              <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={formik.errors.lastName && formik.touched.lastName} isRequired>
              <FormLabel htmlFor='lastName'>Last Name</FormLabel>
              <Input
                id='lastName'
                name='lastName'
                type='lastName'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                placeholder='Smalls'
                size='lg'
              />
              <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={formik.errors.message && formik.touched.message} isRequired>
              <FormLabel htmlFor='message'>Your Message</FormLabel>
              <Textarea id='message'
                        name='message'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                        placeholder='Your message goes here...'
                        size='lg'
                        />
              <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
            </FormControl>

            <Button type='submit' 
                    colorScheme='purple' 
                    width='full'
                    leftIcon={<MdMail/>}
                    >
              Send
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
}

export default ContactForm;

// <Box  borderRadius='xl'
    //       borderColor={useColorModeValue('gray.200', 'gray.500')}
    //       bg='white'
    //       >
    //   <Flex direction='column'
    //         justify='space-between'
    //         align='center' 
    //         px={responsiveFromInputHorizontalPadding}
    //         py='32px'
    //         >
    //     <EmailInput size='lg' />
    //     <TextInput placeholder='Drake' 
    //                label='First Name' 
    //                leftIcon={<MdPerson />} 
    //                size='lg'
    //                verticalPadding='40px'
    //                />
    //     <MessageArea verticalPadding='16px'/>
    //   </Flex>
    // </Box>