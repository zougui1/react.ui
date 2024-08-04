import React from 'react';

import { cn } from '../../../utils';

export const TableCell = React.forwardRef<
  HTMLTableCellElement,
  TableCellProps
>(({ className, ...props }, ref) => (
  <td
    {...props}
    ref={ref}
    className={cn('p-4 align-middle [&:has([role=checkbox])]:pr-0', className)}
  />
));

TableCell.displayName = 'TableCell';

export interface TableCellProps extends React.HTMLAttributes<HTMLTableCellElement> {

}
