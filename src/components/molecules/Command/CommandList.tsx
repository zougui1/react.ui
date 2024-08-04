'use client';

import * as React from 'react';
import { Command as CommandPrimitive } from 'cmdk';

import { cn } from '../../../utils';

export const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  CommandListProps
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    {...props}
    ref={ref}
    className={cn('max-h-[300px] overflow-y-auto overflow-x-hidden', className)}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

export interface CommandListProps extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.List> {

}
