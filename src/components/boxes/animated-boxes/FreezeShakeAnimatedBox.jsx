import React from 'react';
import { freezeShakeAnimation as Freeze } from '../../../animations/animation-catalog';
import { Box } from '@chakra-ui/react';
import { responsiveIconSize } from '../../../utils/global_responsive_values.utility';

const FreezeShakeAnimatedBox = ({ children }) => {
  return (
    <Box  _hover={{ animation: `${Freeze} infinite 1.5s`}} 
          fontSize={responsiveIconSize}>
      {children}
    </Box>
  );
}

export default FreezeShakeAnimatedBox;