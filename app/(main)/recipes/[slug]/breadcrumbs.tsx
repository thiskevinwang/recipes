'use client';

import Link from 'next/link';
import { ChevronRight } from 'nextjs-components/src/icons';
import { usePathname } from 'next/navigation';

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);
  return (
    <nav className="mx-6 py-6">
      <ul className="flex list-none">
        {segments.map((segment, i, arr) => {
          return (
            <Link
              key={segment}
              href={`/${arr.slice(0, i + 1).join('/')}`}
              className="decoration-dashed underline-offset-4 hover:underline"
            >
              <li className="flex flex-row items-center">
                {/* @ts-expect-error className is a missing prop */}
                <ChevronRight size={16} className="mx-1" />
                {segment}
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}
