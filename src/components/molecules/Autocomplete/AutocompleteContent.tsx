'use client';

import { useLayoutEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { useAutocomplete } from './context';
import { Popover, type PopoverContentProps } from '../Popover';
import { Command } from '../Command';

export const AutocompleteContent = ({ children, ...rest }: AutocompleteContentProps) => {
  const { open } = useAutocomplete();
  const [fragment, setFragment] = useState<DocumentFragment>();

  // setting the fragment in `useLayoutEffect` as `DocumentFragment` doesn't exist on the server
  useLayoutEffect(() => {
    setFragment(new DocumentFragment());
  }, []);

  // makes it possible to use the items' children
  // as item labels inside AutocompleteValue
  if (!open) {
    const frag = fragment as Element | undefined;
    return frag
      ? ReactDOM.createPortal(
        <Command.Root>{children}</Command.Root>,
        frag
      )
      : null;
  }

  return (
    <Popover.Content {...rest}>
      <Command.Root>
        {children}
      </Command.Root>
    </Popover.Content>
  );
}

export interface AutocompleteContentProps extends PopoverContentProps {

}
