import React from 'react';

import { cn } from '../../../../utils';

export const DataTablePaginationContent = React.forwardRef<
  HTMLDivElement,
  DataTablePaginationContentProps
>(({ className, ...rest }, ref) => {
  return (
    <div
      {...rest}
      ref={ref}
      className={cn('flex-1 text-sm text-muted-foreground space-x-2', className)}
    />
  );
});

DataTablePaginationContent.displayName = 'DataTablePaginationContent';

export interface DataTablePaginationContentProps extends React.HTMLAttributes<HTMLDivElement> {

}
