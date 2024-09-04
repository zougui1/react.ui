import React from 'react';

import { cn } from '../../../utils';

export const DialogBody = React.forwardRef<HTMLDivElement, DialogBodyProps>(
  ({ className, ...rest }, ref) => (
    <div
      {...rest}
      ref={ref}
      className={cn(
        'overflow-y-auto py-6 pl-1 pr-4 max-h-[min(calc(100vh-190px),_56rem)]',
        className,
      )}
    />
  ),
);

DialogBody.displayName = 'DialogBody';

export interface DialogBodyProps extends React.HTMLAttributes<HTMLDivElement> {

}
