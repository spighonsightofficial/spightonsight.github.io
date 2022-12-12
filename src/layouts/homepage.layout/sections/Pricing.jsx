import React from 'react';
import PriceCard from '../../../components/cards/PriceCard';
import { FaMixer } from 'react-icons/fa';
import {
  Box,
  Flex,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from '@chakra-ui/react';

const Pricing = () => {
  return (
    <Flex as='section' direction='column' py='128px' align='center'>
      <Heading as='h2' fontSize='48px'>
        Never Overpay Again.
      </Heading>
      <Text color='blackAlpha.700' fontSize='24px' py='16px'>
        Below are the base prices for hourly work. Contact me for package pricing.
      </Text>
      <Flex
        w='75%'
        justify='space-evenly'
        align='cent'er
        py='64px'>
        <PriceCard>
          <Flex direction='column' align='center' py='32px' px='4px'>
            <Text fontSize='28px' fontWeight='semibold' py='8px'>
              Producing
            </Text>
            <Flex justify='space-around' align='center'>
              <Text fontSize='40px' fontWeight='semibold'>
                $
              </Text>
              <Text fontSize='84px' fontWeight='bold' px='8px'>
                25
              </Text>
              <Text fontSize='28px' color='blackAlpha.600'>
                /hour
              </Text>
            </Flex>
          </Flex>
          <Flex
            direction='column'
            justify='space-between'
            align='center'
            bg={useColorModeValue('gray.50', 'gray.700')}
            py='24px'
            borderBottomRadius='xl'>
            <List spacing={3} textAlign='start' px='32px'>
              <ListItem>
                <ListIcon as={FaMixer} color='purple.600' />
                unlimited build minutes
              </ListItem>
              <ListItem>
                <ListIcon as={FaMixer} color='purple.600'/>
                Lorem, ipsum dolor.
              </ListItem>
              <ListItem>
                <ListIcon as={FaMixer} color='purple.600' />
                5TB Lorem, ipsum dolor.
              </ListItem>
            </List>
            <Box w='80%' pt='32px'>
              <Button w='full' colorScheme='purple' variant='outline'>
                Book Now
              </Button>
            </Box>
          </Flex>
        </PriceCard>

        <PriceCard>
          <Box position='relative'>
            <Box
              position='absolute'
              top='-16px'
              left='50%'
              style={{ transform: 'translate(-50%)' }}>
              <Text
                textTransform='uppercase'
                bg={useColorModeValue('yellow.300', 'red.700')}
                px='8px'
                py='4px'
                color={useColorModeValue('blackAlpha.900', 'gray.300')}
                fontSize='16px'
                fontWeight='semibold'
                rounded='full'>
                Most Popular
              </Text>
            </Box>
            <Flex direction='column' align='center' py='32px' px='4px'>
              <Text  fontSize='32px' fontWeight='bold' py='8px'>
                Mixing
              </Text>
              <Flex justify='space-around' align='center'>
                <Text fontSize='44px' fontWeight='semibold'>
                  $
                </Text>
                <Text fontSize='88px' fontWeight='bold' px='8px'>
                  35
                </Text>
                <Text fontSize='32px' color='blackAlpha.600'>
                  /hour
                </Text>
              </Flex>
            </Flex>
            <Flex
              direction='column'
              justify='space-between' 
              align='center'
              bg={useColorModeValue('gray.50', 'gray.700')}
              py='32px'
              borderBottomRadius={'xl'}>
              <List spacing={3} textAlign='start' px='64px'>
                <ListItem>
                  <ListIcon as={FaMixer} color='purple.600' />
                  unlimited build minutes
                </ListItem>
                <ListItem>
                  <ListIcon as={FaMixer} color='purple.600' />
                  Lorem, ipsum dolor.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaMixer} color='purple.600' />
                  5TB Lorem, ipsum dolor.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaMixer} color='purple.600' />
                  5TB Lorem, ipsum dolor.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaMixer} color='purple.600' />
                  5TB Lorem, ipsum dolor.
                </ListItem>
              </List>
              <Box w='80%' pt='32px'>
                <Button w='full' colorScheme='purple' variant='solid'>
                  Book Now
                </Button>
              </Box>
            </Flex>
          </Box>
        </PriceCard>
        <PriceCard>
          <Flex direction='column' align='center' py='32px' px='4px'>
            <Text fontSize='28px' fontWeight='semibold' py='8px'>
              Tracking
            </Text>
            <Flex justify='space-around' align='center'>
              <Text fontSize='40px' fontWeight='semibold'>
                $
              </Text>
              <Text fontSize='84px' fontWeight='bold' px='8px'>
                25
              </Text>
              <Text fontSize='28px' color='blackAlpha.600'>
                /hour
              </Text>
            </Flex>
          </Flex>
          <Flex
            direction='column'
            justify='space-between'
            align='center'
            bg={useColorModeValue('gray.50', 'gray.700')}
            py='24px'
            borderBottomRadius='xl'>
            <List spacing={3} textAlign='start' px='32px'>
              <ListItem>
                <ListIcon as={FaMixer} color='purple.600' />
                unlimited build minutes
              </ListItem>
              <ListItem>
                <ListIcon as={FaMixer} color='purple.600' />
                Lorem, ipsum dolor.
              </ListItem>
              <ListItem>
                <ListIcon as={FaMixer} color='purple.600' />
                5TB Lorem, ipsum dolor.
              </ListItem>
            </List>
            <Box w='80%' pt='32px'>
              <Button w='full' colorScheme='purple' variant='outline'>
                Book Now
              </Button>
            </Box>
          </Flex>
        </PriceCard>
      </Flex>
    </Flex>
  );
}

export default Pricing;