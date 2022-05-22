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
import car from '../../img/pickup/car.jpeg';
import bigCar from '../../img/pickup/bigCar.jpeg';

const DismantlingCutting = () => {
  return (
    <Flex backgroundColor="white.300" justifyContent="center" w="100%">
      <Container maxW="1400px" p="40px 30px" mt="111px">
        <Flex direction="column" gridGap="50px">
          <Heading
            as="h1"
            textAlign="center"
            fontSize={{ base: '30px', lg: '48px' }}
            fontWeight="700"
            color="green.100"
          >
            Роздільний збір, прийом та вивіз вторинної сировини
          </Heading>
          <Flex
            direction={{ base: 'column', xl: 'row' }}
            alignItems={{ base: 'center', xl: 'flex-start' }}
            justifyContent="space-evenly"
            gridGap={{ base: '40px', xl: 'none' }}
          >
            <Image
              src={car}
              maxW={{ base: '300px', lg: '500px' }}
              maxH={{ base: '300px', lg: '500px' }}
            />
            <Box minW="300px" maxW="500px">
              <Text fontSize="18px" fontWeight="400">
                Самовивіз вторинної сировини здійснюється транспортом нашої
                компанії.
                <br />
                <br /> За наявності вторинної сировини загальною кількістю понад
                300 кг наш виїзд безкоштовний.
                <br />
                <br />
                Ми надаємо для вивезення вторинної сировини та металобрухту
                машини вантажопідйомністю до 10000 кг.
              </Text>
            </Box>
          </Flex>

          <Flex
            direction={{ base: 'column-reverse', xl: 'row' }}
            alignItems={{ base: 'center', xl: 'flex-start' }}
            justifyContent="space-evenly"
            gridGap={{ base: '40px', xl: 'none' }}
          >
            <Flex direction="column" gridGap="20px" minW="300px" maxW="500px">
              <Text fontSize="18px" fontWeight="400">
                Для виїзду нашого транспорту до вас за вторинною сировиною, Ви
                повинні залишити заявку у нашого менеджера за телефоном{' '}
                <Link
                  fontWeight="500"
                  href="tel:+380689304726"
                  _hover={{ color: 'green.300', textDecoration: 'none' }}
                >
                  068 930 47 26
                </Link>
                <br />
                <br />
                При подачі нашого транспорту для вас надаються послуги
                вантажників для оперативного завантаження вторинної сировини.
                Під час прийому та вивезення вторинної сировини зважування та
                оплата відбувається відразу на місці.
              </Text>
            </Flex>
            <Image
              src={bigCar}
              maxW={{ base: '300px', lg: '500px' }}
              maxH={{ base: '300px', lg: '500px' }}
            />
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default DismantlingCutting;
