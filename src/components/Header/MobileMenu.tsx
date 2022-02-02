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
  Text,
} from '@chakra-ui/react';
import { NAV_LINKS } from '../../constants/shared';
import Logo from '../Logo/Logo';
import telegram from '../../img/telegram.svg';
import instagram from '../../img/instagram.svg';
import facebook from '../../img/facebook.svg';
import phone from '../../img/phone.svg';

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
                    fontSize={{ base: '30px', sm: '40px', md: '50px' }}
                    fontWeight="700"
                    mb={4}
                    key={title}
                    to={to}
                    onClick={onClose}
                  >
                    {title}
                  </Link>
                ))}
                <HStack spacing={{ base: '5px', sm: '15px' }}>
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

                <Text fontSize="22px" color="green.200">
                  068 930 47 26
                </Text>
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
