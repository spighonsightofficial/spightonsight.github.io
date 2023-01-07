import { extendTheme, withDefaultVariant, } from '@chakra-ui/react';
import config from './theme.config.js';
import colors from './styles/brand.styles';
import components from './component-overrides/components.override.js'
import {
  inputsVariantDefault,
} from './theme.defaults';

// TODO: Add a config object here (light, previx, colorMode)
// TODO: Breakup components & abstract the overrides object


const overrides = {
  config,
  colors,
  components,
};

const theme = extendTheme(
  config,
  overrides, 
  withDefaultVariant(inputsVariantDefault),
);

export default theme;
