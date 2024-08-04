import React from 'react';

import { Typography } from '../../atoms/Typography';
import { cn } from '../../../utils';

export const MainLayoutSidePanel = React.forwardRef<
  HTMLElement,
  MainLayoutSidePanelProps
>(({ title, children, className, ...rest }, ref) => {
  return (
    <aside
      {...rest}
      ref={ref}
      className={cn('flex flex-col items-center md:items-start bg-slate-900 rounded-md p-4 md:overflow-y-auto', className)}
    >
      {title && <Typography.H3>{title}</Typography.H3>}
      {children}
    </aside>
  );
});

MainLayoutSidePanel.displayName = 'MainLayoutSidePanel';

export interface MainLayoutSidePanelProps extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, 'title'> {
  title?: React.ReactNode;
}
