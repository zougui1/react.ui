'use client';

import React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '../../../utils';

export const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  TabsContentProps
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    {...props}
    ref={ref}
    className={cn(
      'ring-offset-background',
      'focus-visible:ring-ring mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      className,
    )}
  />
));

TabsContent.displayName = TabsPrimitive.Content.displayName;

export interface TabsContentProps extends TabsPrimitive.TabsContentProps {

}
