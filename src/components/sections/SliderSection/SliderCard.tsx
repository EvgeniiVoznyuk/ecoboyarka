import { Flex, VStack, Text, Image } from '@chakra-ui/react';

interface IProps {
  img: string;
  title: string;
  color: string;
  description: string;
}
const SliderCard = ({ img, title, color, description }: IProps) => {
  return (
    <VStack
      boxShadow="(0px 4px 4px rgba(0, 0, 0, 0.25))"
      gridGap="16px"
      alignItems="flex-start"
      p="22px"
      w="330px"
      border="1px solid"
      borderColor="grey.100"
      borderRadius="20px"
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        border="1px solid"
        borderColor={color}
        borderRadius="20px"
        bg="#ECF1EF"
        w="286px"
        h="286px"
        alignSelf="center"
      >
        <Image src={img} />
      </Flex>

      <Text fontSize="24px" fontWeight="500" color="black">
        {title}
      </Text>

      <Text fontSize="14px" color="black">
        {description}
      </Text>

      <Text fontSize="18px" color="green.500">
        Детальніше
      </Text>
    </VStack>
  );
};

export default SliderCard;
