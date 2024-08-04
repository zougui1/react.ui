import React from 'react';

import { cn } from '../../../utils';

export const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  TableFooterProps
>(({ className, ...props }, ref) => (
  <tfoot
    {...props}
    ref={ref}
    className={cn(
      'border-t bg-muted/50 font-medium [&>tr]:last:border-b-0',
      className,
    )}
  />
));

TableFooter.displayName = 'TableFooter';

export interface TableFooterProps extends React.HTMLAttributes<HTMLTableSectionElement> {

}
