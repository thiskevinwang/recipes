import { useSelectedLayoutSegments } from 'next/navigation';

import { Stack } from 'nextjs-components/src/components/Stack';
import { Avatar } from 'nextjs-components/src/components/Avatar';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuWrapper,
} from 'nextjs-components/src/components/Menu';

import ThemeSwitcher from './theme-switcher';

import useClassNameOnScroll from '@/utils/use-class-name-on-scroll';

export default function Header() {
  const segments = useSelectedLayoutSegments();
  const rootPage = segments.length <= 1;

  const logoRef = useClassNameOnScroll('text-2xl', { addOrRemove: 'remove' });
  const headerRef = useClassNameOnScroll('border-b', {
    enabled: rootPage,
  });

  return (
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

        <MenuWrapper>
          <MenuButton
            shape="circle"
            variant="unstyled"
            style={{
              height: 30,
              width: 30,
            }}
          >
            <Avatar
              src={`data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIwJSIgeTE9IjEwMCUiIHgyPSIxMDAlIiB5Mj0iMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxZTU3OTkiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM3ZGI5ZTgiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2cxKSIvPjwvc3ZnPg==`}
              size={30}
            />
          </MenuButton>
          <Menu width={200}>
            <div className="flex flex-row items-center justify-between px-2">
              You have discovered a menu!
            </div>

            <Line />

            <div className="flex flex-row items-center justify-between px-2">
              <span className="mr-3">Theme</span>
              <ThemeSwitcher />
            </div>

            <Line />

            <MenuItem type="error">No snacks here</MenuItem>
            <MenuItem disabled>Log In</MenuItem>
          </Menu>
        </MenuWrapper>
      </Stack>
    </header>
  );
}

const Line = () => {
  return (
    <div className="my-3 mb-3  border-t border-t-stone-200 dark:border-t-stone-700" />
  );
};
