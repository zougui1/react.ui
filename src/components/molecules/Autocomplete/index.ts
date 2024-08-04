'use client';

import { AutocompleteRoot, type AutocompleteRootProps } from './AutocompleteRoot';
import { AutocompleteTrigger, type AutocompleteTriggerProps } from './AutocompleteTrigger';
import { AutocompleteValue, type AutocompleteValueProps } from './AutocompleteValue';
import { AutocompleteContent, type AutocompleteContentProps } from './AutocompleteContent';
import { AutocompleteInput, type AutocompleteInputProps } from './AutocompleteInput';
import { AutocompleteItem, type AutocompleteItemProps } from './AutocompleteItem';
import { AutocompleteNewItems } from './AutocompleteNewItems';
import {
  Command,
  type CommandListProps,
  type CommandEmptyProps,
  type CommandGroupProps,
  type CommandSeparatorProps,
  type CommandTextProps,
} from '../Command';

export const Autocomplete = {
  Root: AutocompleteRoot,
  Trigger: AutocompleteTrigger,
  Value: AutocompleteValue,
  Content: AutocompleteContent,
  Item: AutocompleteItem,
  NewItems: AutocompleteNewItems,
  Input: AutocompleteInput,
  List: Command.List,
  Empty: Command.Empty,
  Group: Command.Group,
  Separator: Command.Separator,
};

export type {
  AutocompleteRootProps,
  AutocompleteTriggerProps,
  AutocompleteValueProps,
  AutocompleteContentProps,
  AutocompleteItemProps,
  AutocompleteInputProps,
  CommandListProps as AutocompleteListProps,
  CommandEmptyProps as AutocompleteEmptyProps,
  CommandGroupProps as AutocompleteGroupProps,
  CommandSeparatorProps as AutocompleteSeparatorProps,
  CommandTextProps as AutocompleteTextProps,
};
