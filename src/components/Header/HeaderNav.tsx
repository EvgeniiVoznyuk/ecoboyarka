import React from 'react';
import { HStack, Link, Flex, Image, Box, Container } from '@chakra-ui/react';
import Logo from '../Logo/Logo';
import telegram from '../../img/telegram.svg';
import instagram from '../../img/instagram.svg';
import facebook from '../../img/facebook.svg';
import MobileMenu from './MobileMenu';
import { NAV_LINKS } from '../../constants/shared';

const HeaderNav = () => {
  return (
    <Flex
      w="100%"
      backgroundColor="white.80"
      justifyContent="center"
      zIndex="1"
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
            {NAV_LINKS.map(({ title, to }) => (
              <Link
                key={title}
                href={to}
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
