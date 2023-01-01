import React from 'react';
import { accordionItems } from '../../data/items/accordion-items.data';
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
                  <AccordionButton  color='blackAlpha.900'
                                    _expanded={{bg: 'yellow.400', color: 'white' }} 
                                    fontSize='32px'>
                    <Box flex='1' textAlign='left' fontSize='24px'>
                      <Text fontSize='24px' noOfLines={2} color='blackAlpha.900' py='8px' fontWeight='thin'>
                        {question}
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pb={4}>
                  <Text fontSize='20px' color='blackAlpha.700' noOfLines={5}>
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