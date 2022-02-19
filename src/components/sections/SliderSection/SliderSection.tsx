import { VStack, Text, Flex, Container } from '@chakra-ui/react';
import React from 'react';
import Slider from './Slider';

const SliderSection = () => {
  return (
    <Container maxW="1400px">
      <VStack
        w="100%"
        id="purchase"
        alignItems="center"
        gridGap="55px"
        pt="120px"
      >
        <Text
          fontWeight="700"
          fontSize={{ base: '32px', md: '48px' }}
          color="#2A3423"
        >
          Що ми приймаємо ?
        </Text>

        <Text
          fontWeight="500"
          fontSize="18px"
          maxW="730px"
          color="black"
          px="10px"
          textAlign={{ base: 'center', xl: 'left' }}
        >
          Компанія здійснює закупівлю вторинної сировини і промислових відходів
          на території України від підприємств та населення.Ми приймаємо різну
          сировину.
        </Text>

        <Flex w="100%">
          <Slider />
        </Flex>
      </VStack>
    </Container>
  );
};

export default SliderSection;
