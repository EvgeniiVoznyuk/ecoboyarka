import React from 'react';
import { HStack, Link, Flex, Image } from '@chakra-ui/react';
import Logo from '../Logo/Logo';
import telegram from '../../img/telegram.svg';
import instagram from '../../img/instagram.svg';
import facebook from '../../img/facebook.svg';
import phone from '../../img/phone.svg';

const HeaderNav = () => {
  return (
    <Flex
      w="100%"
      py="15px"
      px="30px"
      borderRight="1px solid #e3e3e3"
      backgroundColor="white.100"
      opacity="0.9"
      position="sticky"
      top={0}
      right={0}
      left={0}
    >
      <Logo />
      <Flex align="center">
        <HStack
          px="48px"
          spacing="42px"
          fontSize="22px"
          fontWeight="500"
          color="green.200"
        >
          <Link href="/">Головна</Link>
          <Link href="/">Закупівля</Link>
          <Link href="/">Послуги</Link>
          <Link href="/">Контакти</Link>
        </HStack>
        <HStack spacing="32px" px="48px">
          <Link href="/">
            <Image h="32px" w="32px" src={telegram} />
          </Link>
          <Link href="/">
            <Image h="32px" w="32px" src={instagram} />
          </Link>
          <Link href="/">
            <Image h="32px" w="32px" src={facebook} />
          </Link>
          <Link href="/">
            <Image h="32px" w="32px" src={phone} />
          </Link>
        </HStack>
        <Flex justify="center" color="green.200" pl="57px">
          068 930 47 26
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HeaderNav;
