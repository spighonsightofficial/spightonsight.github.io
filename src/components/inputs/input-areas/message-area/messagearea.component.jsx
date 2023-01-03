import React from 'react';

import {
  responsiveMessageAreaLabelFontSize,
} from './messagearea.responsive_styles';

import {
  FormControl,
  FormLabel,
  Textarea,
} from '@chakra-ui/react';

const MessageArea = ({ size='lg', required=true, disabled=false, verticalPadding='0px'}) => {
  return (
    <FormControl isRequired={required} 
                 isDisabled={disabled}
                 py={verticalPadding}
                 >
      <FormLabel fontSize={responsiveMessageAreaLabelFontSize}
                 >
        Message
      </FormLabel>
      <Textarea size={size}
                variant='filled' 
                placeholder='Your message here...'
                />
    </FormControl>
  );
}

export default MessageArea;