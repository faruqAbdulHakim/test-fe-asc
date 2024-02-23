import { Button } from '@chakra-ui/react';

const FilledNavLink = ({ children }) => {
  return (
    <Button
      variant="solid"
      bg="brand.black"
      color="brand.white"
      colorScheme="blackAlpha"
      px="24px"
    >
      {children}
    </Button>
  );
};

export default FilledNavLink;
