import { useEffect, useRef } from 'react';

// - pass the returned ref to an element
// - adds/removes a className on window scroll
export default function useClassNameOnScroll<E extends HTMLDivElement>(
  className: string,
  opts: {
    amount?: number;
    addOrRemove?: 'add' | 'remove';
    enabled?: boolean;
  } = {},
) {
  const amount = opts.amount || 0;
  const addOrRemove = opts.addOrRemove || 'add';
  const enabled = opts.enabled || true;

  const ref = useRef<E>(null);

  useEffect(() => {
    if (!enabled) return;
    if (typeof window === 'undefined') return;
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > amount) {
        if (addOrRemove === 'add') {
          el.classList.add(className);
        } else {
          el.classList.remove(className);
        }
      } else {
        if (addOrRemove === 'add') {
          el.classList.remove(className);
        } else {
          el.classList.add(className);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref, className, amount, addOrRemove, enabled]);

  return ref;
}
