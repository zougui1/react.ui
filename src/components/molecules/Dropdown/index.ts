'use client';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import type {
  DropdownMenuProps,
  DropdownMenuTriggerProps,
  DropdownMenuGroupProps,
  DropdownMenuPortalProps,
  DropdownMenuSubProps,
  DropdownMenuRadioGroupProps,
} from '@radix-ui/react-dropdown-menu';

import { DropdownCheckboxItem, type DropdownCheckboxItemProps } from './DropdownCheckboxItem';
import { DropdownContent, type DropdownContentProps } from './DropdownContent';
import { DropdownItem, type DropdownItemProps } from './DropdownItem';
import { DropdownLabel, type DropdownLabelProps } from './DropdownLabel';
import { DropdownRadioItem, type DropdownRadioItemProps } from './DropdownRadioItem';
import { DropdownSeparator, type DropdownSeparatorProps } from './DropdownSeparator';
import { DropdownShortcut, type DropdownShortcutProps } from './DropdownShortcut';
import { DropdownSubContent, type DropdownSubContentProps } from './DropdownSubContent';
import { DropdownSubTrigger, type DropdownSubTriggerProps } from './DropdownSubTrigger';

export const Dropdown = {
  Root: DropdownMenuPrimitive.Root,
  Trigger: DropdownMenuPrimitive.Trigger,
  Group: DropdownMenuPrimitive.Group,
  Portal: DropdownMenuPrimitive.Portal,
  Sub: DropdownMenuPrimitive.Sub,
  RadioGroup: DropdownMenuPrimitive.RadioGroup,
  CheckboxItem: DropdownCheckboxItem,
  Content: DropdownContent,
  Item: DropdownItem,
  Label: DropdownLabel,
  RadioItem: DropdownRadioItem,
  Separator: DropdownSeparator,
  Shortcut: DropdownShortcut,
  SubContent: DropdownSubContent,
  SubTrigger: DropdownSubTrigger,
};

export type {
  DropdownMenuProps as DropdownRootProps,
  DropdownMenuTriggerProps as DropdownTriggerProps,
  DropdownMenuGroupProps as DropdownGroupProps,
  DropdownMenuPortalProps as DropdownPortalProps,
  DropdownMenuSubProps as DropdownSubProps,
  DropdownMenuRadioGroupProps as DropdownRadioGroupProps,
  DropdownCheckboxItemProps,
  DropdownContentProps,
  DropdownItemProps,
  DropdownLabelProps,
  DropdownRadioItemProps,
  DropdownSeparatorProps,
  DropdownShortcutProps,
  DropdownSubContentProps,
  DropdownSubTriggerProps,
};
