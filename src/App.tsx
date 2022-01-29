import * as React from 'react';
import { ChakraProvider, Box, Text } from '@chakra-ui/react';
import theme from './theme';

const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Text color="black">Test</Text>
    </Box>
  </ChakraProvider>
);

export default App;
