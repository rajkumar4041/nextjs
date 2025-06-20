import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';

import { ErrorWrapper } from '../GlobalErrorWrapper';
import Footer from './footer/Footer';
import Navbar from './header/navbar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

/**
 * global metadata for the app
 *
 * if any metadata is defined in the page it will override this metadata
 */
export const metadata: Metadata = {
  title: 'Next js app',
  description: 'Next.js description',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ErrorWrapper>
          <div className="flex flex-col items-center justify-center h-screen w-full">
            <div className="flex justify-center items-center h-[7vh] bg-white-500 w-full flex-grow-1">
              <Navbar />
            </div>

            <div className="h-[86vh] p-2">{children}</div>

            <div className="flex justify-center items-center h-[7vh] bg-white-500 w-full flex-grow-1">
              <Footer />
            </div>
          </div>
        </ErrorWrapper>
      </body>
    </html>
  );
}
