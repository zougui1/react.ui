'use client';

import { AutocompleteProvider, useAutocomplete } from './context';
import { Popover } from '../Popover';

const RootContent = ({ children }: { children?: React.ReactNode; }) => {
  const { open, setOpen } = useAutocomplete();

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      {children}
    </Popover.Root>
  );
}

export const AutocompleteRoot = ({ children, multiple = false, ...rest }: AutocompleteRootProps) => {
  return (
    <AutocompleteProvider {...rest} multiple={multiple}>
      <RootContent>
        {children}
      </RootContent>
    </AutocompleteProvider>
  );
}

export interface AutocompleteRootProps {
  values: (string | number)[];
  onValuesChange?: (values: (string | number)[]) => void;
  multiple?: boolean;
  creatable?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}
