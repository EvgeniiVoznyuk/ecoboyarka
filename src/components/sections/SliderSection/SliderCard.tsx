import { Flex, VStack, Text, Image, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

interface IProps {
  img: string;
  title: string;
  color: string;
  url: string;
  description: string;
}
const SliderCard = ({ img, title, color, description, url }: IProps) => {
  return (
    <VStack
      boxShadow="(0px 4px 4px rgba(0, 0, 0, 0.25))"
      gridGap="16px"
      alignItems="flex-start"
      p={{ base: '10px', md: '22px' }}
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
        w={{ base: '200px', md: '286px' }}
        h={{ base: '200px', md: '286px' }}
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

      <Link as={RouterLink} to={url} fontSize="18px" color="green.500">
        Детальніше
      </Link>
    </VStack>
  );
};

export default SliderCard;
