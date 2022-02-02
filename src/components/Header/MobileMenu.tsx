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
} from '@chakra-ui/react';
import { NAV_LINKS } from '../../constants/shared';
import Logo from '../Logo/Logo';

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
        <DrawerContent>
          <DrawerHeader>
            <Flex justify="space-between">
              <Logo />
              <DrawerCloseButton />
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            <Flex as="nav" direction="column" align="center">
              {NAV_LINKS.map(({ title, to }) => (
                <Link color="white" key={title} to={to} onClick={onClose}>
                  {title}
                </Link>
              ))}
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
