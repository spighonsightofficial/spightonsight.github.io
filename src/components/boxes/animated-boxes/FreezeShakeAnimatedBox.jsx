import React from 'react';
import { freezeShakeAnimation as Freeze } from '../../../animations/animation-catalog';
import { Box } from '@chakra-ui/react';

const FreezeShakeAnimatedBox = ({children}) => {
  return (
    <Box  _hover={{ animation: `${Freeze} infinite 1.5s`}}>
      {children}
    </Box>
  );
}

export default FreezeShakeAnimatedBox;