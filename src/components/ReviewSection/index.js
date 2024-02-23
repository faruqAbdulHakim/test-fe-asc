import { Box, Container, Heading } from '@chakra-ui/react';
import React from 'react';
import ReviewList from './ReviewList';

const getData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/', {
    next: {
      revalidate: 3600,
    },
  });
  if (!response.ok) {
    throw new Error('Something went wrong');
  }

  return response.json();
};

const ReviewSection = async () => {
  const reviews = await getData();

  return (
    <Box bg="brand.white" py="64px">
      <Container maxW="1440px" px={{ base: '28px', lg: '36px' }}>
        <Heading
          mx="auto"
          display="block"
          maxW="500px"
          fontSize="40px"
          textTransform="capitalize"
          textAlign="center"
        >
          Kind words from our happy customers
        </Heading>
      </Container>
      <Box mt="36px">
        <ReviewList reviews={reviews} />
      </Box>
    </Box>
  );
};

export default ReviewSection;
