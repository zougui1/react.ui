import React from 'react';
import { Slot } from '@radix-ui/react-slot';

import { Container } from '../../atoms/Container';
import { cn } from '../../../utils';

export const MainLayoutContainer = React.forwardRef<
  HTMLDivElement,
  MainLayoutContainerProps
>(({ className, asChild, ...rest }, ref) => {
  const Comp = asChild ? Slot : Container;

  return (
    <Comp
      {...rest}
      ref={ref}
      className={cn('flex-1', className)}
    />
  );
});

MainLayoutContainer.displayName = 'MainLayoutContainer';

export interface MainLayoutContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}
