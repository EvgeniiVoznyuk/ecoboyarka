import * as React from 'react';
import { ChakraProvider, Container } from '@chakra-ui/react';
import theme from './theme';
import Header from './components/Header/Header';
import ThirdSection from './components/ThirdSection/ThirdSection';
import AboutUs from './components/AboutUs/AboutUs';
import OurBenefits from './components/OurBenefits/OurBenefits';

const App = () => (
  <ChakraProvider theme={theme}>
    <Container px="0" maxW="1440px">
      <Header />
      <ThirdSection />
      <AboutUs />
      <OurBenefits />
    </Container>
  </ChakraProvider>
);

export default App;
