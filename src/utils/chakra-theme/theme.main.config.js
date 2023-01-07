import { extendTheme, withDefaultVariant } from '@chakra-ui/react';

// Style overrides will go here
const overrides = {
  // styles,
  // borders,
  // components: {
  //   Button,
  //   Border,
  //   Links,
  // },
};

export const theme = extendTheme(
  overrides, 
  withDefaultVariant({
    variant: 'filled',
    components: ['Input', 'Textarea'],
  }),
);

