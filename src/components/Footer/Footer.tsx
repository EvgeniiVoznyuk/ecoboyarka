import React from 'react';
import {
  Flex,
  Image,
  Text,
  Link,
  Box,
  Container,
  VStack,
} from '@chakra-ui/react';
import Logo from '../Logo/Logo';
import location from '../../img/location.svg';
import clock from '../../img/clock.svg';
import phone from '../../img/footer/footer_phone.svg';
import footerTelegram from '../../img/footer/footer_telegram.svg';
import footerInstagram from '../../img/footer/footer_instagram.svg';
import footerFacebook from '../../img/footer/footer_facebook.svg';

const Footer = () => {
  return (
    <Flex p="45px 10px" bgColor="white.200" w="100%" my="0 !important">
      <Container maxW="1600px">
        <VStack gap="30px">
          <Flex
            alignItems="center"
            direction={{ base: 'column', xl: 'row' }}
            justifyContent={{ base: 'space-between', xl: 'initial' }}
            gap={{ base: '5px', xl: '87px' }}
          >
            <Box pb="12px">
              <Logo />
            </Box>

            <Flex display={{ xl: 'flex', base: 'none' }} gap="18px">
              <Image maxW="42px" maxH="42px" src={location} />

              <Link
                href="https://goo.gl/maps/jNq73NeDU9JLGuvA9"
                fontSize="18px"
                fontWeight="500"
                color="green.100"
                lineHeight="22px"
                target="_blank"
                _hover={{ color: 'green.300', textDecoration: 'none' }}
              >
                с. Тарасівка,
                <br />
                вул. Залізнична 8а(за АТБ)
              </Link>
            </Flex>

            <Flex display={{ xl: 'flex', base: 'none' }} gap="18px">
              <Image maxW="42px" maxH="42px" src={clock} />

              <Text
                fontSize="18px"
                fontWeight="500"
                color="green.100"
                lineHeight="22px"
                w="187px"
              >
                Пн-Сб: 8.00 - 18.00
                <br />
                Нд: вихідний
              </Text>
            </Flex>

            <Flex display={{ xl: 'flex', base: 'none' }} gap="18px">
              <Image maxW="42px" maxH="42px" src={phone} />
              <Flex direction="column">
                <Link
                  href="tel:+380689304726"
                  fontSize="18px"
                  fontWeight="500"
                  color="green.100"
                  lineHeight="22px"
                  _hover={{ color: 'green.300', textDecoration: 'none' }}
                >
                  068 930 47 26
                </Link>
                <Link
                  href="tel:+380739398383"
                  fontSize="18px"
                  fontWeight="500"
                  color="green.100"
                  lineHeight="22px"
                  _hover={{ color: 'green.300', textDecoration: 'none' }}
                >
                  073 939 83 83
                </Link>
              </Flex>
            </Flex>

            <Flex gap="12px">
              <Link href="/">
                <Image maxW="32px" maxH="32px" src={footerTelegram} />
              </Link>

              <Link
                href="https://www.instagram.com/za_eco_ukraine/"
                target="_blank"
              >
                <Image maxW="32px" maxH="32px" src={footerInstagram} />
              </Link>

              <Link
                href="https://www.facebook.com/za.eco.ukraine"
                target="_blank"
              >
                <Image maxW="32px" maxH="32px" src={footerFacebook} />
              </Link>
            </Flex>
          </Flex>

          <Text fontSize="14px" fontWeight="400" color="green.300">
            Copyright 2022 Всі права захищені
          </Text>
        </VStack>
      </Container>
    </Flex>
  );
};

export default Footer;
