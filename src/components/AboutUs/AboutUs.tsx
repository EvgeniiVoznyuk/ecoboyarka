import React from 'react';
import { Box, Flex, Text, VStack, Image, HStack, Link } from '@chakra-ui/react';
import recycleInHands from '../../img/recycle_in_hands.svg';
import telegram from '../../img/telegram.svg';
import instagram from '../../img/instagram.svg';
import facebook from '../../img/facebook.svg';

const AboutUs = () => {
  return (
    <Flex
      px="30px"
      direction={{ base: 'column', lg: 'row' }}
      justify={{ base: 'center', lg: 'space-between' }}
      alignItems="center"
      mb="150px"
    >
      <Box>
        <Text fontSize="48px" fontWeight="700" color="green.100" mb="48px">
          Хто ми?
        </Text>
        <VStack
          spacing="28px"
          alignItems="flex-start"
          maxW="637px"
          fontSize="24px"
          fontWeight="400"
          color="black.100"
          mb="48px"
          direction={{ base: 'column', lg: 'row' }}
        >
          <Text>
            <Text color="green.500" fontWeight="600" as="span">
              ZA_ECO&nbsp;
            </Text>
            - компанія з багаторічним досвідом роботи у сфері комплексного
            керування відходами.
          </Text>

          <Text>
            Компанія є спеціалізованим підприємством, яке з 2016 року займається
            купівлею, продажем, очищенням і сортуванням різних видів побутових
            та виробничих відходів.
          </Text>

          <Text>
            ZA_ECO - компанія з багаторічним досвідом роботи у сфері
            комплексного керування відходами. Компанія є спеціалізованим
            підприємством, яке з 2016 року займається купівлею, продажем.
          </Text>
        </VStack>
        <HStack spacing="32px">
          <Link href="/">
            <Image w="48px" h="48px" src={telegram} color="red" />
          </Link>

          <Link href="/">
            <Image w="48px" h="48px" src={instagram} />
          </Link>

          <Link href="/">
            <Image w="48px" h="48px" src={facebook} />
          </Link>
        </HStack>
      </Box>
      <Image
        display={{ base: 'none', md: 'block' }}
        src={recycleInHands}
        maxH="550px"
        maxW="550px"
      />
    </Flex>
  );
};

export default AboutUs;
