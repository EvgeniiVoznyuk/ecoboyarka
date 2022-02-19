import React from 'react';
import {
  Box,
  Flex,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  Link,
  Image,
  HStack,
} from '@chakra-ui/react';
import { NAV_LINKS } from '../../constants/shared';
import Logo from '../Logo/Logo';
import telegram from '../../img/footer/footer_telegram.svg';
import instagram from '../../img/footer/footer_instagram.svg';
import facebook from '../../img/footer/footer_facebook.svg';

const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        onClick={onOpen}
        aria-label="Open mobile menu"
        icon={
          <Box width={8}>
            <Box width="100%" height={1} backgroundColor="green.500" mb={1.5} />
            <Box width="100%" height={1} backgroundColor="green.500" mb={1.5} />
            <Box width="100%" height={1} backgroundColor="green.500" />
          </Box>
        }
      />

      <Drawer size="full" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bgColor="blue.200">
          <DrawerHeader>
            <Flex justify="space-between" align="center">
              <Logo />
              <DrawerCloseButton pos="static" />
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            <Flex align="center" justify="center" h="100%">
              <Flex as="nav" direction="column" align="center" gap="20px">
                {NAV_LINKS.map(({ title, to }) => (
                  <Link
                    color="green.200"
                    fontSize={{ base: '20px', sm: '30px', md: '40px' }}
                    fontWeight="700"
                    mb={4}
                    key={title}
                    href={to}
                    onClick={onClose}
                  >
                    {title}
                  </Link>
                ))}
                <HStack spacing={{ base: '5px', sm: '15px' }}>
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
                  fontSize="22px"
                  color="green.200"
                >
                  +38 068 930 47 26
                </Link>
              </Flex>
            </Flex>
          </DrawerBody>

          <DrawerFooter justifyContent="center">
            <Logo />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileMenu;
