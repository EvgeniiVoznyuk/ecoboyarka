import React from 'react';
import { Box, Text, Link, VStack, Flex } from '@chakra-ui/react';
import header from '../../img/header.png';

const Header = () => {
  return (
    <Flex
      w="100%"
      flexDir="column"
      justifyContent="center"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgImage={header}
      minH="100vh"
      my="0 !important"
    >
      <Box pt={{ base: '40px', md: '100px' }}>
        <VStack spacing={{ base: '44px', md: '120px', lg: '44px' }}>
          <Text
            fontSize={{ base: '25px', md: '25px', lg: '20px' }}
            fontWeight="400"
            color="green.100"
          >
            Ми знаємо: Ти можеш!
          </Text>
          <Text
            fontSize={{ base: '40px', md: '64px' }}
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
          <Link
            href="#receptionPoints"
            bgColor="green.500"
            _hover={{ bgColor: 'green.400' }}
            borderRadius="15px"
            lineHeight="22px"
            fontSize="18px"
            fontWeight="500"
            py="18px"
            px="32px"
            color="white.80"
          >
            Знайти пункти прийому
          </Link>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Header;
