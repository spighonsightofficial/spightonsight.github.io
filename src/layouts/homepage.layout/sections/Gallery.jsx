import React from 'react';
import SongCard from '../../../components/cards/SongCard';
import {
  Box,
  Flex,
  Heading,
  Text,
  SimpleGrid,
} from '@chakra-ui/react';

const Gallery = () => {
  return (
    <Flex id='gallery' as='section' p='64px' bg='black' justify='space-between'>
      <Flex direction='column' w='50%'>
        <Heading fontSize='64px' as='h2' color='whiteAlpha.900'>My Work.</Heading>
        <Box border='1px'>
          <Text color='whiteAlpha.700' py='32px' noOfLines={5} fontSize='24px'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Box>
      </Flex>
      <SimpleGrid columns={2} width='50%' spacing='24px' pl='64px'>
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
      </SimpleGrid>
    </Flex>
  );
}

export default Gallery;