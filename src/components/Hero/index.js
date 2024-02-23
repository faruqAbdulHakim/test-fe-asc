import { Box, Button, Container, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import SearchForm from './SearchForm';

const Hero = () => {
  return (
    <Container
      maxW="1440px"
      px={{ base: '28px', lg: '36px' }}
      position="relative"
    >
      <Box
        minH="600px"
        h="calc(100vh - 120px)"
        position="relative"
        borderRadius="28px"
        overflow="hidden"
      >
        <Image
          src="/images/hero.jpg"
          alt="Real estate"
          fill
          objectFit="cover"
          objectPosition="center"
        />
        <Box
          position="absolute"
          top="15%"
          left="50%"
          transform="translateX(-50%)"
          width="80%"
          maxW="560px"
        >
          <Heading as="h1" textAlign="center" color="brand.black">
            Investing In Your Future One Home At A Time
          </Heading>
          <Text mt="32px" textAlign="center" color="gray.700">
            We&apos;ll help you find the key to your dream home. Experience the
            joy of homeownership. Let us make your home buying journey simple
          </Text>
          <Button
            display="block"
            mt="32px"
            mx="auto"
            variant="outline"
            colorScheme="blackAlpha"
            color="brand.black"
            borderColor="bran.black"
          >
            Get Started
          </Button>
        </Box>
      </Box>
      <Box
        bg="brand.white"
        borderRadius="28px"
        p="28px"
        boxShadow="lg"
        position="relative"
        w="90%"
        marginInline="auto"
        transform="translateY(-50%)"
      >
        <SearchForm />
      </Box>
    </Container>
  );
};

export default Hero;
