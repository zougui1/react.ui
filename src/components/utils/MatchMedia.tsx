'use client';

import { useMatchMedia } from '../../hooks';

// tailwindcss breakpoints
// TODO make those breakpoints configurable
const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

type Breakpoint = keyof typeof breakpoints;

const getMediaValue = (value: Breakpoint | number): string => {
  return typeof value === 'number' ? `${value}px` : breakpoints[value];
}

export const MatchMedia = ({ min, max, children }: MatchMediaProps) => {
  const query = [
    min !== undefined && `(min-width: ${getMediaValue(min)})`,
    max !== undefined && `(max-width: ${getMediaValue(max)})`,
  ].filter(Boolean).join(' and ');

  const matches = useMatchMedia(query);

  return matches ? children : null;
}

export interface MatchMediaProps {
  min?: Breakpoint | number;
  max?: Breakpoint | number;
  children?: React.ReactNode;
}
