import React from 'react';

import {
  Flex,
  Link,
} from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Flex as='nav' bg='black' justify='center' py='24px'>
      <Flex w='50%' 
            color='whiteAlpha.900' 
            justify='space-evenly' 
            fontSize='20px' 
            fontWeight='hairline'>
        <Link href='gallery'>Gallery</Link>
        <Link href='$'>Services</Link>
        <Link href='$'>Pricing</Link>
        <Link href='$'>Contact Me</Link>
      </Flex>
    </Flex>
  );
}

export default Navbar;