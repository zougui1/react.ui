import * as React from 'react';
import { Command as CommandPrimitive } from 'cmdk';

import { cn } from '../../../utils';

export const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  CommandGroupProps
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    {...props}
    ref={ref}
    className={cn(
      'overflow-hidden p-1 text-foreground',
      '[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground',
      className,
    )}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

export interface CommandGroupProps extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group> {

}
