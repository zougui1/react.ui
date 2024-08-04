import { Slot } from '@radix-ui/react-slot';
import React from 'react';

import { cn } from '../../utils';

export const Paper = React.forwardRef<
  HTMLDivElement,
  PaperProps
>(({ className, asChild, ...rest }, ref) => {
  const Comp = asChild ? Slot : 'div';

  return (
    <Comp
      {...rest}
      ref={ref}
      className={cn(
        'bg-slate-900 rounded-md p-4',
        className
      )}
    />
  );
});

Paper.displayName = 'Paper';

export interface PaperProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}
