'use client';

import { forwardRef } from 'react';
import { ChevronsUpDown } from 'lucide-react';

import { useAutocomplete } from './context';
import { Popover, type PopoverTriggerProps } from '../Popover';
import { Button } from '../../atoms/Button';

export const AutocompleteTrigger = forwardRef<
  HTMLButtonElement,
  AutocompleteTriggerProps
>(({ children, ...rest }, ref) => {
  const { open, disabled } = useAutocomplete();

  return (
    <Popover.Trigger disabled={disabled} {...rest} asChild>
      <Button
        ref={ref}
        variant="outline"
        role="combobox"
        aria-expanded={open}
        className="h-auto flex justify-between overflow-x-hidden"
      >
        {children}

        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
    </Popover.Trigger>
  );
});

AutocompleteTrigger.displayName = 'AutocompleteTrigger';

export interface AutocompleteTriggerProps extends PopoverTriggerProps {

}
