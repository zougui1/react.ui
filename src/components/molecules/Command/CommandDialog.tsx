'use client';

import { CommandRoot } from './CommandRoot';
import { Dialog, type DialogRootProps } from '../Dialog';

import { cn } from '../../../utils';

export const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog.Root {...props}>
      <Dialog.Content className="overflow-hidden p-0 shadow-lg">
        <CommandRoot
          className={cn(
            '[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground',
            '[&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2',
            '[&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5',
            '[&_[cmdk-input]]:h-12',
            '[&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5',
          )}
        >
          {children}
        </CommandRoot>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export interface CommandDialogProps extends DialogRootProps {

}
