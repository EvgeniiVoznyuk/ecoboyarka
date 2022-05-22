import React from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import bigCar from '../../img/pickup/bigCar.jpeg';

const Trucking = () => {
  return (
    <Flex backgroundColor="white.300" justifyContent="center" h="100%" w="100%">
      <Container maxW="1400px" p="40px 30px" mt="111px">
        <Flex direction="column" gridGap="50px">
          <Heading
            as="h1"
            textAlign="center"
            fontSize={{ base: '30px', lg: '48px' }}
            fontWeight="700"
            color="green.100"
          >
            Послуги самоскиду
          </Heading>
          <Flex
            direction={{ base: 'column', xl: 'row' }}
            alignItems={{ base: 'center', xl: 'flex-start' }}
            justifyContent="space-evenly"
            gridGap={{ base: '40px', xl: 'none' }}
          >
            <Image
              src={bigCar}
              maxW={{ base: '300px', lg: '500px' }}
              maxH={{ base: '300px', lg: '500px' }}
            />
            <Box minW="300px" maxW="500px">
              <Text fontSize="18px" fontWeight="400">
                Надаються послуги самоскида для вантажоперевезень об&apos;ємом
                до 5 тонн у Київській області.
                <br />
                <br />
                Подача транспорту - 300 грн.
                <br />
                <br />
                Тариф: 1 км - 10 грн.
                <br />
                <br />
                Для уточнення деталей телефонуйте за номером:
                <br />
                <br />
              </Text>
              <Link
                fontSize="22px"
                fontWeight="500"
                href="tel:+380689304726"
                _hover={{ color: 'green.300', textDecoration: 'none' }}
              >
                068 930 47 26
              </Link>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Trucking;
