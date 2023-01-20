import React from 'react';
import { demos } from '../../../data/items/demo-items.data';
import SongCard from '../../cards/song-card.component';
import {
 SimpleGrid,
 Box,
} from '@chakra-ui/react';

const SongGrid = () => {
  return (
   <Box pt='124px' pb='64px'>
     <SimpleGrid columns={2} spacing={'32px'}>
     {
      demos.map(demo => (
        <Box key={demo.id}>
          <SongCard src={demo.src} title={demo.title}/>  
        </Box>      
      ))
     }
    </SimpleGrid>
   </Box>
  );
}

export default SongGrid;