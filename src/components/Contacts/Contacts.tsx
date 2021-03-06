import React, { useState } from 'react';
import {
  Flex,
  Text,
  VStack,
  HStack,
  FormControl,
  Input,
  Button,
  Link,
  Image,
  Box,
  Container,
} from '@chakra-ui/react';
import telegram from '../../img/telegram.svg';
import instagram from '../../img/instagram.svg';
import facebook from '../../img/facebook.svg';
import veryLightRecycle from '../../img/very_light_recycle0.2.svg';

const Contacts = () => {
  const [name, setName] = useState<string | null>('');
  const [phone, setPhone] = useState<string | null>('');

  return (
    <Flex
      id="contacts"
      w="100%"
      py="100px"
      px="10px"
      bgColor="white.200"
      alignItems="center"
    >
      <Container maxW="1400px">
        <Text
          textAlign="center"
          fontSize="48px"
          fontWeight="700"
          color="green.100"
          mb="50px"
        >
          Контакти
        </Text>
        <VStack spacing="53px" alignItems="flex-start">
          <Flex
            w="100%"
            gap="95px"
            alignItems={{ base: 'center', xl: 'initial' }}
            direction={{ base: 'column', xl: 'row' }}
          >
            <FormControl
              as="fieldset"
              p="64px"
              bgColor="white.100"
              border="1px"
              borderColor="grey.300"
              boxShadow="0px 4px 10px rgba(0, 0, 0, 0.15)"
              borderRadius="20px"
              textAlign="center"
              maxW="600px"
            >
              <Text
                fontSize="36px"
                fontWeight="700"
                color="green.100"
                mb="24px"
              >
                Залишились питання?
              </Text>

              <Text
                fontSize="18px"
                fontWeight="400"
                color="green.100"
                maxW="427px"
                mb="48px"
              >
                Залиште свій номер телефону, наш менеджер зв’яжеться з Вами
                найближчим часом.
              </Text>

              <VStack
                spacing="18px"
                fontSize="18px"
                fontWeight="500"
                color="green.80"
                mb="24px"
              >
                <Input
                  border="1px solid"
                  borderColor="grey.300"
                  borderRadius="10px"
                  type="text"
                  size="lg"
                  placeholder="Ім’я"
                  color="black"
                  value={String(name)}
                  onInput={(e) => {
                    const { value } = e.target as HTMLInputElement;
                    setName(value);
                  }}
                />
                <Input
                  border="1px solid"
                  borderColor="grey.300"
                  borderRadius="10px"
                  type="tel"
                  size="lg"
                  placeholder="Номер телефону"
                  value={String(phone)}
                  onInput={(e) => {
                    const { value } = e.target as HTMLInputElement;
                    setPhone(value);
                  }}
                />
              </VStack>

              <Button
                type="submit"
                p="13px 65px"
                bgColor="green.500"
                fontSize="18px"
                fontWeight="500"
                color="white.100"
              >
                Надіслати
              </Button>
            </FormControl>
            <HStack
              spacing="54px"
              justify={{ base: 'center', lg: 'flex-start' }}
              alignItems={{ base: 'center', lg: 'flex-start' }}
            >
              <Flex
                direction={{ base: 'column', md: 'row', xl: 'column' }}
                gap="56px"
                justify="flex-start"
                alignItems="flex-start"
              >
                <Flex direction="column" gap="16px">
                  <Text
                    fontSize="28px"
                    fontWeight="600"
                    color="green.300"
                    w="252px"
                    mb="12px"
                  >
                    Зв’язатись з нами
                  </Text>

                  <Link
                    href="tel:+380689304726"
                    _hover={{ color: 'green.300', textDecoration: 'none' }}
                    fontSize="24px"
                    fontWeight="500"
                    color="green.100"
                  >
                    +38 068 930 47 26
                  </Link>

                  <Link
                    href="tel:+380739398383"
                    _hover={{ color: 'green.300', textDecoration: 'none' }}
                    fontSize="24px"
                    fontWeight="500"
                    color="green.100"
                  >
                    +38 073 939 83 83
                  </Link>

                  <Link
                    href="mailto:za_eco@gmail.com"
                    _hover={{ color: 'green.300', textDecoration: 'none' }}
                    fontSize="24px"
                    fontWeight="500"
                    color="green.100"
                  >
                    za_eco@gmail.com
                  </Link>
                </Flex>

                <Flex direction="column">
                  <Text
                    fontSize="28px"
                    fontWeight="600"
                    color="green.300"
                    mb="28px"
                  >
                    Ми в мережі
                  </Text>

                  <HStack spacing="12px" borderRadius="7px">
                    <Link href="/">
                      <Image maxW="32px" maxWidth="32px" src={telegram} />
                    </Link>
                    <Link
                      href="https://www.instagram.com/za_eco_ukraine/"
                      target="_blank"
                    >
                      <Image maxW="32px" maxWidth="32px" src={instagram} />
                    </Link>
                    <Link
                      href="https://www.facebook.com/za.eco.ukraine"
                      target="_blank"
                    >
                      <Image maxW="32px" maxWidth="32px" src={facebook} />
                    </Link>
                  </HStack>
                </Flex>
              </Flex>
            </HStack>

            <Flex
              gap="16px"
              direction="column"
              maxH="425px"
              justify="flex-start"
            >
              <Text
                fontSize="28px"
                fontWeight="600"
                color="green.300"
                w="202px"
                mb="12px"
              >
                Графік роботи
              </Text>

              <Text
                fontSize="24px"
                fontWeight="500"
                color="green.100"
                w="233px"
              >
                Пн-Сб: 8.00 - 18.00
              </Text>

              <Text fontSize="24px" fontWeight="500" color="green.100">
                Нд: вихідний
              </Text>

              <Image
                mt="150px"
                display={{ base: 'none', xl: 'block' }}
                maxW="200px"
                maxH="200px"
                src={veryLightRecycle}
              />
            </Flex>
          </Flex>

          <Flex
            id="receptionPoints"
            w="100%"
            alignItems="center"
            direction={{ base: 'column', xl: 'row' }}
            gap="230px"
          >
            <Box fontSize="24px" fontWeight="500" color="green.100">
              <Text
                fontSize="28px"
                fontWeight="600"
                color="green.300"
                mb="28px"
              >
                Адреса
              </Text>

              <Text fontWeight="700" mb="18px">
                Прийомні пункти
              </Text>

              <Text mb="16px">с. Тарасівка, вул. Залізнична 8а(за АТБ)</Text>

              <Text mb="24px">м. Боярка, вул. Молодіжна 57(біля АТБ)</Text>

              <Text fontWeight="700" mb="18px">
                Сортувальний склад
              </Text>

              <Text>м. Боярка, вул. Білогородська 49а</Text>

              <Image
                ml="425px"
                display={{ base: 'none', xl: 'block' }}
                mawW="200px"
                maxH="200px"
                src={veryLightRecycle}
              />
            </Box>

            <Box
              width={{ base: '300px', md: '618px' }}
              height={{ base: '320px', md: '451px' }}
            >
              <iframe
                title="EcoBoyarkaPlaces"
                src="https://www.google.com/maps/d/u/0/embed?mid=1DXlT9ALZJS1M1fKJkDzEHq9dGbD0HwqF&ehbc=2E312F"
                allow="geolocation"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                allowFullScreen
              />
            </Box>
          </Flex>
        </VStack>
      </Container>
    </Flex>
  );
};

export default Contacts;
