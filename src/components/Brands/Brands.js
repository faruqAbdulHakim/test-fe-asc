import { AspectRatio, Flex, SimpleGrid } from '@chakra-ui/react';
import Image from 'next/image';

const Brands = () => {
  return (
    <Flex
      flexWrap="wrap"
      justifyContent="space-around"
      style={{
        mixBlendMode: 'darken',
      }}
    >
      <AspectRatio ratio={2} flex="0 0 225px">
        <Image
          src="/images/brand-paperz.png"
          alt="Paperz"
          fill
          objectFit="contain"
        />
      </AspectRatio>
      <AspectRatio ratio={2} flex="0 0 225px">
        <Image
          src="/images/brand-dorfus.png"
          alt="Dorfus"
          fill
          objectFit="contain"
        />
      </AspectRatio>
      <AspectRatio ratio={2} flex="0 0 225px">
        <Image
          src="/images/brand-martino.png"
          alt="Martino"
          fill
          objectFit="contain"
        />
      </AspectRatio>
      <AspectRatio ratio={2} flex="0 0 225px">
        <Image
          src="/images/brand-square.png"
          alt="Square"
          fill
          objectFit="contain"
        />
      </AspectRatio>
      <AspectRatio ratio={2} flex="0 0 225px">
        <Image
          src="/images/brand-gobona.png"
          alt="Gobona"
          fill
          objectFit="contain"
        />
      </AspectRatio>
    </Flex>
  );
};

export default Brands;
