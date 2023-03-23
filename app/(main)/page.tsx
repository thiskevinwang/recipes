'use client';

// @ts-expect-error no types
import commandScore from 'command-score';
import Link from 'next/link';

import { Combobox } from 'nextjs-components/src/components/combobox';
import { Stack } from 'nextjs-components/src/components/Stack';

import recipes from '@/data/recipes';
import useClassNameOnScroll from '@/utils/use-class-name-on-scroll';

export default function Page() {
  const navRef = useClassNameOnScroll('border-b');

  return (
    <main>
      <nav
        ref={navRef}
        className="sticky top-0 z-10 border-b-stone-200 bg-stone-300 px-6 py-4 transition-colors dark:border-b-stone-700 dark:bg-stone-900"
      >
        <Stack gap={4} direction={'row'}>
          <Combobox
            width={'100%'}
            placeholder="Search..."
            filter={(list, input) => {
              const items = list.filter((item) => {
                if (!input) return true;
                const nameScore = commandScore(item.label, input);
                const slugScore = commandScore(item.value, input);
                return nameScore > 0 || slugScore > 0;
              });
              return items as typeof list;
            }}
          >
            <Combobox.Input />

            <Combobox.List>
              {recipes.map((item) => {
                return (
                  <Combobox.Option key={item.id} value={item.slug}>
                    {item.name}
                  </Combobox.Option>
                );
              })}
            </Combobox.List>
          </Combobox>
        </Stack>
      </nav>

      <section className="grid gap-4 p-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((item) => {
          return (
            <Link
              href={`/recipes/${item.slug}`}
              key={item.id}
              tabIndex={0}
              className="max-h-[150px] min-h-[150px] rounded-lg bg-stone-50 p-4 transition-colors active:bg-stone-200 dark:bg-stone-700 dark:active:bg-stone-800"
            >
              <h3 className="text-lg font-medium">{item.name}</h3>
              <p className="text-sm text-stone-700 dark:text-stone-300">
                {item.description}
              </p>
            </Link>
          );
        })}
      </section>
    </main>
  );
}
