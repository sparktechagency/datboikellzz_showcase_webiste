import type { Metadata } from 'next';
import './globals.css';
import NextTopLoader from 'nextjs-toploader';
import ReduxWrapper from './provider/redux/query/ReduxWrapper';

export const metadata: Metadata = {
  title: {
    default: 'BetWise',
    template: '%s | BetWise',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxWrapper>
          <NextTopLoader
          color='#05df72'
          />
          {children}
        </ReduxWrapper>
      </body>
    </html>
  );
}
