import * as React from 'react';
import { ChakraProvider, Container } from '@chakra-ui/react';
import SliderSection from 'components/sections/SliderSection/SliderSection';
import OurBenefits from 'components/OurBenefits/OurBenefits';
import theme from './theme';
import Header from './components/Header/Header';
import ThirdSection from './components/ThirdSection/ThirdSection';
import AboutUs from './components/AboutUs/AboutUs';

const App = () => (
  <ChakraProvider theme={theme}>
    <Container px="0" maxW="1440px">
      <Header />
      <SliderSection />
      <ThirdSection />
      <AboutUs />
      <OurBenefits />
    </Container>
  </ChakraProvider>
);

export default App;
