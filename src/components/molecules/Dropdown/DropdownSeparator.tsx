import React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

import { cn } from '../../../utils';

export const DropdownSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  DropdownSeparatorProps
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    {...props}
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-muted', className)}
  />
));

DropdownSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

export interface DropdownSeparatorProps extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator> {

}
