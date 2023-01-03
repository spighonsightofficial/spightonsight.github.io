import React from 'react';

import {
  responsiveListHeaderFontSize,
  responsiveListBodyTextFontSize,
  responsiveListBoxWidth,
  responsiveListHeaderVerticalPadding,
  responsiveListBodyVerticalPaddingBottom,
  responsiveListBodyHorizontalPaddingLeft,
} from './iconlistitem.responsive_values';

import {
  Flex,
  Heading,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';


// TODO: Reponsive sizing
const IconListItem = ({ icon, details={} }) => {
  const {header, items, id, iconColor } = details;
  
  return (
    <Flex direction='column'
          align='center'
          w='full'
          border='1px' borderColor='white'
          >
      <Heading as='h3'
               fontSize={responsiveListHeaderFontSize}
               color='whiteAlpha.900'
               py={responsiveListHeaderVerticalPadding}
               >
        {header}
      </Heading>
      <List fontSize={responsiveListBodyTextFontSize}
            color='whiteAlpha.700'
            spacing='24px'
            w={responsiveListBoxWidth}
            pb={responsiveListBodyVerticalPaddingBottom}
            pl={responsiveListBodyHorizontalPaddingLeft}
            >
        {
          items.map(
            (text) => (
              <ListItem key={id} 
                        noOfLines={3} 
                        overflow='hidden'
                        textAlign='left'
                        >
                <ListIcon as={icon} color={iconColor} />
                {text}
              </ListItem>
            )
          )
        }
      </List>
    </Flex>
  );
}

export default IconListItem;