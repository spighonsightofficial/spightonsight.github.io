import React from 'react';

import {
  Flex,
  Link,
} from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Flex as='nav' bg='black' justify='center' py='24px' w='full' position='fixed' zIndex='50'>
      <Flex w='50%' 
            color='whiteAlpha.900' 
            justify='space-evenly' 
            fontSize='20px' 
            fontWeight='hairline'>
        <Link href='#gallery'>Gallery</Link>
        <Link href='#services'>Services</Link>
        <Link href='#pricing'>Pricing</Link>
        <Link href='#contact'>Contact Me</Link>
        <Link href='#faq'>FAQs</Link>
      </Flex>
    </Flex>
  );
}

export default Navbar;