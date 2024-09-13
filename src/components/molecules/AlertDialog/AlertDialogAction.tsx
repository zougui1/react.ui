'use client';

import React from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

import { buttonVariants, type ButtonProps } from '../../atoms/Button';

export const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  AlertDialogActionProps
>(({ className, variant, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    {...props}
    ref={ref}
    className={buttonVariants({ variant, className })}
  />
));

AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

export interface AlertDialogActionProps extends AlertDialogPrimitive.AlertDialogActionProps {
  variant?: ButtonProps['variant'];
}
