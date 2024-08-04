import React from 'react';

import { cn } from '../../../utils';

export const TableRow = React.forwardRef<
  HTMLTableRowElement,
  TableRowProps
>(({ className, ...props }, ref) => (
  <tr
    {...props}
    ref={ref}
    className={cn(
      'border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
      className,
    )}
  />
));

TableRow.displayName = 'TableRow';

export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {

}
