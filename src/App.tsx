import * as React from 'react';
import { ChakraProvider, VStack } from '@chakra-ui/react';
import Routes from 'router/Routes';
import { BrowserRouter } from 'react-router-dom';
import theme from './theme';
import Footer from './components/Footer/Footer';
import HeaderNav from './components/Header/HeaderNav';

const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <VStack
        h="100vh !important"
        justifyContent="space-between !important"
        px="0"
      >
        <HeaderNav />
        <Routes />
        <Footer />
      </VStack>
    </BrowserRouter>
  </ChakraProvider>
);

export default App;
