import React from 'react';

import Picture1 from '../../assets/images/album-1.jpg';
import AudioPlayer from '../players/audio-player/audioplayer.component';
import {
  Box,
  Flex,
  Text,
  Center,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';

const SongCard = ({src='', title='Sample Me'}) => {
  console.log(Picture1);
  console.log(typeof Picture1);
  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${Picture1})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
            
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={Picture1}
          />
        </Box>
        <Flex direction='column' pt='32px'>
          <Flex pt='8px' justify='start' align='center'>
            <AudioPlayer src={src}/>
            <Text fontSize='24px'
                  fontWeight='semibold'
                  pl='32px'
                  noOfLines={1}
                  >
              {title.toUpperCase()}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Center>
  );
}

export default SongCard;