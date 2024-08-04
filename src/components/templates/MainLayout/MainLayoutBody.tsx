import React from 'react';

import { Typography } from '../../atoms/Typography';
import { cn } from '../../../utils';

export const MainLayoutBody = React.forwardRef<
  HTMLElement,
  MainLayoutBodyProps
>(({ title, children, className, ...rest }, ref) => {
  return (
    <main
      {...rest}
      ref={ref}
      className={cn('flex md:flex-1 flex-col items-center', className)}
    >
      {title && <Typography.H1>{title}</Typography.H1>}
      <div className="w-full">{children}</div>
    </main>
  );
});

MainLayoutBody.displayName = 'MainLayoutBody';

export interface MainLayoutBodyProps extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, 'title'> {
  title?: React.ReactNode;
}
