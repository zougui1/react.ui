import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

import { cn } from '../../../utils';

export const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  DialogDescriptionProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    {...props}
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
  />
));

DialogDescription.displayName = DialogPrimitive.Description.displayName;

export interface DialogDescriptionProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description> {

}
