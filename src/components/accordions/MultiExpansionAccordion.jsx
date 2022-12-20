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
              Sessions range from 1 hour to 3 hours. For most clients, the typical session
              is roughly 2 hours. If more time is needed, arrangements can be made 2 days before
              the scheduled session. Contact me to discuss more details.
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
            <Text fontWeight='bold' fontColor='blackAlpha.900' fontSize='24px'>Yes!</Text>
            <Text fontSize='20px' color='blackAlpha.700'>
              I will travel to the greater Nashville area for meetups. For sesions that require travel, 
              overall price will be the total price of the session + traveling fee. Contact me if you
              have any questions.
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
                  Do I have to pay for my stems?
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            <Text fontWeight='bold' fontColor='blackAlpha.900' fontSize='24px'>No!</Text>
            <Text fontSize='20px' color='blackAlpha.700'>
              Unlike other studios, I will not hold your stems. After each session,
              I will begin compiling your stems so they can be sent to you within the same
              week.
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
            <Text fontSize='24px' color='blackAlpha.900' fontWeight='bold'>Yes!</Text>
            <Text fontSize='20px' color='blackAlpha.700'>
             On top of individual services such as mixing, producing, and tracking, I also
             offer packages. Checkout the pricing section to see which packages are available currently.
             Don't see what you're looking for? Contact me about creating custom packages.
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}

export default MultiExpansionAccordion;