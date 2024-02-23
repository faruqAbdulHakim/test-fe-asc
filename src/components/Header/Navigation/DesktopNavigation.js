import { Flex, HStack, Spacer, Text } from '@chakra-ui/react';
import { FilledNavLink, NavLink } from './NavLink';

const DesktopNavigation = ({ onLogin, onLogout, authUser }) => {
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
        <HStack spacing="16px">
          <Text fontWeight="500">Hello, {authUser.name}</Text>
          <FilledNavLink onClick={onLogout}>Logout</FilledNavLink>
        </HStack>
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
