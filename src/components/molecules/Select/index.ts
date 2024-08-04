
'use client';

import * as SelectPrimitive from '@radix-ui/react-select';
import type { SelectProps, SelectGroupProps } from '@radix-ui/react-select';

import { SelectContent, type SelectContentProps } from './SelectContent';
import { SelectItem, type SelectItemProps } from './SelectItem';
import { SelectLabel, type SelectLabelProps } from './SelectLabel';
import { SelectScrollDownButton, type SelectScrollDownButtonProps } from './SelectScrollDownButton';
import { SelectScrollUpButton, type SelectScrollUpButtonProps } from './SelectScrollUpButton';
import { SelectSeparator, type SelectSeparatorProps } from './SelectSeparator';
import { SelectTrigger, type SelectTriggerProps } from './SelectTrigger';

export const Select = {
  Root: SelectPrimitive.Root,
  Group: SelectPrimitive.Group,
  Content: SelectContent,
  Item: SelectItem,
  Label: SelectLabel,
  ScrollDownButton: SelectScrollDownButton,
  ScrollUpButton: SelectScrollUpButton,
  Separator: SelectSeparator,
  Trigger: SelectTrigger,
};

export type {
  SelectProps as SelectRootProps,
  SelectGroupProps as SelectGroupProps,
  SelectContentProps,
  SelectItemProps,
  SelectLabelProps,
  SelectScrollDownButtonProps,
  SelectScrollUpButtonProps,
  SelectSeparatorProps,
  SelectTriggerProps,
};
