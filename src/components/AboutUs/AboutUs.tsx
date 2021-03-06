import React from 'react';
import {
  Box,
  Flex,
  Text,
  VStack,
  Image,
  HStack,
  Link,
  Container,
} from '@chakra-ui/react';
import recycleInHands from '../../img/recycle_in_hands.svg';
import telegram from '../../img/telegram.svg';
import instagram from '../../img/instagram.svg';
import facebook from '../../img/facebook.svg';

const AboutUs = () => {
  return (
    <Flex justifyContent="center">
      <Container maxW="1440px">
        <Flex
          px="30px"
          direction={{ base: 'column', lg: 'row' }}
          justify={{ base: 'center', lg: 'space-between' }}
          alignItems="center"
        >
          <Box mb={{ base: '20px', lg: 'none' }}>
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
                Компанія є спеціалізованим підприємством, яке з 2016 року
                займається купівлею, продажем, очищенням і сортуванням різних
                видів побутових та виробничих відходів.
              </Text>

              <Text>
                ZA_ECO - компанія з багаторічним досвідом роботи у сфері
                комплексного керування відходами. Компанія є спеціалізованим
                підприємством, яке з 2016 року займається купівлею, продажем.
              </Text>
            </VStack>
            <HStack spacing="32px">
              <Link href="/">
                <Image w="48px" h="48px" src={telegram} />
              </Link>

              <Link
                href="https://www.instagram.com/za_eco_ukraine/"
                target="_blank"
              >
                <Image w="48px" h="48px" src={instagram} />
              </Link>

              <Link
                href="https://www.facebook.com/za.eco.ukraine"
                target="_blank"
              >
                <Image w="48px" h="48px" src={facebook} />
              </Link>
            </HStack>
          </Box>
          <Image
            src={recycleInHands}
            maxH={{ base: '315px', md: '550px' }}
            maxW={{ base: '315px', md: '550px' }}
          />
        </Flex>
      </Container>
    </Flex>
  );
};

export default AboutUs;
