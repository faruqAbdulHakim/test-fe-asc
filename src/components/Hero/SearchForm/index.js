'use client';

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Spacer,
} from '@chakra-ui/react';
import { useState } from 'react';

const SearchForm = () => {
  const [formState, setFormState] = useState({
    location: 'Bangladesh',
    propertyType: 'Duplex',
    Budget: '$12.000',
  });

  return (
    <Flex flexWrap="wrap" gap="16px" alignItems="center">
      <FormControl flex="0 0 240px">
        <FormLabel mb="2px">Location</FormLabel>
        <Input
          type="text"
          value={formState.location}
          border="none"
          px={0}
          disabled
        />
      </FormControl>
      <FormControl flex="0 0 240px">
        <FormLabel mb="2px">Property Type</FormLabel>
        <Input
          type="text"
          value={formState.propertyType}
          border="none"
          px={0}
          disabled
        />
      </FormControl>
      <FormControl flex="0 0 240px">
        <FormLabel mb="2px">Budget</FormLabel>
        <Input
          type="text"
          value={formState.Budget}
          border="none"
          px={0}
          disabled
        />
      </FormControl>
      <Flex flex="1 0" justifyContent="flex-end">
        <Button
          bg="brand.primary"
          color="brand.white"
          colorScheme="messenger"
          px="24px"
          py="24px"
          whiteSpace="nowrap"
        >
          Search Property
        </Button>
      </Flex>
    </Flex>
  );
};

export default SearchForm;
