import React from 'react';
import { Box } from '@chakra-ui/react';
import SliderSection from '../components/sections/SliderSection/SliderSection';
import ThirdSection from '../components/ThirdSection/ThirdSection';
import AboutUs from '../components/AboutUs/AboutUs';
import OurBenefits from '../components/OurBenefits/OurBenefits';
import Contacts from '../components/Contacts/Contacts';
import Header from '../components/Header/Header';

const Home = () => {
  return (
    <>
      <Header />
      <Box w="100%" pb="140px !important">
        <SliderSection />
      </Box>
      <ThirdSection />
      <Box w="100%" pb="140px !important">
        <AboutUs />
      </Box>
      <Box w="100%" pb="140px !important">
        <OurBenefits />
      </Box>
      <Contacts />
    </>
  );
};

export default Home;
