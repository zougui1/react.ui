import React from 'react';

import { cn } from '../../../utils';

export const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  TableCaptionProps
>(({ className, ...props }, ref) => (
  <caption
    {...props}
    ref={ref}
    className={cn('mt-4 text-sm text-muted-foreground', className)}
  />
));

TableCaption.displayName = 'TableCaption';

export interface TableCaptionProps extends React.HTMLAttributes<HTMLTableCaptionElement> {

}
