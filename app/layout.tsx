'use client';

import { ThemeContextProvider } from 'nextjs-components/src/contexts/ThemeContext';
import 'nextjs-components/src/styles/globals.css';

import { Roboto_Mono } from 'next/font/google';

const mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-sans',
});

import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`stone ${mono.variable} font-sans`}>
      <body className="bg-stone-300 dark:bg-stone-900">
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </body>
    </html>
  );
}
