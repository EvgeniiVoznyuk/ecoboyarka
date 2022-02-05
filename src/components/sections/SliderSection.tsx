import { VStack, Text } from '@chakra-ui/react';
import React from 'react';

const SliderSection = () => {
  return (
    <VStack alignItems="center" gridGap="55px" pt="120px" pb="60px">
      <Text fontWeight="700" fontSize="48px" color="#2A3423">
        Що ми приймаємо ?
      </Text>

      <Text fontWeight="500" fontSize="18px" maxW="730px" color="black">
        Компанія здійснює закупівлю вторинної сировини і промислових відходів на
        території України від підприємств та населення.Ми приймаємо різну
        сировину.
      </Text>
    </VStack>
  );
};

export default SliderSection;
