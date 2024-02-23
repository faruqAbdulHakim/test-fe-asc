'use client';
import { Box, Container, Flex, HStack, Text } from '@chakra-ui/react';
import { DesktopNavigation, MobileNavigation } from './Navigation';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { authUserActions } from '@/lib/features/authUser/authUserSlice';

const Header = () => {
  const authUser = useAppSelector((states) => states.authUser.value);
  const dispatch = useAppDispatch();

  const loginHandler = () => {
    dispatch(authUserActions.login());
  };

  const logoutHandler = () => {
    dispatch(authUserActions.logout())
  }

  return (
    <Flex
      as="header"
      height="100px"
      direction="column"
      justifyContent="center"
      px="32px"
    >
      <Container maxW="1440px" px={{ base: '48px', lg: '64px' }}>
        <HStack spacing="36px" justifyContent="space-between">
          <Text fontWeight="700">Logo</Text>
          <Box as="nav" flex="1" display={{ base: 'none', md: 'block' }}>
            <DesktopNavigation onLogin={loginHandler} onLogout={logoutHandler} authUser={authUser} />
          </Box>
          <Box as="nav" display={{ base: 'block', md: 'none' }}>
            <MobileNavigation onLogin={loginHandler} onLogout={logoutHandler} authUser={authUser} />
          </Box>
        </HStack>
      </Container>
    </Flex>
  );
};

export default Header;
