import React from 'react';
import { HStack, Link, Flex, Image, Text, Box } from '@chakra-ui/react';
import Logo from '../Logo/Logo';
import telegram from '../../img/telegram.svg';
import instagram from '../../img/instagram.svg';
import facebook from '../../img/facebook.svg';
import phone from '../../img/phone.svg';
import MobileMenu from './MobileMenu';
import { NAV_LINKS } from '../../constants/shared';

const HeaderNav = () => {
  return (
    <Flex
      w="100%"
      py="15px"
      px="30px"
      backgroundColor="white.80"
      alignItems="center"
      justifyContent="space-between"
      zIndex="1"
    >
      <Logo />

      <HStack display={{ lg: 'block', base: 'none' }} spacing="42px">
        {NAV_LINKS.map(({ title, to }) => (
          <Link
            key={title}
            to={to}
            fontSize="22px"
            fontWeight="500"
            color="green.200"
            _hover={{ textDecoration: 'none', color: 'green.400' }}
          >
            {title}
          </Link>
        ))}
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
