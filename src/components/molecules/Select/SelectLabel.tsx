'use client';

import React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';

import { cn } from '../../../utils';

export const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  SelectLabelProps
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    {...props}
    ref={ref}
    className={cn('py-1.5 pl-8 pr-2 text-sm font-semibold', className)}
  />
));

SelectLabel.displayName = SelectPrimitive.Label.displayName;

export interface SelectLabelProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label> {

}
