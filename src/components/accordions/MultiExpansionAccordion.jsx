import React from 'react';
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
  // TODO: Add box shadow around accordion to make it look like a floating card. 
  // color should be a whiteAlpha constrast to the black. Probably need to use
  // basic css and apply the `className` attribute. May need to create a custom
  // component or `chakra.factory` component.
  return (
    <Box bg='white' py='16px' rounded='xl'>
      <Accordion allowMultiple>
        <AccordionItem>
          <Heading as='h3'>
            <AccordionButton  color='blackAlpha.900'
                              _expanded={{bg: 'yellow.400', color: 'white' }} 
                              fontSize='32px'>
              <Box flex='1' textAlign='left' fontSize='24px'>
                <Text fontSize='24px' noOfLines={2} color='blackAlpha.900' py='8px' fontWeight='thin'>
                  How long is the average session?
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            <Text fontSize='20px' color='blackAlpha.700'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <Heading as='h3'>
            <AccordionButton  color='blackAlpha.900' 
                              _expanded={{ bg: 'yellow.400', color: 'white' }} 
                              fontSize='32px'>
              <Box flex='1' textAlign='left'>
                <Text fontSize='24px' noOfLines={2} color='blackAlpha.900' py='8px' fontWeight='thin'>
                  Are you willing to travel? If so, how does this affect pricing?
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            <Text fontSize='20px' color='blackAlpha.700'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <Heading as='h3'>
            <AccordionButton  color='blackAlpha.900' 
                              _expanded={{ bg: 'yellow.400', color: 'white' }} 
                              fontSize='32px'>
              <Box flex='1' textAlign='left' fontSize='24px'>
                <Text fontSize='24px' noOfLines={2} color='blackAlpha.900' py='8px' fontWeight='thin'>
                  Do I have to pay for my audio files?
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            <Text fontSize='20px' color='blackAlpha.700'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <Heading as='h3'>
            <AccordionButton  color='blackAlpha.900' 
                              _expanded={{ bg: 'yellow.400', color: 'white' }} 
                              fontSize='32px'>
              <Box flex='1' textAlign='left' fontSize='24px'>
                <Text fontSize='24px' noOfLines={2} color='blackAlpha.900' py='8px' fontWeight='thin'>
                Do you offer package deals?
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            <Text fontSize='20px' color='blackAlpha.700'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}

export default MultiExpansionAccordion;