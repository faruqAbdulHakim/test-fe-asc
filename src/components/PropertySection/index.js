import PropertyList from './PropertyList';
import { getDummyPropertyList } from '@/lib/data';
import { Box, Button, Container, Heading, Text } from '@chakra-ui/react';

const PropertySection = () => {
  const properties = getDummyPropertyList();

  return (
    <Container maxW="1440px" px={{ base: '28px', lg: '36px' }}>
      <Heading fontSize="40px" textTransform="capitalize" textAlign="center">
        Our popular property
      </Heading>
      <Text
        maxW="780px"
        mt="32px"
        marginInline="auto"
        textTransform="capitalize"
        textAlign="center"
        color="gray.600"
      >
        Look for an agency with a proven track record of success in buying,
        selling, or renting properties. You want an agency that has been in the
        industry for a while and has experience
      </Text>
      <Box mt="40px">
        <PropertyList properties={properties} />
      </Box>
      <Button
        mt="72px"
        display="block"
        marginInline="auto"
        bg="brand.black"
        color="brand.white"
        colorScheme="blackAlpha"
      >
        Explore All Property
      </Button>
    </Container>
  );
};

export default PropertySection;
