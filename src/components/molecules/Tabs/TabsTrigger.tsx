'use client';

import React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '../../../utils';

export const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    {...props}
    ref={ref}
    className={cn(
      'ring-offset-background focus-visible:ring-ring',
      'data-[state=active]:bg-background data-[state=active]:text-foreground inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm',
      className,
    )}
  />
));

TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

export interface TabsTriggerProps extends TabsPrimitive.TabsTriggerProps {

}
