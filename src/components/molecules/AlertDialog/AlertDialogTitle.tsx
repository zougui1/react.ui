'use client';

import React from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

import { cn } from '../../../utils';

export const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  AlertDialogTitleProps
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    {...props}
    ref={ref}
    className={cn('text-lg font-semibold', className)}
  />
));

AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

export interface AlertDialogTitleProps extends AlertDialogPrimitive.AlertDialogTitleProps {

}
