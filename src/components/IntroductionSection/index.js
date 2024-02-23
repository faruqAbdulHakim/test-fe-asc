import {
  AspectRatio,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';

const IntroductionSection = () => {
  return (
    <Container maxW="1440px" px={{ base: '28px', lg: '36px' }}>
      <Flex
        as="section"
        mt="64px"
        direction={{
          base: 'column',
          lg: 'row',
        }}
        justifyContent="space-around"
        alignItems="center"
        textAlign={{ base: 'center', lg: 'start' }}
        gap="32px"
      >
        <Box maxW="400px">
          <Heading as="h2" fontSize="42px" textTransform="capitalize">
            Navigating your real estate journey
          </Heading>
          <Text mt="32px">
            Look for an agency with a proven track record of success in buying,
            selling, or renting properties. You want an agency that has been in
            the industry for a while and has experience dealing with various
            types of properties
          </Text>
          <Button
            mt="32px"
            variant="solid"
            bg="brand.black"
            color="brand.white"
            colorScheme="blackAlpha"
          >
            Contact Us
          </Button>
        </Box>
        <AspectRatio
          w="100%"
          maxW="380px"
          borderRadius="12px"
          overflow="hidden"
          ratio={0.8}
        >
          <Image src="/images/apartment.jpg" alt="hero" fill objectFit="cover" />
        </AspectRatio>
      </Flex>
    </Container>
  );
};

export default IntroductionSection;
