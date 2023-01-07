import { ChakraProvider } from '@chakra-ui/react';
import theme from '../utils/chakra-theme/theme';
import React from 'react';
import SEO from '../components/misc/SEO';
import { HomepageLayout } from '../layouts/homepage.layout/HomepageLayout';

// Most follow the export default method. 
// Doesn't work using arrow functions.
export default function  Home() {
   return (
      <ChakraProvider theme={theme}>
         <HomepageLayout/>
      </ChakraProvider>
   );
}

export const Head = () => <SEO/>
