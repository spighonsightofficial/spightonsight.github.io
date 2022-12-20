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
          bg='black' 
          px='64px' 
          py='128px' 
          direction='column' 
          align='center'
          bg='white'
          >
      <Flex direction='column' align='center' w='full'>
        <Heading fontSize='64px' color='blackAlpha.900'>Policies.</Heading>
        <Text fontSize='32px' 
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
        <Text fontSize='28px' w='75%' color='blackAlpha.700' fontWeight='thin' textAlign='center'>
          The atmosphere is created by the studio's mission, morals, and values.
          Being a faith-based studio, I do ask clients to please follow these policies during
          sessions.
        </Text>
      </Flex>
      <SimpleGrid columns={3} spacing='64px' pt='64px'>
        <Flex align='start' border='1px'>
          <Flex direction='column' justify='start' align='center'>
            <Heading fontSize='32px' py='8px' fontWeight='bold'>Entourage.</Heading>
            <Text fontsize='28px' noOfLines={5} fontWeight='thin' w='80%' textAlign='justify'>
              Due to limited room capacity, the client can
              only bring 2 others during a session.
            </Text>
          </Flex>
          <Text></Text>
        </Flex>
        <Flex align='start' border='1px'>
          <Flex direction='column' justify='start' align='center'>
            <Heading fontSize='32px' py='8px' fontWeight='bold'>Content.</Heading>
            <Text fontsize='28px' noOfLines={5} fontWeight='thin' w='80%' textAlign='justify'>
              I do not support topics containing: excessive cussing,
              drugs, gun violence, and womanizing.
            </Text>
          </Flex>
          <Text></Text>
        </Flex>
        <Flex align='start' border='1px'>
          <Flex direction='column' justify='start' align='center' >
            <Heading fontSize='32px' py='8px' fontWeight='bold'>Environment.</Heading>
            <Text fontsize='28px' noOfLines={5} fontWeight='thin' w='80%' textAlign='justify'>
              To maintain a clean environment, clients and client entourage are prohibited
              from smoking while in the home studio.
            </Text>
          </Flex>
          <Text></Text>
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