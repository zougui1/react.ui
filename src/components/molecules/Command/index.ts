'use client';

import { useCommandState } from 'cmdk';

import { CommandDialog, type CommandDialogProps } from './CommandDialog';
import { CommandEmpty, type CommandEmptyProps } from './CommandEmpty';
import { CommandGroup, type CommandGroupProps } from './CommandGroup';
import { CommandInput, type CommandInputProps } from './CommandInput';
import { CommandItem, type CommandItemProps } from './CommandItem';
import { CommandList, type CommandListProps } from './CommandList';
import { CommandRoot, type CommandRootProps } from './CommandRoot';
import { CommandSeparator, type CommandSeparatorProps } from './CommandSeparator';
import { CommandShortcut, type CommandShortcutProps } from './CommandShortcut';
import { CommandText, type CommandTextProps } from './CommandText';

export const Command = {
  Dialog: CommandDialog,
  Empty: CommandEmpty,
  Group: CommandGroup,
  Input: CommandInput,
  Item: CommandItem,
  List: CommandList,
  Root: CommandRoot,
  Separator: CommandSeparator,
  Shortcut: CommandShortcut,
  Text: CommandText,
  useState: useCommandState,
};

export type {
  CommandDialogProps,
  CommandEmptyProps,
  CommandGroupProps,
  CommandInputProps,
  CommandItemProps,
  CommandListProps,
  CommandRootProps,
  CommandSeparatorProps,
  CommandShortcutProps,
  CommandTextProps,
};
