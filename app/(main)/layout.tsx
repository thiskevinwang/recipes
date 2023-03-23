'use client';

import { Stack } from 'nextjs-components/src/components/Stack';
import { ThemeContextProvider } from 'nextjs-components/src/contexts/ThemeContext';

import Header from './header';
import ThemeSwitcher from './theme-switcher';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeContextProvider>
      <Header />

      <div className="flex h-full min-h-[calc(100vh-4rem-8rem)] flex-col bg-stone-300 dark:bg-stone-900">
        {children}
      </div>

      <footer className="h-32 border-t border-t-stone-200 px-6 py-3 dark:border-t-stone-700">
        <Stack
          direction={{
            lg: 'row',
            md: 'row',
            sm: 'column',
          }}
          align={'center'}
          justify={'space-between'}
          flex={1}
          gap={2}
        >
          <div>Nom nom nom</div>
          <ThemeSwitcher />
        </Stack>
      </footer>
    </ThemeContextProvider>
  );
}
