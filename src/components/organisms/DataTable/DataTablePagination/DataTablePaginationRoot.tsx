import React from 'react';

import { cn } from '../../../../utils';

export const DataTablePaginationRoot = React.forwardRef<
  HTMLDivElement,
  DataTablePaginationRootProps
>(({ className, ...rest }, ref) => {
  return (
    <div
      {...rest}
      ref={ref}
      className={cn('flex items-center py-4', className)}
    />
  );
});

DataTablePaginationRoot.displayName = 'DataTablePaginationRoot';

export interface DataTablePaginationRootProps extends React.HTMLAttributes<HTMLDivElement> {

}
