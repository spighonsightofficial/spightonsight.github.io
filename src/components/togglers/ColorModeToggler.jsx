import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { 
  Button,
  useColorMode,
} from '@chakra-ui/react';

const ColorModeToggler = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button 
      onClick={toggleColorMode}
      p='8px'
      size='lg'
      variant='outline'
    >
      {colorMode == 'light' ? <FiMoon /> : <FiSun />}
    </Button>
  );
}

export default ColorModeToggler;