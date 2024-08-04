import React from 'react';

import { cn } from '../../utils';

export const Container = React.forwardRef<
  HTMLDivElement,
  ContainerProps
>(({ className, ...rest }, ref) => {
  return (
    <div
      {...rest}
      ref={ref}
      className={cn(
        'container min-h-full',
        'flex flex-col md:flex-row gap-8',
        'py-6 px-4 sm:px-8 md:px-6',
        'shadow-2xl shadow-purple-700/30',
        className,
      )}
    />
  );
});

Container.displayName = 'Container';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {

}
