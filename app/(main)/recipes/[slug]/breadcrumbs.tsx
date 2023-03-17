'use client';

import { ChevronRight } from 'nextjs-components/src/icons';
import { usePathname } from 'next/navigation';

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);
  return (
    <nav className="mx-6 py-6">
      <ul className="flex list-none text-xs">
        {segments.map((segment) => {
          return (
            <li key={segment} className="flex flex-row items-center">
              <ChevronRight size={16} className="mx-1" />
              {segment}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
