import React from 'react';

import { cn } from '../../../utils';

export const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  TableHeaderProps
>(({ className, ...props }, ref) => (
  <thead {...props} ref={ref} className={cn('[&_tr]:border-b', className)} />
));

TableHeader.displayName = 'TableHeader';

export interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {

}
