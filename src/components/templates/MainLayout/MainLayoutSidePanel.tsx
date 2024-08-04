import React from 'react';

import { Paper } from '../../atoms/Paper';
import { Typography } from '../../atoms/Typography';
import { cn } from '../../../utils';

export const MainLayoutSidePanel = React.forwardRef<
  HTMLElement,
  MainLayoutSidePanelProps
>(({ title, children, className, ...rest }, ref) => {
  return (
    <Paper asChild>
      <aside
        {...rest}
        ref={ref}
        className={cn(
          'flex flex-col items-center md:items-start',
          className
        )}
      >
        {title && <Typography.H3>{title}</Typography.H3>}
        {children}
      </aside>
    </Paper>
  );
});

MainLayoutSidePanel.displayName = 'MainLayoutSidePanel';

export interface MainLayoutSidePanelProps extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, 'title'> {
  title?: React.ReactNode;
}
