import React from 'react';

import { cn } from '../../../utils';

export const DropdownShortcut = ({
  className,
  ...props
}: DropdownShortcutProps) => {
  return (
    <span
      {...props}
      className={cn('ml-auto text-xs tracking-widest opacity-60', className)}
    />
  );
};

export interface DropdownShortcutProps extends React.HTMLAttributes<HTMLSpanElement> {

}
