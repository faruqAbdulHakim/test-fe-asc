import { Ubuntu } from 'next/font/google';

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-ubuntu',
});

export const fonts = {
  ubuntu,
};
