'use client';

import { Tags, Tag } from 'nextjs-components/src/components/Tag';
import { Clock } from 'nextjs-components/src/icons';

import type { Recipe } from '@/data/recipes';

export default function Metadata({
  metadata,
}: {
  metadata?: Recipe['metadata'];
}) {
  return (
    <div>
      <h3 className="text-lg font-bold">Additional Info</h3>
      <div className="mt-2 rounded-lg bg-stone-100 py-6 pl-6 dark:bg-stone-700">
        <div className="mb-4 border-b border-b-stone-300 pb-4 pr-4 last:mb-0 last:border-b-0 last:pb-0 dark:border-b-stone-500">
          <p className="text-lg font-bold">Difficulty</p>
          {metadata?.difficulty}
        </div>

        <div className="mb-4 border-b border-b-stone-300 pb-4 pr-4 last:mb-0 last:border-b-0 last:pb-0 dark:border-b-stone-500">
          <p className="text-lg font-bold">Prep Time</p>
          {/* @ts-expect-error className is a missing prop */}
          <Clock size={16} className="inline" /> {metadata?.prep_time}
        </div>

        <div className="mb-4 border-b border-b-stone-300 pb-4 pr-4 last:mb-0 last:border-b-0 last:pb-0 dark:border-b-stone-500">
          <p className="text-lg font-bold">Cook Time</p>
          {/* @ts-expect-error className is a missing prop */}
          <Clock size={16} className="inline" /> {metadata?.cook_time}
        </div>

        <div className="mb-4 border-b border-b-stone-300 pb-4 pr-4 last:mb-0 last:border-b-0 last:pb-0 dark:border-b-stone-500">
          <p className="text-lg font-bold">Tags</p>
          <Tags>
            {metadata?.tags?.map((tag) => {
              return <Tag key={tag}>{tag}</Tag>;
            })}
          </Tags>
        </div>
      </div>
    </div>
  );
}
