import { AspectRatio, Box, Flex, HStack, Text } from '@chakra-ui/react';
import { PiBathtub, PiBed, PiCar, PiMapPin } from 'react-icons/pi';
import Image from 'next/image';

const PropertyItem = ({ property }) => {
  const { name, imgUrl, price, location, facility } = property;

  return (
    <Box
      borderRadius="10px"
      overflow="hidden"
      bg="brand.white"
      boxShadow="sm"
      cursor="pointer"
      transition='all ease-in-out 200ms'
      _hover={{ transform: 'scale(1.025)' }}
    >
      <AspectRatio ratio={1.5}>
        <Image src={imgUrl} alt={name} fill objectFit="cover" />
      </AspectRatio>
      <Box py="12px" px="18px">
        <Text color="brand.primary" fontSize="26px" fontWeight="700">
          {Intl.NumberFormat('en-us', {
            style: 'currency',
            currency: 'USD',
          }).format(price)}
        </Text>
        <Text>{name}</Text>
      </Box>
      <Box borderTop="1px solid" borderColor="gray.200" py="12px" px="18px">
        <HStack>
          <PiMapPin />
          <Text fontSize="14px">
            {location.region}, {location.country}
          </Text>
        </HStack>
        <Flex mt="8px" justifyContent="space-between">
          <HStack>
            <PiBed />
            <Text fontSize="14px">{facility.bed} bed</Text>
          </HStack>
          <HStack>
            <PiBathtub />
            <Text fontSize="14px">{facility.bath} bath</Text>
          </HStack>
          <HStack>
            <PiCar />
            <Text fontSize="14px">{facility.parking} parking</Text>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default PropertyItem;
