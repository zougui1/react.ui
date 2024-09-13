'use client';

import React from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

import { buttonVariants } from '../../atoms/Button';
import { cn } from '../../../utils';

export const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  AlertDialogCancelProps
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    {...props}
    ref={ref}
    className={cn(
      buttonVariants({ variant: 'outline' }),
      'mt-2 sm:mt-0',
      className
    )}
  />
));

AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

export interface AlertDialogCancelProps extends AlertDialogPrimitive.AlertDialogCancelProps {

}
