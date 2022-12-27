import React from 'react';
import {
  Flex,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';

const PricingList = ({ details={}, icon, hasHorizontalPadding=true, hasVerticalPadding=true, isPromo=false}) => {
  const {info, id, iconColor } = details;
  return (
    <List px={hasHorizontalPadding ? '8px': 0}
          pt={hasVerticalPadding ? (isPromo ? '72px' : '32px') : 0}
          fontSize={isPromo ? '36px' : '18px'}
          spacing={5}
          color='blackAlpha.700'
          fontWeight='medium'
          w={isPromo? '80%' : ''}
          h={isPromo? 'full' : ''}
          as={isPromo? Flex : ''}
          direction={isPromo? 'column' : ''}
          justify={isPromo? 'start' : ''}
          align={isPromo? 'center' : ''}
          >
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