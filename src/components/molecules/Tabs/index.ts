'use client';

import * as TabsPrimitive from '@radix-ui/react-tabs';
import type { TabsProps } from '@radix-ui/react-tabs';

import { TabsContent, type TabsContentProps } from './TabsContent';
import { TabsList, type TabsListProps } from './TabsList';
import { TabsTrigger, type TabsTriggerProps } from './TabsTrigger';

export const Tabs = {
  Root: TabsPrimitive.Root,
  Content: TabsContent,
  List: TabsList,
  Trigger: TabsTrigger,
};

export type {
  TabsProps,
  TabsContentProps,
  TabsListProps,
  TabsTriggerProps,
};
