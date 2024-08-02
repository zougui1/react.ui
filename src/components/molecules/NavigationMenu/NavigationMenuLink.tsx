import React from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';

import { triggerStyle } from './styles';
import { cn } from '../../../utils';

export const NavigationMenuLink = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Link>,
  NavigationMenuLinkProps
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Link
    {...props}
    ref={ref}
    className={cn(triggerStyle(), className)}
  />
));

NavigationMenuLink.displayName = NavigationMenuPrimitive.Link.displayName;


export interface NavigationMenuLinkProps extends NavigationMenuPrimitive.NavigationMenuLinkProps {

}
