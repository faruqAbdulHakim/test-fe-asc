import { Button } from '@chakra-ui/react';

const FilledNavLink = ({ onClick, children }) => {
  return (
    <Button
      variant="solid"
      bg="brand.black"
      color="brand.white"
      colorScheme="blackAlpha"
      px="24px"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default FilledNavLink;
