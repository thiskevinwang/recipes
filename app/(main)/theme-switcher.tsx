'use client';

import { Switch } from 'nextjs-components/src/components/Switch';
import { Monitor, Moon, Sun } from 'nextjs-components/src/icons';
import { useTheme } from 'nextjs-components/src/contexts/ThemeContext';

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

export default function ThemeSwitcher() {
  const mounted = useMounted();
  const { setTheme, theme } = useTheme();
  return (
    <Switch
      size="small"
      icon
      items={SWITCH_ITEMS}
      active={mounted ? theme : undefined}
      onChange={setTheme}
    />
  );
}
