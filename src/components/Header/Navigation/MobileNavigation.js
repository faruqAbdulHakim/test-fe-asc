'use client';

import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FilledNavLink, NavLink } from './NavLink';

const MobileNavigation = ({ onLogin, authUser }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        aria-label="Open Menu"
        icon={<AiOutlineMenu />}
        onClick={onOpen}
      />
      <Drawer placement="right" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>
          <DrawerBody>
            <VStack spacing="8px" alignItems="stretch">
              <NavLink>Home</NavLink>
              <NavLink>Rent</NavLink>
              <NavLink>Sell</NavLink>
              <NavLink>About</NavLink>
            </VStack>
          </DrawerBody>
          <DrawerFooter display="block">
            {authUser ? (
              <Text fontWeight="500" textAlign="center">
                Hello, {authUser.name}
              </Text>
            ) : (
              <VStack alignItems="stretch">
                <NavLink onClick={onLogin}>Log In</NavLink>
                <FilledNavLink>Create Account</FilledNavLink>
              </VStack>
            )}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileNavigation;
