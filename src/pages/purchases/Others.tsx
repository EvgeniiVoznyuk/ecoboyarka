import React from 'react';
import { Container, Flex, Heading, Image, Text } from '@chakra-ui/react';
import oil from '../../img/others/oil.jpeg';
import bigBottle from '../../img/others/big-bottle.jpeg';
import otherPlastic from '../../img/others/other-plastic.jpeg';
import foil from '../../img/others/foil.jpeg';

const Others = () => {
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
            Також закуповуємо інші види відходів
          </Heading>
          <Flex
            direction={{ base: 'column', xl: 'row' }}
            alignItems={{ base: 'center', xl: 'flex-start' }}
            gridGap="50px"
          >
            <Image
              src={oil}
              maxW={{ base: '300px', lg: '500px' }}
              maxH={{ base: '300px', lg: '500px' }}
            />
            <Text fontSize="22px" fontWeight="700">
              Відпрацьована олія (моторна)
            </Text>
          </Flex>

          <Flex
            direction={{ base: 'column', xl: 'row' }}
            alignItems={{ base: 'center', xl: 'flex-start' }}
            gridGap="50px"
          >
            <Image
              src={otherPlastic}
              maxW={{ base: '300px', lg: '500px' }}
              maxH={{ base: '300px', lg: '500px' }}
            />
            <Text fontSize="22px" fontWeight="700">
              Пластмасовий (пластиковий) профіль, підвіконня, штапік
            </Text>
          </Flex>

          <Flex
            direction={{ base: 'column', xl: 'row' }}
            alignItems={{ base: 'center', xl: 'flex-start' }}
            gridGap="50px"
          >
            <Image
              src={bigBottle}
              maxW={{ base: '300px', lg: '500px' }}
              maxH={{ base: '300px', lg: '500px' }}
            />
            <Text fontSize="22px" fontWeight="700">
              Бутлі 20 л (полікарбонатні та інші)
            </Text>
          </Flex>

          <Flex
            direction={{ base: 'column', xl: 'row' }}
            alignItems={{ base: 'center', xl: 'flex-start' }}
            gridGap="50px"
          >
            <Image
              src={foil}
              maxW={{ base: '300px', lg: '500px' }}
              maxH={{ base: '300px', lg: '500px' }}
            />
            <Text fontSize="22px" fontWeight="700">
              Фольга (побутова, промислова)
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Others;
