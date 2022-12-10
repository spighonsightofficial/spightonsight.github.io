import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import { GiSoundWaves } from 'react-icons/gi';
import {
  Box,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';

const SongCard = () => {
  return (
    <Flex as='article' 
          bgColor='white' 
          rounded='2xl' 
          direction='column'
          align='center'
          justify='space-between'
          boxShadow='2xl'
          >
      <GiSoundWaves color='black' fontSize='108px' />
      <Flex justify='space-evenly' 
            border='1px' 
            bg='gray.100' 
            w='full' 
            roundedBottomRight='2xl' 
            roundedBottomLeft='2xl'>
          <FaPlayCircle fontSize='32px' />
          <Text fontSize='18px' pl='16px'>sit amet justo</Text>
      </Flex>
    </Flex>
  );
}

export default SongCard;