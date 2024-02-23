import { Text } from '@chakra-ui/react';
import Link from 'next/link';

const FooterLink = ({ href, children }) => {
  return (
    <Text
      as={Link}
      href={href}
      color="gray.400"
      fontSize="14px"
      _hover={{ textDecoration: 'underline' }}
    >
      {children}
    </Text>
  );
};

export default FooterLink;
