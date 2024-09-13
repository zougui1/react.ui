import React from 'react';

import { cn } from '../../../utils';

export const AlertDialogFooter = ({ className, ...props }: AlertDialogFooterProps) => (
  <div
    {...props}
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      className
    )}
  />
);

AlertDialogFooter.displayName = 'AlertDialogFooter';

export interface AlertDialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {

}
