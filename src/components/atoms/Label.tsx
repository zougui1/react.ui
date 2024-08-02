import React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '../../utils';

const labelVariants = tv({
  base: 'text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
});

export const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
));

Label.displayName = LabelPrimitive.Root.displayName;

export interface LabelProps extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>, VariantProps<typeof labelVariants> {

}
