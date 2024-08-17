'use client';

import React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import { cn } from '../../../utils';

export const RadioGroupRoot = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupRootProps
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      {...props}
      className={cn('grid gap-2', className)}
      ref={ref}
    />
  );
});

RadioGroupRoot.displayName = RadioGroupPrimitive.Root.displayName;

export interface RadioGroupRootProps extends React.ComponentProps<typeof RadioGroupPrimitive.Root> {

}
