import 'nextjs-components/src/styles/globals.css';
import './globals.css';
import { Roboto_Mono } from 'next/font/google';

const mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`stone ${mono.variable}`}>
      <body className="bg-stone-300 font-mono dark:bg-stone-900">
        {children}
      </body>
    </html>
  );
}
