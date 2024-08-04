import React from 'react';

import { cn } from '../../../utils';

export const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  TableBodyProps
>(({ className, ...props }, ref) => (
  <tbody
    {...props}
    ref={ref}
    className={cn('[&_tr:last-child]:border-0', className)}
  />
));

TableBody.displayName = 'TableBody';

export interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {

}
