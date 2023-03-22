'use client';
import { useState, useEffect, useRef } from 'react';
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

  const logoRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const header = headerRef.current;
    const logo = logoRef.current;
    if (!header || !logo) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 10) {
        logo.classList.remove('text-2xl');
        header.classList.add('border-b');
      } else {
        logo.classList.add('text-2xl');
        header.classList.remove('border-b');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
