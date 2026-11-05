'use client';

import { useSyncExternalStore } from 'react';
import { getBrendaAge } from '../../lib/brenda';

function subscribe(onChange: () => void) {
  let timer: ReturnType<typeof setTimeout>;

  function schedule() {
    // Align with the next minute: the birthday updates at midnight in São Paulo.
    timer = setTimeout(() => {
      onChange();
      schedule();
    }, 60_000 - (Date.now() % 60_000));
  }

  function refreshWhenVisible() {
    if (document.visibilityState === 'visible') onChange();
  }

  schedule();
  document.addEventListener('visibilitychange', refreshWhenVisible);
  window.addEventListener('pageshow', onChange);

  return () => {
    clearTimeout(timer);
    document.removeEventListener('visibilitychange', refreshWhenVisible);
    window.removeEventListener('pageshow', onChange);
  };
}

export default function Age({ initialAge }: { initialAge: number }) {
  // The server snapshot keeps the first client render identical to static HTML.
  // React then reads today's age immediately, even if that HTML was built last year.
  const age = useSyncExternalStore(subscribe, getBrendaAge, () => initialAge);

  return <span data-age>{age}</span>;
}
