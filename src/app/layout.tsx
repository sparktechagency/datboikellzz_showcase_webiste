import type { Metadata } from 'next';
import './globals.css';
import NextTopLoader from 'nextjs-toploader';
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
        <NextTopLoader />
        {children}
      </body>
    </html>
  );
}
