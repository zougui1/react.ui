import React from 'react';

import { cn } from '../../../utils';

export const AlertDialogHeader = ({ className, ...props }: AlertDialogHeaderProps) => (
  <div
    {...props}
    className={cn(
      'flex flex-col space-y-2 text-center sm:text-left',
      className
    )}
  />
);

AlertDialogHeader.displayName = 'AlertDialogHeader';

export interface AlertDialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {

}
