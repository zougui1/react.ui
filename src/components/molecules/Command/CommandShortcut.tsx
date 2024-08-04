import * as React from 'react';

import { cn } from '../../../utils';

export const CommandShortcut = ({ className, ...props }: CommandShortcutProps) => {
  return (
    <span
      {...props}
      className={cn(
        'ml-auto text-xs tracking-widest text-muted-foreground',
        className,
      )}
    />
  );
};

CommandShortcut.displayName = 'CommandShortcut';

export interface CommandShortcutProps extends React.HTMLAttributes<HTMLSpanElement> {

}
