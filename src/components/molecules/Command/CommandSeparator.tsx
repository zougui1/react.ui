'use client';

import * as React from 'react';
import { Command as CommandPrimitive } from 'cmdk';

import { cn } from '../../../utils';

export const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  CommandSeparatorProps
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    {...props}
    ref={ref}
    className={cn('-mx-1 h-px bg-border', className)}
  />
));

CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

export interface CommandSeparatorProps extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator> {

}
