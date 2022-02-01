import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import header from '../../img/header.png';
import HeaderNav from './HeaderNav';

const Header = () => {
  return (
    <Box w="100%" bgImage={header}>
      <HeaderNav />
      <Box
        py="100px"
        px="400px"
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPosition="center"
      >
        <Text fontSize="20px" fontWeight="400" color="green.100" mb="36px">
          Ми знаємо: Ти можеш!
        </Text>
        <Text fontSize="64px" fontWeight="700" color="green.100" mb="48px">
          Сортуй сміття - <br /> збережи планету
        </Text>
        <Text
          fontSize="22px"
          fontWeight="500"
          textAlign="center"
          color="green.100"
          mb="48px"
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
          py="18px"
          px="32px"
          color="white.100"
        >
          Знайти пункти прийому
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
