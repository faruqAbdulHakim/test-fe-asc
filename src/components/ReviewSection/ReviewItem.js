import { colors } from '@/app/theme';
import { Box, HStack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';

const ReviewItem = ({ reviewerId, reviewerName }) => {
  return (
    <Box
      border="1px solid"
      borderColor="gray.200"
      boxShadow="lg"
      borderRadius="10px"
      p="16px 24px"
    >
      <BiSolidQuoteAltLeft
        style={{ width: '52px', height: '52px', color: colors.brand.primary }}
      />
      <Text mt="16px">
        From the moment i contacted them, they, we&apos;re professional,
        knowledgeable, and attentive to my needs. They took the time to listen
        to my preferences and provided me with a wide range of properties that
        met my criteria
      </Text>
      <HStack mt="32px" spacing="16px">
        <Box
          w="44px"
          h="44px"
          overflow="hidden"
          borderRadius="50%"
          position="relative"
        >
          <Image
            src={`https://i.pravatar.cc/150?u=${reviewerId}`}
            alt={reviewerName}
            fill
            objectFit="cover"
            objectPosition="center"
          />
        </Box>
        <Box>
          <Text fontWeight="500">{reviewerName}</Text>
          <Text fontSize="14px" color="gray.600">
            CEO, NoonBrew
          </Text>
        </Box>
      </HStack>
    </Box>
  );
};

export default ReviewItem;
