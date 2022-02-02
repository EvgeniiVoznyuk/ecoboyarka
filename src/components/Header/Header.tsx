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
      pb="130px"
    >
      <HeaderNav />
      <Box mt="100px">
        <VStack>
          <Text fontSize="20px" fontWeight="400" color="green.100" mb="36px">
            Ми знаємо: Ти можеш!
          </Text>
          <Text
            fontSize={{ base: '30px', md: '64px' }}
            fontWeight="700"
            color="green.100"
            pb="48px"
            lineHeight="70px"
          >
            Сортуй сміття - <br /> збережи планету
          </Text>
          <Text
            fontSize="22px"
            fontWeight="500"
            textAlign="center"
            color="green.100"
            pb="48px"
            px="10px"
          >
            Є таке правило: вранці встав, вмився, привів <br />
            себе в порядок - і одразу ж приведи в порядок <br />
            свою планету.
          </Text>
          <Button
            bgColor="green.500"
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
