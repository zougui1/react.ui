'use client';

import { forwardRef } from 'react';

import { useAutocomplete } from './context';
import { cn } from '../../../utils';

export const AutocompleteValue = forwardRef<
  HTMLDivElement,
  AutocompleteValueProps
>(({ children, placeholder, className, renderValues, ...rest }, ref) => {
  const { values, allOptions } = useAutocomplete();

  const getDefaultChildren = () => {
    if (!values.length) {
      return placeholder;
    }

    if (renderValues) {
      const optionValues = new Set(allOptions.map(o => o.value));
      return renderValues(values.filter(v => optionValues.has(v)));
    }

    return allOptions
      .filter(option => values.includes(option.value) && option.label)
      .map(option => <span key={option.value}>{option.label}</span>);
  }

  return (
    <div {...rest} ref={ref} className={cn('flex flex-wrap flex-1 w-full gap-4 whitespace-normal', className)}>
      {children ?? getDefaultChildren()}
    </div>
  );
});

AutocompleteValue.displayName = 'AutocompleteValue';

export interface AutocompleteValueProps extends React.HTMLAttributes<HTMLDivElement> {
  placeholder?: string;
  renderValues?: (values: (string | number)[]) => React.ReactNode;
}
