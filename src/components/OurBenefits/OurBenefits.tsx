import React from 'react';
import { Flex, Image, VStack, Text, HStack } from '@chakra-ui/react';
import plantInHands from '../../img/plant_in_hands.svg';
import lightRecycle from '../../img/light_recycle.svg';
import darkRecycle from '../../img/dark_recycle.svg';
import truck from '../../img/truck.svg';
import money from '../../img/money.svg';
import weight from '../../img/weight.svg';
import wallet from '../../img/wallet.svg';

const OurBenefits = () => {
  return (
    <>
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        px="30px"
        gap="80px"
        mb="48px"
      >
        <Image src={plantInHands} maxW="600px" maxH="400px" />

        <VStack spacing="48px" mt="67px" alignItems="flex-start">
          <Text fontSize="48px" fontWeight="700" color="green.100">
            Наші переваги
          </Text>

          <Text fontSize="22px" fontWeight="400" color="black.100" maxW="533px">
            Нам не подобається хизуватися, але наші самі головні переваги
            обов&apos;язково повинні знати всі, хто хоче зробити свій внесок в
            екологію!
          </Text>

          <Text fontSize="32px" fontWeight="700" color="green.500" maxW="565px">
            Давайте разом робити світ кращим та чистішим!
          </Text>
        </VStack>
      </Flex>

      <HStack w="100%" alignItems="flex-start">
        <HStack
          p={{ base: '48px 10px', md: '48px 30px' }}
          border="1px"
          borderColor="grey.300"
          borderRadius="0 100px 100px 0"
          gap="24px"
          mb="16px"
        >
          <Image src={lightRecycle} />
          <Text
            fontSize={{ base: '14px', md: '18px', xl: '24px' }}
            fontWeight="500"
            color="green.300"
            maxW="609px"
            lineHeight={{ base: '20px', md: '29px' }}
          >
            Вже протягом 5 років безпечно утилізуємо неробочу техніку,
            небезпечні відходи, пластик, метал та багато чого іншого, чого інші
            не роблять;
          </Text>
        </HStack>
      </HStack>

      <HStack w="100%" justifyContent="flex-end">
        <HStack
          maxW="824px"
          maxH="184px"
          p={{ base: '48px 10px', md: '48px 30px' }}
          border="1px"
          borderColor="grey.300"
          borderRadius="100px 0 0 100px"
          gap="24px"
          mb="16px"
        >
          <Image src={darkRecycle} />
          <Text
            fontSize={{ base: '14px', md: '18px', xl: '24px' }}
            fontWeight="500"
            color="green.300"
            maxW="643px"
            lineHeight={{ base: '20px', md: '29px' }}
          >
            Організуємо управління відходами в житлових комплексах, великих
            підприємствах, кафе та офісах: створюємо та встановлюємо екосітки та
            контейнери, вивозимо та безпечно утилізуємо;
          </Text>
        </HStack>
      </HStack>

      <HStack w="100%" justifyContent="flex-start">
        <HStack
          maxH="184px"
          maxW="824px"
          p={{ base: '48px 10px', md: '48px 30px' }}
          border="1px"
          borderColor="grey.300"
          borderRadius="0 100px 100px 0"
          gap="24px"
          mb="16px"
        >
          <Image src={lightRecycle} />
          <Text
            fontSize={{ base: '14px', md: '18px', xl: '24px' }}
            fontWeight="500"
            color="green.300"
            maxW="575px"
            lineHeight={{ base: '20px', md: '29px' }}
          >
            Пропонуємо високі вигідні ціни по викупу вторинної сировини. Наші
            ціни та бездоганний сервіс 100% порадують вас;
          </Text>
        </HStack>
      </HStack>

      <HStack w="100%" justifyContent="flex-end">
        <HStack
          maxW="824px"
          maxH="184px"
          p={{ base: '48px 30px 48px 30px', md: '48px 180px 48px 30px' }}
          border="1px"
          borderColor="grey.300"
          borderRadius="100px 0 0 100px"
          gap="24px"
          mb="16px"
        >
          <Image src={darkRecycle} />
          <Text
            fontSize={{ base: '14px', md: '18px', xl: '24px' }}
            fontWeight="500"
            color="green.300"
            maxW="507px"
            lineHeight={{ base: '20px', md: '29px' }}
          >
            Для клієнтів на постійній основі пропонуємо щомісячний вигідний
            сервіс;
          </Text>
        </HStack>
      </HStack>

      <HStack w="100%" justifyContent="flex-start">
        <HStack
          maxH="184px"
          maxW="824px"
          p={{ base: '48px 30px 48px 30px', md: '48px 295px 48px 30px' }}
          border="1px"
          borderColor="grey.300"
          borderRadius="0 100px 100px 0"
          gap="24px"
          mb="74px"
          lineHeight={{ base: '20px', md: '29px' }}
          alignItems="center"
        >
          <Image src={lightRecycle} />
          <Text
            fontSize={{ base: '14px', md: '18px', xl: '24px' }}
            fontWeight="500"
            color="green.300"
            maxW="411px"
          >
            Надаємо фото або відео фіксацію.
          </Text>
        </HStack>
      </HStack>

      <Flex
        justifyContent="center"
        direction={{ base: 'column', lg: 'row' }}
        gap="90px"
        mb="110px"
      >
        <VStack spacing="24px">
          <Image src={truck} />
          <Text
            fontSize="24px"
            fontWeight="700"
            color="green.300"
            textAlign="center"
            w="189px"
          >
            Безкоштовний вивіз
          </Text>
        </VStack>

        <VStack spacing="24px">
          <Image src={money} />
          <Text
            fontSize="24px"
            fontWeight="700"
            color="green.300"
            textAlign="center"
          >
            Високі ціни
          </Text>
        </VStack>

        <VStack spacing="24px">
          <Image src={weight} />
          <Text
            fontSize="24px"
            fontWeight="700"
            color="green.300"
            textAlign="center"
          >
            Чесна вага
          </Text>
        </VStack>

        <VStack spacing="24px">
          <Image src={wallet} />
          <Text
            fontSize="24px"
            fontWeight="700"
            color="green.300"
            textAlign="center"
            w="218px"
          >
            Оплата зручними способами
          </Text>
        </VStack>
      </Flex>
    </>
  );
};

export default OurBenefits;
