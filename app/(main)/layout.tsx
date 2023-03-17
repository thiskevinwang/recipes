'use client';
import { useState, useEffect } from 'react';

import { Stack } from 'nextjs-components/src/components/Stack';
import { Switch } from 'nextjs-components/src/components/Switch';
import { useTheme } from 'nextjs-components/src/contexts/ThemeContext';
import { Monitor, Moon, Sun } from 'nextjs-components/src/icons';
import { Text } from 'nextjs-components/src/components/Text';

const useMounted = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
};

const SWITCH_ITEMS = [
  {
    name: <Monitor />,
    value: 'system',
    ariaLabel: 'Switch theme to system default',
  },
  {
    name: <Moon />,
    value: 'dark',
    ariaLabel: 'Switch theme to dark',
  },
  {
    name: <Sun />,
    value: 'light',
    ariaLabel: 'Switch theme to light',
  },
];

export default function Home({ children }: { children: React.ReactNode }) {
  const mounted = useMounted();
  const { setTheme, theme } = useTheme();

  return (
    <>
      <header className="flex h-16 content-center border-b border-b-stone-200 px-6 py-3 dark:border-b-stone-700">
        <Stack
          direction={'row'}
          align={'center'}
          justify={'space-between'}
          flex={1}
        >
          <Text>Recipes 🍜</Text>

          <Switch
            size="small"
            icon
            items={SWITCH_ITEMS}
            active={mounted ? theme : undefined}
            onChange={setTheme}
          />
        </Stack>
      </header>
      <div className="min-h-[calc(100vh-4rem-8rem)] bg-stone-50 dark:bg-stone-900">
        {children}
      </div>
      <footer className="h-32 border-t border-t-stone-200 px-6 py-3 dark:border-t-stone-700">
        footer
      </footer>
    </>
  );
}
