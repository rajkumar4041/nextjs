import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';

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
        <div className="flex flex-col items-center justify-center">
          <div> header</div>
          {children}
          <div> footer</div>
        </div>
      </body>
    </html>
  );
}
