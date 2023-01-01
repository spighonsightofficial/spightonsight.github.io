import React from 'react';
import { FaCheck } from 'react-icons/fa';
import {
  Flex,
  Heading,
  Text,
  SimpleGrid,
} from '@chakra-ui/react';

const Policy = () => {
  return (
    <Flex id='policy'
          as='section' 
          px='64px' 
          py='128px' 
          direction='column' 
          align='center'
          bg='white'
          >
      <Flex direction='column' align='center' w='full'>
        <Heading fontSize='64px' color='blackAlpha.900'>Policies.</Heading>
        <Text fontSize='40px' 
              noOfLines={3}
              w='60%' 
              textAlign='center'
              pt='32px' 
              pb='8px' 
              color='blackAlpha.800'
              fontWeight='semibold'>
          Every studio has an unique atmosphere.
        </Text>
        <br />
        <Text fontSize='32px' w='75%' color='blackAlpha.700' fontWeight='thin' textAlign='center'>
          The atmosphere is created by the studio's mission, morals, and values.
          Being a faith-based studio, I do ask clients to please follow these policies during
          sessions.
        </Text>
      </Flex>
      <SimpleGrid columns={3} spacing='64px' pt='128px'>
        <Flex align='start'>
          <Flex direction='column' justify='start' align='center'>
            <Heading fontSize='40px' py='8px' fontWeight='bold'>Entourage.</Heading>
            <Text noOfLines={5} fontWeight='thin' w='80%' textAlign='justify' py='8px'>
              Due to limited room capacity, the client can
              only bring 2 others during a session.
            </Text>
          </Flex>
        </Flex>
        <Flex align='start' justify='space-between'>
          <Flex direction='column' justify='start' align='center'>
            <Heading fontSize='40px' py='8px' fontWeight='bold'>Content.</Heading>
            <Text fontsize='32px' noOfLines={5} fontWeight='thin' w='80%' textAlign='justify' py='8px'>
              I do not support topics containing: excessive cussing,
              drugs, gun violence, and womanizing.
            </Text>
          </Flex>
          <Text></Text>
        </Flex>
        <Flex align='start' >
          <Flex direction='column' justify='start' align='center'>
            <Heading fontSize='40px' py='8px' fontWeight='bold'>Environment.</Heading>
            <Text fontsize='32px' noOfLines={5} fontWeight='thin' w='80%' textAlign='justify' py='8px'>
              To maintain a clean environment, clients and client entourage are prohibited
              from smoking while in the home studio.
            </Text>
          </Flex>
        </Flex>
      </SimpleGrid>       
    </Flex>
  );
}

{/* <Container maxW={'6xl'} mt={10}>
<SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
  {features.map((feature) => (
    <HStack key={feature.id} align={'top'}>
      <Box color={'green.400'} px={2}>
        <Icon as={CheckIcon} />
      </Box>
      <VStack align={'start'}>
        <Text fontWeight={600}>{feature.title}</Text>
        <Text color={'gray.600'}>{feature.text}</Text>
      </VStack>
    </HStack>
  ))}
</SimpleGrid>
</Container> */}

export default Policy;