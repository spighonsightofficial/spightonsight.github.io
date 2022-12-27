import React from 'react';
import NavLink from '../components/links/Navlink';
import { navLinks } from '../data/nav-links.data';
import { MdMenu, MdClose} from 'react-icons/md';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';

// TODO: Add colorModeToggler to end of navbar
// TODO: Mobile responsivesness (iphone 12/13)
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box  as='nav'
          px='64px'
          py='24px'
          bg='black' 
          position='fixed'
          zIndex={50}
          w='full'>
      <Flex justify='center'
            align='center'
            bg={useColorModeValue('black', 'gray.900')} 
            py='16px'>
        <Flex >
          <IconButton
            size='lg'
            aria-label='Open Menu'
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          >
            <Flex justify='center' align='center'>
            {isOpen ? <MdClose fontSize='24px'/> : <MdMenu fontSize='16px'/>}
            </Flex>
          </IconButton>

          <Flex justify='center' align='center'>
            <Box color='white' display={{md: 'none', lg: 'none'}}>
              Logo
            </Box>
            <Flex as='nav'
                  display={{ base: 'none', md: 'flex' }}
                  >
              {navLinks.map((link) => (
                <NavLink key={link.id} link={link} paddingLR='24px'/>
              ))}
            </Flex>
          </Flex>

          {/* <Flex align='center'>
            <Menu closeOnBlur={true} isLazy={true}>
              <MenuButton
                as={Button}
                rounded='sm'
                variant='link'
                cursor='pointer'
                minW={0}>
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex> */}
        </Flex>

        {/* // Mobile Popout menu
        {isOpen ? (
          <Box display={{ md: 'none' }} zIndex={10}>
            <Flex as='nav'
                  direction='column'
                  justify='space-between'>
              {navLinks.map((link) => (
                <Box py='8px' fontSize='28px'>
                  <NavLink key={link.id} link={link} />
                </Box>
              ))}
            </Flex>
          </Box>
        ) : null} */}
      </Flex>
    </Box>
  );
}

export default Navbar;
