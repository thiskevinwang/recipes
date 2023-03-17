'use client';

import { Tags, Tag } from 'nextjs-components/src/components/Tag';
import { Clock } from 'nextjs-components/src/icons';

import type recipe from '../../recipes.json';

const Spacer = () => {
  return <span className="mt-5 block h-[1px] w-[1px]" />;
};
export default function Sidebar({
  metadata,
}: {
  metadata: (typeof recipe)[number]['metadata'];
}) {
  return (
    <div>
      <h2 className="text-lg font-bold">Difficulty</h2>
      {metadata.difficulty}
      <Spacer />
      <h2 className="text-lg font-bold">Prep Time</h2>
      <Clock size={16} className="inline" /> {metadata.prep_time}
      <Spacer />
      <h2 className="text-lg font-bold">Cook Time</h2>
      <Clock size={16} className="inline" /> {metadata.cook_time}
      <Spacer />
      <h2 className="text-lg font-bold">Tags</h2>
      <Tags>
        {metadata.tags.map((tag) => {
          return <Tag key={tag}>{tag}</Tag>;
        })}
      </Tags>
    </div>
  );
}
