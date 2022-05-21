import React from 'react';
import { HStack, Link, Flex, Image, Box, Container } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import telegram from '../../img/telegram.svg';
import instagram from '../../img/instagram.svg';
import facebook from '../../img/facebook.svg';
import MobileMenu from './MobileMenu';
import Dropdown from '../Dropdown/Dropdown';
import { PURCHASES, SERVICES } from '../../constants/shared';

const HeaderNav = () => {
  return (
    <Flex
      w="100%"
      backgroundColor="white.80"
      justifyContent="center"
      zIndex="1"
      position="fixed"
      top="0"
    >
      <Container maxW="1600px">
        <Flex
          py="15px"
          px="30px"
          justifyContent="space-between"
          alignItems="center"
          maxW="100%"
        >
          <Logo />

          <HStack display={{ lg: 'block', base: 'none' }} spacing="42px">
            <Link
              as={RouterLink}
              to="/"
              fontSize="22px"
              fontWeight="500"
              color="green.200"
              _hover={{ textDecoration: 'none', color: 'green.400' }}
            >
              Головна
            </Link>
            <Dropdown title="Закупівля" children={PURCHASES} />
            <Dropdown title="Послуги" children={SERVICES} />
            <Link
              as={RouterLink}
              to="/#contacts"
              fontSize="22px"
              fontWeight="500"
              color="green.200"
              _hover={{ textDecoration: 'none', color: 'green.400' }}
            >
              Контакти
            </Link>
          </HStack>

          <HStack display={{ xl: 'flex', base: 'none' }} spacing="32px">
            <Link href="/">
              <Image h="32px" w="32px" src={telegram} />
            </Link>
            <Link
              href="https://www.instagram.com/za_eco_ukraine/"
              target="_blank"
            >
              <Image h="32px" w="32px" src={instagram} />
            </Link>
            <Link
              href="https://www.facebook.com/za.eco.ukraine"
              target="_blank"
            >
              <Image h="32px" w="32px" src={facebook} />
            </Link>
          </HStack>

          <Link
            href="tel:+380689304726"
            _hover={{ color: 'green.300', textDecoration: 'none' }}
            display={{ lg: 'inline', base: 'none' }}
            fontSize="22px"
            fontWeight="500"
            color="green.200"
          >
            +38 068 930 47 26
          </Link>
          <Box pt="15px" display={{ lg: 'none' }}>
            <MobileMenu />
          </Box>
        </Flex>
      </Container>
    </Flex>
  );
};

export default HeaderNav;
