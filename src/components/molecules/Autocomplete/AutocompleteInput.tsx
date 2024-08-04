'use client';

import { forwardRef, useState, useRef } from 'react';
import { Plus } from 'lucide-react';

import { useAutocomplete } from './context';
import { Command, type CommandInputProps } from '../Command';
import { IconButton } from '../../atoms/IconButton';
import { useForkRef } from '../../../hooks';

export const AutocompleteInput = forwardRef<
  HTMLInputElement,
  AutocompleteInputProps
>((props, ref) => {
  const internalInputRef = useRef<HTMLInputElement | null>(null);
  const inputRef = useForkRef(internalInputRef, ref);

  const [internalInputValue, setInternalInputValue] = useState(props.defaultValue ?? '');
  const {
    disabled,
    multiple,
    creatable,
    values,
    addNewOption,
    onValuesChange,
    setOpen,
    changeKey,
  } = useAutocomplete();

  const inputValue = props.value ?? internalInputValue;

  const handleValueChange = (value: string) => {
    props.onValueChange?.(value);
    setInternalInputValue(value);
    changeKey();
  }

  const createOption = () => {
    if (multiple) {
      onValuesChange?.([...values, inputValue]);
      internalInputRef.current?.focus();
    } else {
      onValuesChange?.([inputValue]);
      setOpen(false);
    }

    addNewOption({ value: inputValue, label: inputValue });

    props.onValueChange?.('');
    setInternalInputValue('');
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.stopPropagation();
      createOption();
    }
  }

  return (
    <Command.Input
      disabled={disabled}
      {...props}
      value={inputValue}
      onValueChange={handleValueChange}
      ref={inputRef}
    >
      {creatable && Boolean(inputValue) && (
        <IconButton
          disabled={disabled}
          className="ml-2"
          onClick={createOption}
          onKeyDown={handleKeyDown}
        >
          <Plus className="opacity-50" />
        </IconButton>
      )}
    </Command.Input>
  );
});

AutocompleteInput.displayName = 'AutocompleteInput';

export interface AutocompleteInputProps extends Omit<CommandInputProps, 'children' | 'defaultValue' | 'value'> {
  value?: string;
  defaultValue?: string;
}
