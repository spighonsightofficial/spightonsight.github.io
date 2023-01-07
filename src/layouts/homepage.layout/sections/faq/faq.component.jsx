import React from 'react';

import {
  responsiveHeaderFontSize,
  // responsiveBodyTextFontSize,
  responsiveHorizontalPadding,
  responsiveVerticalPadding,
} from '../../../../utils/global_responsive_values.utility';

import {
  responsiveTextAlign,
  responsiveWidth,
  responsiveBodyTextBoxWidth,
  responsiveAccordionVerticalPadding,
  responsiveFlexDirection,
  responsiveFlexColumnJustify,
  responsiveFlexColumnAlign,
} from './faq.responsive_values';

import MultiExpansionAccordion from '../../../../components/accordions/multi-expansion-accordion/multi-expansion-accordion.component';
import {
  Flex,
  Heading,
  Box,
  Text,
} from '@chakra-ui/react';

const FAQ = () => {
  return (
    <Flex as='section'
          id='faq' 
          py={responsiveVerticalPadding}
          px={responsiveHorizontalPadding}
          direction={responsiveFlexDirection}
          justify={responsiveFlexColumnJustify}
          align={responsiveFlexColumnAlign}
          bg='black'
          >
      <Flex w={responsiveWidth}
            direction='column'
            justify={responsiveFlexColumnJustify}
            align={responsiveFlexColumnAlign}
            >
        <Heading color='whiteAlpha.900' 
                 fontSize={responsiveHeaderFontSize}
                 >
          FAQs.
        </Heading>
        <Text noOfLines={10} 
              w={responsiveBodyTextBoxWidth}
              // // fontSize={responsiveBodyTextFontSize}
              py='16px' 
              color='whiteAlpha.700' 
              textAlign={responsiveTextAlign}
              >
          The most commonly asked questions. Don't see your question in the list? No worries. Contact me and I will respond ASAP.
        </Text>
      </Flex>
      <Box w={responsiveWidth}
           py={responsiveAccordionVerticalPadding}
           >
        <MultiExpansionAccordion />
      </Box>
    </Flex>
  );
}

export default FAQ;