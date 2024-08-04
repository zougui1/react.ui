import React from 'react';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '../../../utils';

export const MainLayoutScreen = React.forwardRef<
  HTMLDivElement,
  MainLayoutScreenProps
>(({ className, asChild, ...rest }, ref) => {
  const Comp = asChild ? Slot : 'div';

  return (
    <Comp
      {...rest}
      ref={ref}
      className={cn(
        'flex flex-col min-h-screen',
        className,
      )}
    />
  );
});

MainLayoutScreen.displayName = 'MainLayoutScreen';

export interface MainLayoutScreenProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}
