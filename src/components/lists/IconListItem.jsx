import React from 'react';
import {
  Box,
  Heading,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';



const IconListItem = ({ icon, details }) => {
  const {header, items, id, iconColor } = details;
  
  return (
    <Box textAlign='left'>
      <Heading as='h3' fontSize='48px' color='whiteAlpha.900' py='16px'>
        {header}
      </Heading>
      <List pt='16px' textAlign='left' spacing='24px' fontSize='18px' color='whiteAlpha.700'>
        {
          items.map((text) => {
            return (
              <ListItem key={id}>
                <ListIcon as={icon} color={iconColor}/>
                {text}
              </ListItem>
            )
          })
        }
      </List>
    </Box>
  );
}

export default IconListItem;