'use client';

import { InternalItem } from './internal';
import { useAutocomplete } from './context';
import { Command, type CommandGroupProps } from '../Command';

export const AutocompleteNewItems = ({ children, ...rest }: AutocompleteNewItemsProps) => {
  const { newOptions, key } = useAutocomplete();

  if (!newOptions.length) {
    return null;
  }

  return (
    <Command.Group {...rest}>
      {newOptions.map(newOption => (
        <InternalItem key={`${key}-${newOption.value}`} value={newOption.value}>
          {newOption.label}
        </InternalItem>
      ))}

      {children}
      <Command.Separator className="mt-2" />
    </Command.Group>
  );
}

export interface AutocompleteNewItemsProps extends CommandGroupProps {

}
