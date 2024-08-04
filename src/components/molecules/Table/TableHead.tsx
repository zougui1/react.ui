import React from 'react';

import { cn } from '../../../utils';

export const TableHead = React.forwardRef<
  HTMLTableCellElement,
  TableHeadProps
>(({ className, ...props }, ref) => (
  <th
    {...props}
    ref={ref}
    className={cn(
      'h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0',
      className,
    )}
  />
));

TableHead.displayName = 'TableHead';

export interface TableHeadProps extends React.HTMLAttributes<HTMLTableCellElement> {

}
