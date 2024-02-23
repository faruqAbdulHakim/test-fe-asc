import { Button, Flex, FormControl, Input } from '@chakra-ui/react';

const SubscribeForm = () => {
  return (
    <FormControl>
      <Flex
        outline="1px solid"
        outlineColor="gray.400"
        outlineOffset="4px"
        gap="4px"
        borderRadius="6px"
      >
        <Input fontSize="14px" type="email" border="none" placeholder="Enter your email" />
        <Button fontSize="14px" px="24px" bg="brand.primary" color="brand.white" colorScheme="messenger">
          Subscribe
        </Button>
      </Flex>
    </FormControl>
  );
};

export default SubscribeForm;
