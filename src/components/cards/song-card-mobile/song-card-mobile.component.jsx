import React from 'react';
import AudioPlayer from '../../players/audio-player/audioplayer.component';
import {
  Box,
  Flex,
  VStack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const SongCardMobile = ({ src, title }) => {
  return (
    <Box
      p={6}
      bg={useColorModeValue('white', 'gray.800')}
      rounded='lg'
      >
       <Flex  pt='8px' 
              justify='center' 
              align='center'
              >
          <AudioPlayer src={src}/>
          <VStack align='start'>
            <Text fontSize='18px'
                  fontWeight='thin'
                  pl='32px'
                  noOfLines={1}
                  >
              Sample Me.
            </Text>
            <Text fontSize='24px'
                  fontWeight='semibold'
                  pl='32px'
                  noOfLines={1}
                  >
              {title.toUpperCase()}
            </Text>
          </VStack>
        </Flex>
    </Box>
  );
}

export default SongCardMobile;