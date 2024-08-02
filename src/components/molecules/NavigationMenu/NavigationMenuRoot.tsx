import React from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';

import { NavigationMenuViewport } from './NavigationMenuViewport';
import { cn } from '../../../utils';

export const NavigationMenuRoot = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  NavigationMenuRootProps
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    {...props}
    ref={ref}
    className={cn(
      'relative z-10 flex max-w-max flex-1 items-center justify-center',
      className,
    )}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
));

NavigationMenuRoot.displayName = NavigationMenuPrimitive.Root.displayName;

export interface NavigationMenuRootProps extends React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root> {

}
