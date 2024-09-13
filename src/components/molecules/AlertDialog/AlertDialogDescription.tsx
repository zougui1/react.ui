'use client';

import React from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

import { cn } from '../../../utils';

export const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  AlertDialogDescriptionProps
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    {...props}
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
  />
));

AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;

export interface AlertDialogDescriptionProps extends AlertDialogPrimitive.AlertDialogDescriptionProps {

}
