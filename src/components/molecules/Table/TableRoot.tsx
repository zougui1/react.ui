import React from 'react';

import { cn } from '../../../utils';

export const TableRoot = React.forwardRef<
  HTMLTableElement,
  TableRootProps
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      {...props}
      ref={ref}
      className={cn('w-full caption-bottom text-sm', className)}
    />
  </div>
));

TableRoot.displayName = 'TableRoot';

export interface TableRootProps extends React.HTMLAttributes<HTMLTableElement> {

}
