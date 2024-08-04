'use client';

import { NavigationMenuItem, type NavigationMenuItemProps } from '@radix-ui/react-navigation-menu';

import { NavigationMenuLink, type NavigationMenuLinkProps } from './NavigationMenuLink';

export const NavigationMenuLinkItem = ({ value, ...rest }: NavigationMenuLinkItemProps) => {
  return (
    <NavigationMenuItem value={value}>
      <NavigationMenuLink {...rest} />
    </NavigationMenuItem>
  );
}

export interface NavigationMenuLinkItemProps extends NavigationMenuLinkProps {
  value?: NavigationMenuItemProps['value'];
}
