'use client';

import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

import { cn } from '../../../utils';

export const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  DialogTitleProps
>(({ className, ...props }, ref) => (
<DialogPrimitive.Title
  {...props}
  ref={ref}
  className={cn(
    'text-lg font-semibold leading-none tracking-tight',
    className,
  )}
/>
));

DialogTitle.displayName = DialogPrimitive.Title.displayName;

export interface DialogTitleProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title> {

}
