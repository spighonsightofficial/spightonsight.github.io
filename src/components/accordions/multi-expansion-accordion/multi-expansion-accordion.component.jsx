import React from 'react';

// import {
//   responsiveHeaderFontSize,
//   responsiveSubheaderFontSize,
//   responsiveBodyTextFontSize,
//   responsiveVerticalPadding,
//   responsiveHorizontalPadding,
// } from '../../../utils/global_responsive_values.utility';

import {
  responsiveAccordionHeaderTextFontSize,
  responsiveAccordyBodyTextFontSize,
  responsiveAccordionBodyTextVerticalPadding,
} from './multiepansionaccordion.reponsive_values';

import { accordionItems } from '../../../data/items/accordion-items.data';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Heading,
  Text,
} from '@chakra-ui/react';

const MultiExpansionAccordion = () => {
  return (
    <Box bg='white' py='16px' rounded='xl'>
      <Accordion allowMultiple>
        {
          accordionItems.map( ({ question, answer }) => {
            return (
              <AccordionItem>
                <Heading as='h3'>
                  <AccordionButton 
                        color='blackAlpha.900'
                        _expanded={{
                          bg: 'yellow.400', 
                          color: 'white' 
                        }} 
                        fontSize='32px'
                        >
                    <Box flex='1' 
                         textAlign='left' 
                         fontSize='24px'
                         >
                      <Text fontSize={responsiveAccordionHeaderTextFontSize}
                            noOfLines={4} 
                            color='blackAlpha.900' 
                            py='16px'
                            fontWeight='thin'
                            >
                        {question}
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel py={responsiveAccordionBodyTextVerticalPadding}
                                >
                  <Text fontSize={responsiveAccordyBodyTextFontSize} 
                        color='blackAlpha.700' 
                        noOfLines={10}
                        >
                    {answer}
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            );
          })
        }
      </Accordion>
    </Box>
  );
}

{/* <AccordionPanel pb={4}>
  <Text fontSize='24px' color='blackAlpha.900' fontWeight='bold'>Yes!</Text>
  <Text fontSize='20px' color='blackAlpha.700'>
    {panels[3].question}
  </Text>
</AccordionPanel> */}

export default MultiExpansionAccordion;