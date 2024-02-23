import { extendTheme } from '@chakra-ui/react';

export const colors = {
  brand: {
    black: '#0C0C1D',
    white: '#FFFFFF',
    primary: '#4B73FF',
    lightGray: '#F7F9FB',
  },
};

export const fonts = {
  heading: 'var(--font-ubuntu), sans-serif',
  body: 'var(--font-ubuntu), sans-serif',
};

export const theme = extendTheme({ colors, fonts });
