import { fonts } from './fonts';
import { Providers } from './providers';
import { colors } from './theme';

/**
 * @type {import('next').Metadata}
 */
export const metadata = {
  title: 'Property Investing App - Investing in your future one home at a time',
  description:
    'Property Investing App is your gateway to smart property investment. Our platform provides expert insights, market trends, and personalized advice to help you make informed decisions and grow your wealth through property investment. Start your journey to financial success with Invest App today.',
  keywords: ['property investment', 'real estate', 'investing'],
  robots: 'index, follow',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={fonts.ubuntu.variable}
        style={{ backgroundColor: colors.brand.lightGray }}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
