'use client';

import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import type { NavigationMenuItemProps } from '@radix-ui/react-navigation-menu';

import { NavigationMenuContent, type NavigationMenuContentProps } from './NavigationMenuContent';
import { NavigationMenuIndicator, type NavigationMenuIndicatorProps } from './NavigationMenuIndicator';
import { NavigationMenuLink, type NavigationMenuLinkProps } from './NavigationMenuLink';
import { NavigationMenuLinkItem, type NavigationMenuLinkItemProps } from './NavigationMenuLinkItem';
import { NavigationMenuList, type NavigationMenuListProps } from './NavigationMenuList';
import { NavigationMenuRoot, type NavigationMenuRootProps } from './NavigationMenuRoot';
import { NavigationMenuTrigger, type NavigationMenuTriggerProps } from './NavigationMenuTrigger';
import { NavigationMenuViewport, type NavigationMenuViewportProps } from './NavigationMenuViewport';

export const NavigationMenu = {
  Item: NavigationMenuPrimitive.Item,
  Content: NavigationMenuContent,
  Indicator: NavigationMenuIndicator,
  Link: NavigationMenuLink,
  LinkItem: NavigationMenuLinkItem,
  List: NavigationMenuList,
  Root: NavigationMenuRoot,
  Trigger: NavigationMenuTrigger,
  Viewport: NavigationMenuViewport,
};

export type {
  NavigationMenuItemProps as NavigationMenuItemProps,
  NavigationMenuContentProps,
  NavigationMenuIndicatorProps,
  NavigationMenuLinkProps,
  NavigationMenuLinkItemProps,
  NavigationMenuListProps,
  NavigationMenuRootProps,
  NavigationMenuTriggerProps,
  NavigationMenuViewportProps,
};
