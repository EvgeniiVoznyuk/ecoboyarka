import React from 'react';
import { Flex, HStack, Image, Text, Link } from '@chakra-ui/react';
import Logo from '../Logo/Logo';
import location from '../../img/location.svg';
import clock from '../../img/clock.svg';
import phone from '../../img/footer/footer_phone.svg';
import footerTelegram from '../../img/footer/footer_telegram.svg';
import footerInstagram from '../../img/footer/footer_instagram.svg';
import footerFacebook from '../../img/footer/footer_facebook.svg';

const Footer = () => {
  return (
    <Flex
      direction="column"
      p="45px 30px"
      bgColor="white.200"
      gap="90px"
      justify="center"
      alignItems="center"
    >
      <HStack spacing="87px">
        <Logo />

        <Flex display={{ lg: 'flex', base: 'none' }} gap="18px">
          <Image maxW="42px" maxH="42px" src={location} />

          <Text
            fontSize="18px"
            fontWeight="500"
            color="green.100"
            lineHeight="22px"
            w="238px"
          >
            с. Тарасівка,
            <br />
            вул. Залізнична 8а(за АТБ)
          </Text>
        </Flex>

        <Flex display={{ lg: 'flex', base: 'none' }} gap="18px">
          <Image maxW="42px" maxH="42px" src={clock} />

          <Text
            fontSize="18px"
            fontWeight="500"
            color="green.100"
            lineHeight="22px"
            w="187px"
          >
            Пн-Сб: 9.00 - 20.00
            <br />
            Нд: вихідний
          </Text>
        </Flex>

        <Flex display={{ lg: 'flex', base: 'none' }} gap="18px">
          <Image maxW="42px" maxH="42px" src={phone} />

          <Text
            fontSize="18px"
            fontWeight="500"
            color="green.100"
            lineHeight="22px"
            w="129px"
          >
            068 930 47 26
            <br />
            073 939 83 83
          </Text>
        </Flex>

        <Flex display={{ lg: 'flex', base: 'none' }} gap="12px">
          <Link href="/">
            <Image maxW="32px" maxH="32px" src={footerTelegram} />
          </Link>

          <Link href="/">
            <Image maxW="32px" maxH="32px" src={footerInstagram} />
          </Link>

          <Link href="/">
            <Image maxW="32px" maxH="32px" src={footerFacebook} />
          </Link>
        </Flex>
      </HStack>

      <Text fontSize="14px" fontWeight="400" color="green.300">
        Copyright 2022 Все права защищены
      </Text>
    </Flex>
  );
};

export default Footer;
