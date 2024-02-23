import { AspectRatio, Box, Button } from '@chakra-ui/react';
import { MdPlayArrow } from "react-icons/md";
import Image from 'next/image';
import { colors } from '@/app/theme';

const VideoSection = () => {
  return (
    <Box position="relative">
      <Box
        position="absolute"
        bg="brand.black"
        top="0"
        left="0"
        width="100%"
        height="60%"
      ></Box>
      <AspectRatio
        ratio={2.25}
        maxW="1024px"
        borderRadius="16px"
        overflow="hidden"
        w="90vw"
        mx="auto"
      >
        <Image
          src="/images/apartment2.jpg"
          alt="apartement"
          fill
          objectFit="cover"
        />
      </AspectRatio>
      <Button
        aria-label="Play Video"
        w="64px"
        h="64px"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        bg="brand.white"
        borderRadius="50%"
        p="12px"
      >
        <MdPlayArrow
          style={{
            width: '100%',
            height: '100%',
            fill: colors.brand.primary,
          }}
        />
      </Button>
    </Box>
  );
};

export default VideoSection;
