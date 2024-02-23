'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme';
import { useRef } from 'react';
import { makeStore } from '@/lib/store';
import { Provider as ReduxProvider } from 'react-redux';

export function Providers({ children }) {
  const storeRef = useRef();

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return (
    <ChakraProvider theme={theme}>
      <ReduxProvider store={storeRef.current}>{children}</ReduxProvider>
    </ChakraProvider>
  );
}
