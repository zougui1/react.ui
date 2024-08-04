'use client';

import React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';

import { cn } from '../../../utils';

export const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  SelectSeparatorProps
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    {...props}
    ref={ref}
    className={cn('bg-muted -mx-1 my-1 h-px', className)}
  />
));

SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export interface SelectSeparatorProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator> {

}
