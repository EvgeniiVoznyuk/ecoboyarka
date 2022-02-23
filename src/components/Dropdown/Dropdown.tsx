import React from 'react';
import {
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

type Props = {
  title: string;
  children: { title: string; to: string }[];
};

const Dropdown: React.FC<Props> = ({ title, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Menu isOpen={isOpen}>
      <MenuButton
        bgColor="inherit"
        fontSize="22px"
        fontWeight="500"
        color="green.200"
        _focus={{ outline: 'none' }}
        _active={{ color: 'green.400' }}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
      >
        {title}
      </MenuButton>
      <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
        {children.map((dditem) => (
          <MenuItem>
            <Link
              as={RouterLink}
              to={dditem.to}
              _hover={{ textDecoration: 'none', color: 'green.400' }}
            >
              {dditem.title}
            </Link>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default Dropdown;
