import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';

const StatsSection = () => {
  return (
    <Box color="white" mt="120px" pt="80px" pb="80px" bg="brand.black">
      <Flex
        position="relative"
        flexWrap="wrap"
        justifyContent="space-around"
        w="95%"
        maxW="1024px"
        marginInline="auto"
      >
        <Flex flex="0 0 320px" gap="16px" alignItems="center">
          <Text fontSize="56px" fontWeight="700">
            11K+
          </Text>
          <Text color="gray.400">
            Happy Customers
            <br />
            with our services
          </Text>
        </Flex>
        <Flex flex="0 0 320px" gap="16px" alignItems="center">
          <Text fontSize="56px" fontWeight="700">
            22K+
          </Text>
          <Text color="gray.400">
            The best property
            <br />
            we provide
          </Text>
        </Flex>
        <Flex flex="0 0 320px" gap="16px" alignItems="center">
          <Text fontSize="56px" fontWeight="700">
            520+
          </Text>
          <Text color="gray.400">
            Awesome companies
            <br />
            believe in us
          </Text>
        </Flex>
      </Flex>

      <Box
        mt="64px"
        position="relative"
        h="2px"
        bg="gray.600"
        w="95%"
        maxW="1024px"
        marginInline="auto"
      />

      <SimpleGrid
        mt="64px"
        position="relative"
        columns={{ base: 1, lg: 2 }}
        textAlign={{ base: 'center', lg: 'start' }}
        spacing="16px"
        w="95%"
        maxW="1024px"
        marginInline="auto"
      >
        <Heading fontSize="42px" textTransform="capitalize">
          Where comfort meets convenience
        </Heading>
        <Text color="gray.400">
          Look for an agency with a proven track record of success in buying,
          selling, or renting properties. You want an agency that has been in
          the industry for a while and has experience
        </Text>
      </SimpleGrid>
    </Box>
  );
};

export default StatsSection;
