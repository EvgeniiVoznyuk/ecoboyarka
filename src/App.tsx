import * as React from 'react';
import { ChakraProvider, Container } from '@chakra-ui/react';
import theme from './theme';
import Header from './components/Header/Header';

const App = () => (
  <ChakraProvider theme={theme}>
    <Container px="0" maxW="1440px">
      <Header />
    </Container>
  </ChakraProvider>
);

export default App;
