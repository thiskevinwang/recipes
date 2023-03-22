'use client';
import { useSelectedLayoutSegments } from 'next/navigation';

import { Stack } from 'nextjs-components/src/components/Stack';
import { Switch } from 'nextjs-components/src/components/Switch';
import { useTheme } from 'nextjs-components/src/contexts/ThemeContext';
import { Monitor, Moon, Sun } from 'nextjs-components/src/icons';

import useClassNameOnScroll from '@/utils/use-class-name-on-scroll';
import useMounted from '@/utils/use-mounted';

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
  const segments = useSelectedLayoutSegments();

  const rootPage = segments.length <= 1;

  const logoRef = useClassNameOnScroll('text-2xl', { addOrRemove: 'remove' });
  const headerRef = useClassNameOnScroll('border-b', {
    enabled: rootPage,
  });

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 z-10 flex h-16 content-center border-b-stone-200 bg-stone-300 px-6 py-3 transition-colors dark:border-b-stone-700 dark:bg-stone-900"
      >
        <Stack
          direction={'row'}
          align={'center'}
          justify={'space-between'}
          flex={1}
        >
          <p ref={logoRef} className="text-2xl transition-all">
            Recipes 🍜
          </p>

          <Switch
            size="small"
            icon
            items={SWITCH_ITEMS}
            active={mounted ? theme : undefined}
            onChange={setTheme}
          />
        </Stack>
      </header>

      <div className="flex h-full min-h-[calc(100vh-4rem-8rem)] flex-col bg-stone-300 dark:bg-stone-900">
        {children}
      </div>

      <footer className="h-32 border-t border-t-stone-200 px-6 py-3 dark:border-t-stone-700">
        Nom nom nom
      </footer>
    </>
  );
}
