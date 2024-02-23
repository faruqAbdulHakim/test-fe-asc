import { Button } from '@chakra-ui/react';

const NavLink = ({ onClick, children }) => {
  return (
    <Button
      variant="ghost"
      bg="brand.lightGray"
      color="brand.black"
      colorScheme="messenger"
      px="24px"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default NavLink;
