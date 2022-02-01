import { extendTheme } from '@chakra-ui/react';
import colors from './colors';
import fonts from './fonts';

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: 'white',
        margin: 0,
        padding: 0,
      },
    },
  },
  colors,
  fonts,
});

export default theme;
