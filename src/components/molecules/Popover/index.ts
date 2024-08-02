
'use client';

import * as PopoverPrimitive from '@radix-ui/react-popover';
import type { PopoverProps, PopoverTriggerProps } from '@radix-ui/react-popover';

import { PopoverContent, type PopoverContentProps } from './PopoverContent';

export const Popover = {
  Root: PopoverPrimitive.Root,
  Trigger: PopoverPrimitive.Trigger,
  Portal: PopoverPrimitive.Portal,
  Close: PopoverPrimitive.Close,
  Content: PopoverContent,
};

export type {
  PopoverProps as PopoverRootProps,
  PopoverTriggerProps as PopoverTriggerProps,
  PopoverContentProps,
};
