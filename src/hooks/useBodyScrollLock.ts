import { useEffect } from 'react';

/** Blocca lo scroll della pagina finché `active` è true (menu mobile, modali). */
export function useBodyScrollLock(active: boolean) {
  useEffect(() => {
    if (!active) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [active]);
}
