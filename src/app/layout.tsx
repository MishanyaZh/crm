import React from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Providers from '@/app/components/providers';
import './globals.css';
import Sidebar from '@/app/components/sidebar';

const font = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Sidebar />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
