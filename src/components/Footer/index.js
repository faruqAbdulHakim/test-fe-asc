import {
  Box,
  Container,
  Flex,
  SimpleGrid,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react';
import FooterLink from './FooterLink';
import SubscribeForm from './SubscribeForm';

const Footer = () => {
  return (
    <Box as="footer" bg="brand.black" color="brand.white">
      <Container
        maxW="1440px"
        px={{ base: '28px', lg: '36px' }}
        pt="42px"
        pb="24px"
      >
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap="32px">
          <Flex direction="column">
            <Text fontSize="24px" fontWeight="700">
              Logo
            </Text>
            <Text
              fontSize="14px"
              mt="16px"
              textTransform="capitalize"
              color="gray.400"
            >
              Investing in your future
              <br />
              home at a time
            </Text>
            <Spacer minH="24px" />
            <SubscribeForm />
          </Flex>
          <VStack spacing="8px" alignItems="flex-start">
            <Text fontSize="14px" fontWeight="500">
              Quick Menu
            </Text>
            <FooterLink href="#">Home</FooterLink>
            <FooterLink href="#">Rent</FooterLink>
            <FooterLink href="#">Sell</FooterLink>
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </VStack>
          <VStack spacing="8px" alignItems="flex-start">
            <Text fontSize="14px" fontWeight="500">
              About Us
            </Text>
            <FooterLink href="#">Payment</FooterLink>
            <FooterLink href="#">Make saving more</FooterLink>
            <FooterLink href="#">Tax Calculator</FooterLink>
            <FooterLink href="#">Talk to Us</FooterLink>
          </VStack>
          <VStack spacing="8px" alignItems="flex-start">
            <Text fontSize="14px" fontWeight="500">
              Contact Info
            </Text>
            <FooterLink href="#">
              123 Main Street, Apt 4B
              <br />
              Los Angeles, CA 90001, USA
            </FooterLink>
            <FooterLink href="telp:+0881234567891">
              +088 (123) 456-78-91
            </FooterLink>
            <FooterLink href="mailto:company@gmail.com">
              company@gmail.com
            </FooterLink>
          </VStack>
        </SimpleGrid>
        <Box mt="40px" h="1px" bg="gray.700"></Box>
        <Text mt="16px" fontSize="14px" textAlign="center" color="gray.400">
          &copy; 2023 UiXSHUVO All Rights Reserved
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
