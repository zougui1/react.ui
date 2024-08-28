'use client';

import { useState, useEffect, useMemo } from 'react';

export const useMatchMedia = (query: string): boolean => {
  const matchMedia = useMemo(() => window?.matchMedia(query), [query]);
  const [matches, setMatches] = useState(() => matchMedia?.matches);

  useEffect(() => {
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    }

    matchMedia.addEventListener('change', listener);

    return () => {
      matchMedia.removeEventListener('change', listener);
    }
  }, [matchMedia]);

  return matches;
}

export interface MediaQueryOptions {
  min?: number;
  max?: number;
}
