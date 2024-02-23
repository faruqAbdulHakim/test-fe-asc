import { Flex, HStack, Spacer, Text } from '@chakra-ui/react';
import { FilledNavLink, NavLink } from './NavLink';

const DesktopNavigation = ({ onLogin, authUser }) => {
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <HStack spacing="8px">
        <NavLink>Home</NavLink>
        <NavLink>Rent</NavLink>
        <NavLink>Sell</NavLink>
        <NavLink>About</NavLink>
      </HStack>
      <Spacer />
      {authUser ? (
        <Text fontWeight="500">Hello, {authUser.name}</Text>
      ) : (
        <HStack spacing="8px">
          <NavLink onClick={onLogin}>Log In</NavLink>
          <FilledNavLink>Create Account</FilledNavLink>
        </HStack>
      )}
    </Flex>
  );
};

export default DesktopNavigation;
