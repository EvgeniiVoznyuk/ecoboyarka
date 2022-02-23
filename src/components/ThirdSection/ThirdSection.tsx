import React, { useEffect, useState } from 'react';
import { Flex, VStack, Text, Box, Image, Container } from '@chakra-ui/react';
import paper from 'img/paper.png';
import cardboard from 'img/cardboard.png';
import books from 'img/books.png';
import { getSpreadsheetRows } from 'api/spredsheet';
import { GoogleSpreadsheetRow } from 'google-spreadsheet';

const ThirdSection = () => {
  const [rows, setRows] = useState<GoogleSpreadsheetRow[]>([]);

  useEffect(() => {
    const fetchRows = async () => {
      const fetchedRows = await getSpreadsheetRows();

      setRows(fetchedRows);
    };

    fetchRows();
  }, []);

  return (
    <Flex justifyContent="center" w="100%">
      <Container maxW="1440px">
        <VStack
          w="100%"
          px="10px"
          alignItems="center"
          spacing="55px"
          pb="136px"
        >
          <Flex
            id="services"
            width="100%"
            justify="space-between"
            direction={{ base: 'column', lg: 'row' }}
          >
            <VStack
              alignItems={{ base: 'center', lg: 'flex-start' }}
              textAlign={{ base: 'center', lg: 'left' }}
            >
              <Text
                fontSize="36px"
                fontWeight="500"
                color="black.100"
                pb="16px"
                lineHeight="49px"
                maxW="575px"
              >
                Компанія приймає макулатуру на вторинну переробку.
              </Text>

              <Text
                textAlign={{ base: 'center', xl: 'left' }}
                fontSize="14px"
                fontWeight="400"
                color="green.500"
                pb="24px"
              >
                Вартість товару безпосередньо залежить від класу макулатури.
              </Text>

              <Text
                fontSize="24px"
                fontWeight="500"
                color="black.100"
                lineHeight="32px"
                maxW="500px"
              >
                Ми допомагаємо вигідно здати макулатуру всіх марок у мінімальних
                об’ємах або оптом.
              </Text>
            </VStack>
            <VStack
              mt={{ base: '30px', lg: '0' }}
              spacing="30px"
              fontSize="18px"
              fontWeight="500"
              color="black.100"
              alignItems={{ base: 'center', lg: 'flex-start' }}
            >
              <Text maxW="592px">
                - Ми проводимо закупівлю у громадян, а також виконуємо
                самостійний вивіз макулатури з підприємств і офісів на основі
                домовленості.
              </Text>
              <Text>
                - Картон приймається в сухому вигляді, дозволена вологість 10%.
              </Text>
              <Text maxW="563px">
                - Архівну макулатуру слід здавати без швидкозшивачів і
                поліетиленових файлів.
              </Text>
            </VStack>
          </Flex>

          <Flex
            id="products&prices"
            direction={{ base: 'column', lg: 'row' }}
            gap="28px"
          >
            <Box
              borderRadius="20px"
              boxShadow="0px 4px 10px rgba(86, 123, 61, 0.25)"
              pb="55px"
            >
              <Image src={paper} />
              <VStack spacing="16px" px="25px" alignItems="space-between">
                <Text
                  fontSize="24px"
                  fontWeight="700"
                  color="green.100"
                  mb="28px"
                >
                  МС-2А
                </Text>
                <Flex justify="space-between">
                  <VStack
                    spacing="16px"
                    fontSize="18px"
                    fontWeight="500"
                    color="green.100"
                    alignItems="flex-start"
                  >
                    <Text>- Білий папір</Text>
                    <Text>- Папір А4</Text>
                    <Text>
                      - Офісний друкований <br /> <Text ml="13px">папір</Text>
                    </Text>
                  </VStack>
                  <VStack
                    spacing="16px"
                    fontSize="18px"
                    fontWeight="600"
                    color="green.300"
                    alignItems="flex-end"
                  >
                    <Text>4₴/кг</Text>
                    <Text>4₴/кг</Text>
                    <Text>4₴/кг</Text>
                  </VStack>
                </Flex>
              </VStack>
            </Box>

            <Box
              borderRadius="20px"
              boxShadow="0px 4px 10px rgba(86, 123, 61, 0.25)"
              pb="80px"
            >
              <Image src={cardboard} />
              <VStack spacing="16px" px="25px" alignItems="space-between">
                <Text
                  fontSize="24px"
                  fontWeight="700"
                  color="green.100"
                  mb="28px"
                >
                  МС-5Б
                </Text>
                <Flex justify="space-between">
                  <VStack
                    spacing="16px"
                    fontSize="18px"
                    fontWeight="500"
                    color="green.100"
                    alignItems="flex-start"
                  >
                    <Text>- Гофрокартон, коробки</Text>
                    <Text>- Тубуси</Text>
                    <Text>- Папір у рулонах</Text>
                  </VStack>
                  <VStack
                    spacing="16px"
                    fontSize="18px"
                    fontWeight="600"
                    color="green.300"
                    alignItems="flex-end"
                  >
                    <Text>4₴/кг</Text>
                    <Text>4₴/кг</Text>
                    <Text>4₴/кг</Text>
                  </VStack>
                </Flex>
              </VStack>
            </Box>

            <Box
              borderRadius="20px"
              boxShadow="0px 4px 10px rgba(86, 123, 61, 0.25)"
              pb="80px"
            >
              <Image src={books} />
              <VStack spacing="16px" px="25px" alignItems="space-between">
                <Text
                  fontSize="24px"
                  fontWeight="700"
                  color="green.100"
                  mb="28px"
                >
                  МС-7Б
                </Text>
                <Flex justify="space-between">
                  <VStack
                    spacing="16px"
                    fontSize="18px"
                    fontWeight="500"
                    color="green.100"
                    alignItems="flex-start"
                  >
                    <Text>- Книги</Text>
                    <Text>- Журнали</Text>
                    <Text>- Зошити і т.д.</Text>
                  </VStack>
                  <VStack
                    spacing="16px"
                    fontSize="18px"
                    fontWeight="600"
                    color="green.300"
                    alignItems="flex-end"
                  >
                    <Text>4₴/кг</Text>
                    <Text>4₴/кг</Text>
                    <Text>4₴/кг</Text>
                  </VStack>
                </Flex>
              </VStack>
            </Box>
          </Flex>
        </VStack>
      </Container>
    </Flex>
  );
};

export default ThirdSection;
