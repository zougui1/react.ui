'use client';

import React from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

import { buttonVariants } from '../../atoms/Button';
import { cn } from '../../../utils';

export const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  AlertDialogActionProps
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    {...props}
    ref={ref}
    className={cn(buttonVariants(), className)}
  />
));

AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

export interface AlertDialogActionProps extends AlertDialogPrimitive.AlertDialogActionProps {

}
