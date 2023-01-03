import React from 'react';
import {
  responsiveHeaderFontSize,
  responsiveSubheaderFontSize,
  responsiveBodyTextFontSize,
  responsiveHorizontalPadding,
  responsiveVerticalPadding,
} from '../../../../utils/global_responsive_values.utility';

import {
  responsiveBodyTextBoxWidth,
  responsiveFlexDirection,
  responsiveFlexColumnAlign,
  responsiveFlexColumnJustify,
} from './services.responsive_values';

import { servicesDetails } from '../../../../data/details/services-details.data';
import IconListItem from '../../../../components/lists/list-items/icon-list-item/iconlistitem.component';
import { FaCheck } from 'react-icons/Fa';
import {
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';

const Services = () => {
  return (
    <Flex id='services'
          as='section' 
          bg='black' 
          px={responsiveHorizontalPadding}
          py={responsiveVerticalPadding}
          direction='column' 
          align='center'
          >
      <Flex direction='column' 
            align='center' 
            w='full'
            >
        <Heading fontSize={responsiveHeaderFontSize} 
                 color='whiteAlpha.900'
                 >
            Services.
        </Heading>
        <Text fontSize={responsiveSubheaderFontSize}
              noOfLines={3} 
              w={responsiveBodyTextBoxWidth} 
              textAlign='center' 
              pt='32px' 
              pb='8px' 
              color='whiteAlpha.800'
              fontWeight='semibold'
              >
          Imagine. Create. Repeat.
        </Text>
        <br />
        <Text fontSize={responsiveBodyTextFontSize} 
              color='whiteAlpha.700' 
              fontWeight='thin'
              w={responsiveBodyTextBoxWidth}
              textAlign='center'
              >
          Here's how I can help bring your sounds to life.
        </Text>
      </Flex>

      <Flex w='90%'
            pt='72px'
            direction={responsiveFlexDirection}
            align={responsiveFlexColumnAlign}
            >
          {
            servicesDetails.map(
              (service) => <IconListItem icon={FaCheck} details={service} />
            )
          }
      </Flex>
    </Flex>
  );
}

export default Services;