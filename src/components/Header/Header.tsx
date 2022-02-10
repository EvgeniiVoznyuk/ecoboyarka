import React from 'react';
import { Box, Text, Button, VStack } from '@chakra-ui/react';
import header from '../../img/header.png';
import HeaderNav from './HeaderNav';

const Header = () => {
  return (
    <Box
      w="100%"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgImage={header}
      minH="100vh"
    >
      <HeaderNav />
      <Box pt={{ base: '40px', md: '100px' }}>
        <VStack spacing={{ base: '44px', md: '120px', lg: '44px' }}>
          <Text
            fontSize={{ base: '20px', md: '25px', lg: '20px' }}
            fontWeight="400"
            color="green.100"
          >
            Ми знаємо: Ти можеш!
          </Text>
          <Text
            fontSize={{ base: '30px', md: '64px' }}
            fontWeight="700"
            color="green.100"
            lineHeight={{ base: '50px', md: '70px' }}
          >
            Сортуй сміття - <br /> збережи планету
          </Text>
          <Text
            fontSize={{ base: '15px', md: '22px' }}
            fontWeight="500"
            textAlign="center"
            color="green.100"
            px="10px"
          >
            Є таке правило: вранці встав, вмився, привів <br />
            себе в порядок - і одразу ж приведи в порядок <br />
            свою планету.
          </Text>
          <Button
            bgColor="green.500"
            _hover={{ bgColor: 'green.400' }}
            borderRadius="15px"
            lineHeight="22px"
            fontSize="18px"
            fontWeight="500"
            py="28px"
            px="32px"
            color="white.80"
          >
            Знайти пункти прийому
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default Header;
