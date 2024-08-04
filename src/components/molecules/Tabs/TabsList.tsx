'use client';

import React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '../../../utils';

export const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    {...props}
    ref={ref}
    className={cn(
      'bg-muted text-muted-foreground inline-flex h-10 items-center justify-center rounded-md p-1',
      className,
    )}
  />
));

TabsList.displayName = TabsPrimitive.List.displayName;

export interface TabsListProps extends TabsPrimitive.TabsListProps {

}
