'use client';

import { Check } from 'lucide-react';

import { Command, type CommandItemProps } from '../../Command';
import { cn } from '../../../../utils';

import { useAutocomplete } from '../context';

export const InternalItem = ({ value, children, onSelect, ...rest }: InternalItemProps) => {
  const {
    setOpen,
    values,
    onValuesChange,
    multiple,
    key,
  } = useAutocomplete();

  const handleSelect = () => {
    onSelect?.(value);

    const includesValue = values.includes(value);

    if (!multiple) {
      setOpen(false);
      onValuesChange(includesValue ? [] : [value]);
      return;
    }

    const newValues = includesValue
      ? values.filter(v => v !== value)
      : [...values, value];

    onValuesChange(newValues);
  }

  return (
    <Command.Item
      {...rest}
      value={String(value)}
      onSelect={handleSelect}
    >
      <Check
        className={cn(
          'mr-2 h-4 w-4',
          values.includes(value) ? 'opacity-100' : 'opacity-0',
        )}
      />

      {children}
    </Command.Item>
  );
}

export interface InternalItemProps extends Omit<CommandItemProps, 'value' | 'onSelect'> {
  value: string | number;
  onSelect?: (currentValue: string | number) => void;
}
