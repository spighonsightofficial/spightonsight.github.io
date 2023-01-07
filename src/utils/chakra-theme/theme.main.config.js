import { extendTheme, withDefaultVariant, } from '@chakra-ui/react';
import Text from './component-overrides/text.override';
import Heading from './component-overrides/heading.override';
import FormLabel from './component-overrides/formlabel.override';
import FormErrorMessage from './component-overrides/form-error-message.override';
// TODO: Add a config object here (light, previx, colorMode)
// TODO: Breakup components & abstract the overrides object

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  cssVarPrefix: 'spightonsight-io',
};

const overrides = {
  components: {
    Text,
    Heading,
    FormLabel,
    FormErrorMessage,
  },
};

export const theme = extendTheme(
  config,
  overrides, 
  withDefaultVariant({
    variant: 'filled',
    components: ['Input', 'Textarea'],
  }),
);

