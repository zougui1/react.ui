'use client';

import {
  useFormContext,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
  type PathValue,
} from 'react-hook-form';

import { FormItem } from './FormItem';
import { FormLabel } from './FormLabel';
import { FormControl } from './FormControl';
import { FormMessage } from './FormMessage';
import { FormFieldContext } from './context';
import { Select } from '../../molecules/Select';
import { cn } from '../../../utils';

const FormSelectRoot = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({ label, error, onValueChange, className, name, children, readOnly }: FormSelectProps<TFieldValues, TName>) => {
  const { register, setValue, watch } = useFormContext<TFieldValues>();

  const value = watch(name);

  const handleNameChange = (value: PathValue<TFieldValues, TName>) => {
    onValueChange?.(value);
    setValue(name, value);
  }

  return (
    <FormFieldContext.Provider value={{ name }}>
      <FormItem className={cn('flex flex-col', className)}>
        <FormLabel>{label}</FormLabel>

        <FormControl>
          <Select.Root
            value={value}
            onValueChange={readOnly ? undefined : handleNameChange}
          >
            <Select.Trigger
              {...register(name)}
            >
              <Select.Value />
            </Select.Trigger>

            <Select.Content>{children}</Select.Content>
          </Select.Root>
        </FormControl>

        <FormMessage>{error}</FormMessage>
      </FormItem>
    </FormFieldContext.Provider>
  );
}

export interface FormSelectProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends Pick<ControllerProps<TFieldValues, TName>, 'name' | 'control'> {
  label: string;
  error?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  children?: React.ReactNode;
  readOnly?: boolean;
}

export const FormSelect = {
  Root: FormSelectRoot,
  Item: Select.Item,
  Group: Select.Group,
  ScrollUpButton: Select.ScrollUpButton,
  ScrollDownButton: Select.ScrollDownButton,
  Separator: Select.Separator,
};
