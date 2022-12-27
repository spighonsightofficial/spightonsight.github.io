import React from 'react';
import {
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';

const PricingList = ({ details={}, icon, hasHorizontalPadding=true, hasVerticalPadding=true, }) => {
  const {info, id, iconColor } = details;
  return (
    <List px={hasHorizontalPadding ? '8px' : 0}
          pt={hasVerticalPadding ? '32px' : 0}
          fontSize='18px'
          spacing={5}
          color='blackAlpha.700'
          fontWeight='medium'>
      {
        info.map((text) => {
          return (
            <ListItem key={id} noOfLines={1} overflow='hidden'>
              <ListIcon as={icon} color={iconColor}/>
              {text}
            </ListItem>
          )
        })
      }
    </List>
  );
}

export default PricingList;