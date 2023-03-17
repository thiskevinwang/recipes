'use client';

import { useState } from 'react';
import commandScore from 'command-score';
import Link from 'next/link';

import { Tabs } from 'nextjs-components/src/components/tabs';
import { Checkbox } from 'nextjs-components/src/components/Checkbox';
import { Combobox } from 'nextjs-components/src/components/combobox';
import { Stack } from 'nextjs-components/src/components/Stack';
import { Badge } from 'nextjs-components/src/components/Badge';

import recipes from './recipes.json';

export default function Page() {
  // const [tab, setTab] = useState('tab1');
  return (
    <main>
      <nav
        className="px-6 py-4"
        style={{ boxShadow: `0 -1px 0 var(--accents-2) inset` }}
      >
        <Stack
          // direction={{ sm: 'column', md: 'row', lg: 'row' }}
          gap={4}
          // justify={{ sm: 'center', md: 'stretch', lg: 'start' }}
          // align={{ sm: 'start', md: 'center', lg: 'center' }}
        >
          <Combobox
            placeholder="Search..."
            filter={(list, input) => {
              const items = list.filter((item) => {
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
          {/* <Checkbox /> */}
        </Stack>
        {/* <Tabs
          selected={tab}
          setSelected={setTab}
          tabs={[
            {
              title: 'Ingredients',
              value: 'ingredients',
            },
            {
              title: 'Tools',
              value: 'tools',
            },
            {
              title: 'Steps',
              value: 'steps',
            },
          ]}
        /> */}
      </nav>

      <section className="grid gap-4 p-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((item) => {
          return (
            <Link
              href={`/recipes/${item.slug}`}
              key={item.id}
              tabIndex={0}
              className="max-h-[150px] min-h-[150px] rounded-lg border border-stone-200 p-4 hover:border-stone-400 dark:border-stone-700 dark:hover:border-stone-500"
            >
              <h3 className="text-lg font-medium">{item.name}</h3>
              <p className="text-sm text-stone-500 dark:text-stone-400">
                {item.description}
              </p>
            </Link>
          );
        })}
      </section>
    </main>
  );
}
