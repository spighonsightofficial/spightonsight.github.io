import React from 'react';
import {
 Link,
} from 'gatsby';

import {
  VStack,
  Heading,
  Text,
  Highlight,
} from '@chakra-ui/react';

const NotFound = () => {
  return (
   <>
    <VStack 
        bgColor='black' 
        h='100vh'
        align='center' 
        justify='center'
        >
        <Heading 
            fontSize='124px' 
            fontWeight='bold'
            color='whiteAlpha.900'
            >
          Oopsies.
        </Heading>
        <Text 
            fontSize='72px' 
            fontWeight='thin'
            color='whiteAlpha.700'
            >
            Something's not right. Let's go
        </Text>
        <Text fontSize='72px'>
          <Link 
              to='/'
              >
               <Highlight
                  query='home.'
                  styles={{ 
                    p: '8px',
                    rounded: '2xl', 
                    bg: 'purple.100',
                  }}
                >
                 home.
              </Highlight>
          </Link>
        </Text>
      </VStack>
   </>
  );
}

export default NotFound;