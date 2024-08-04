'use client';

import { useEffect } from 'react';

import { InternalItem, type InternalItemProps } from './internal';
import { useAutocomplete } from './context';

export const AutocompleteItem = ({ value, children, ...rest }: AutocompleteItemProps) => {
  const {
    addOption,
    removeOption,
    editOption,
    key,
  } = useAutocomplete();
  const option = { value, label: children };

  useEffect(() => {
    addOption(option);

    return () => {
      removeOption(option);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  useEffect(() => {
    editOption(option);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children]);

  return (
    <InternalItem
      {...rest}
      value={value}
      // this key ensures that the items of the list are always ordered correctly
      // even after the search input changes
      key={key}
    >
      {children}
    </InternalItem>
  );
}

export interface AutocompleteItemProps extends InternalItemProps {

}
