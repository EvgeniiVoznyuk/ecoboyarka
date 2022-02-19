import React from 'react';
import { Box, Flex, Image, Link, Text } from '@chakra-ui/react';
import logo from '../../img/logo.svg';

const Logo = () => {
  return (
    <Box>
      <Link to="/" _hover={{ textDecoration: 'none' }}>
        <Flex alignItems="flex-end">
          <Image src={logo} />
          <Text
            fontSize="12px"
            fontWeight="500"
            textAlign="left"
            mb="10px"
            color="green.300"
          >
            Роздільний <br /> збір відходів
          </Text>
        </Flex>
      </Link>
    </Box>
  );
};

export default Logo;
