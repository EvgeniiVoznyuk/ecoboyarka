import React from 'react';
import { HStack, Link, Flex, Image, Text, Box } from '@chakra-ui/react';
import Logo from '../Logo/Logo';
import telegram from '../../img/telegram.svg';
import instagram from '../../img/instagram.svg';
import facebook from '../../img/facebook.svg';
import phone from '../../img/phone.svg';
import MobileMenu from './MobileMenu';

const HeaderNav = () => {
  return (
    <Flex
      w="100%"
      py="15px"
      px="30px"
      backgroundColor="white.80"
      position="absolute"
      top={0}
      right={0}
      left={0}
      alignItems="center"
      justifyContent="space-between"
      zIndex="1"
    >
      <Logo />

      <HStack
        display={{ lg: 'block', base: 'none' }}
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

      <HStack display={{ xl: 'flex', base: 'none' }} spacing="32px">
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

      <Text
        display={{ lg: 'inline', base: 'none' }}
        fontSize="22px"
        color="green.200"
      >
        068 930 47 26
      </Text>
      <Box pt="15px" display={{ lg: 'none' }}>
        <MobileMenu />
      </Box>
    </Flex>
  );
};

export default HeaderNav;
