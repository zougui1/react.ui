import * as React from 'react';
import { Command as CommandPrimitive } from 'cmdk';

import { cn } from '../../../utils';

export const CommandRoot = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  CommandRootProps
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    {...props}
    ref={ref}
    className={cn(
      'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground',
      className,
    )}
  />
));

CommandRoot.displayName = CommandPrimitive.displayName;

export interface CommandRootProps extends React.ComponentPropsWithoutRef<typeof CommandPrimitive> {

}
