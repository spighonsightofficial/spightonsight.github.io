import React from 'react';

import {
  responsiveHeaderFontSize,
  responsiveBodyTextFontSize,
  responsiveHorizontalPadding,
  responsiveVerticalPadding,

} from '../../../../utils/global_responsive_values.utility';

import {
  responsiveHeaderVerticalPadding,
  responsiveBodyTextBoxWidth,
  responsiveFormWidth,
  responsiveFormPaddingTop,
} from './contact.responsive_values';

import ContactForm from '../../../../components/forms/contact-form/contact-form.component';
import {
  Box,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';

const Contact = () => {
  return (
    <Flex id='contact'
          as='section'
          px={responsiveHorizontalPadding}
          py={responsiveVerticalPadding}
          direction='column'
          justify='center'
          align='center'
          bg='black'
          >
      <Flex direction='column' 
            justify='center' 
            align='center'
            >
        <Heading fontSize={responsiveHeaderFontSize} 
                 color='whiteAlpha.900'
                 pb='8px'
                 >
          Let's Connect.
        </Heading>
        <Text fontSize={responsiveBodyTextFontSize}
              color='whiteAlpha.700' 
              noOfLines={8} 
              w={responsiveBodyTextBoxWidth} 
              textAlign='left'
              >
          Collaboration is the key to producing quality music. I've got you covered.
        </Text>
      </Flex>
      <Box w={responsiveFormWidth}
           pt={responsiveFormPaddingTop}
           >
        <ContactForm />
      </Box>
    </Flex>
  );
}

export default Contact;