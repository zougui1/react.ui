import React from 'react';

import { cn } from '../../../utils';

export const DialogBody = React.forwardRef<HTMLDivElement, DialogBodyProps>(
  ({ className, style, ...rest }, ref) => (
    <div
      {...rest}
      ref={ref}
      className={cn('overflow-y-auto py-6 pl-1 pr-4', className)}
      style={{
        maxHeight: 'min(calc(100vh - 150px), 56rem)',
        ...style,
      }}
    />
  ),
);

DialogBody.displayName = 'DialogBody';

export interface DialogBodyProps extends React.HTMLAttributes<HTMLDivElement> {

}
