import { VStack, Text, Flex } from '@chakra-ui/react';
import React from 'react';
import Slider from './Slider';

const SliderSection = () => {
  return (
    <VStack alignItems="center" gridGap="55px" pt="120px" pb="60px">
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
        Компанія здійснює закупівлю вторинної сировини і промислових відходів на
        території України від підприємств та населення.Ми приймаємо різну
        сировину.
      </Text>

      <Flex w="100%">
        <Slider />
      </Flex>
    </VStack>
  );
};

export default SliderSection;
