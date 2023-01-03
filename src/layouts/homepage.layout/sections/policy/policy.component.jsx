import React from 'react';
import {
  responsiveHeaderFontSize,
  responsiveSubheaderFontSize,
  responsiveBodyTextFontSize,
  responsiveVerticalPadding,
  responsiveHorizontalPadding,
} from '../../../../utils/global_responsive_values.utility';

import {
  responsiveBodyTextBoxWidth,
} from './policy.responsive_value';

import { policyDetails } from '../../../../data/details/policy-details.data';
import FeatureBlock from '../../../../components/blocks/features-block/featureblock.component';
import {
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';

const Policy = () => {
  return (
    <Flex id='policy'
          as='section'
          py={responsiveVerticalPadding}
          px={responsiveHorizontalPadding}
          direction='column'
          align='center'
          bg='white'
          >
      <Flex direction='column'
            align='center' 
            w='full'
            >
        <Heading fontSize={responsiveHeaderFontSize}
                 color='blackAlpha.900'
                 >
          Policies.
        </Heading>
        <Text fontSize={responsiveSubheaderFontSize}
              noOfLines={3}
              w={responsiveBodyTextBoxWidth} 
              textAlign='center'
              pt='32px' 
              pb='8px' 
              color='blackAlpha.800'
              fontWeight='semibold'
              >
          Every studio has an unique atmosphere.
        </Text>
        <br />
        <Text fontSize={responsiveBodyTextFontSize}
              w={responsiveBodyTextBoxWidth}
              color='blackAlpha.700' 
              fontWeight='thin' 
              textAlign='center'
              >
          The atmosphere is created by the studio's mission, morals, and values.
          Being a faith-based studio, I do ask clients to please follow these policies during
          sessions.
        </Text>
      </Flex>
      <FeatureBlock details={policyDetails} />    
    </Flex>
  );
}

{/* <Container maxW={'6xl'} mt={10}>
<SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
  {features.map((feature) => (
    <HStack key={feature.id} align={'top'}>
      <Box color={'green.400'} px={2}>
        <Icon as={CheckIcon} />
      </Box>
      <VStack align={'start'}>
        <Text fontWeight={600}>{feature.title}</Text>
        <Text color={'gray.600'}>{feature.text}</Text>
      </VStack>
    </HStack>
  ))}
</SimpleGrid>
</Container> */}

export default Policy;