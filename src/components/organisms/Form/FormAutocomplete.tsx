'use client';

import {
  useController,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
  type FieldPathValue,
} from 'react-hook-form';

import { FormItem } from './FormItem';
import { FormLabel } from './FormLabel';
import { FormControl } from './FormControl';
import { FormMessage } from './FormMessage';
import { FormFieldContext } from './context';
import { Autocomplete } from '../../molecules/Autocomplete';
import { cn } from '../../../utils';

const FormAutocompleteRoot = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({ label, error, onValuesChange, renderValues, control, disabled, multiple, creatable, className, name, children, readOnly }: FormAutocompleteProps<TFieldValues, TName>) => {
  const { field } = useController({
    control,
    name,
  });

  const handleNameChange = (values: (string | number)[]) => {
    onValuesChange?.(values);
    field.onChange(values);
  }

  return (
    <FormFieldContext.Provider value={{ name }}>
      <FormItem className={cn('flex flex-col', className)}>
        <FormLabel>{label}</FormLabel>

        <FormControl>
          <Autocomplete.Root
            values={field.value}
            onValuesChange={readOnly ? undefined : handleNameChange}
            multiple={multiple}
            disabled={disabled}
            creatable={creatable}
          >
            <Autocomplete.Trigger className="w-[250px]">
              <Autocomplete.Value renderValues={renderValues} />
            </Autocomplete.Trigger>

            <Autocomplete.Content className="w-[250px] p-0">
              <Autocomplete.Input placeholder="Search" />

              <Autocomplete.List>
                <Autocomplete.Empty>No results.</Autocomplete.Empty>
                <Autocomplete.NewItems heading="New" />
                {children}
              </Autocomplete.List>
            </Autocomplete.Content>
          </Autocomplete.Root>
        </FormControl>

        <FormMessage>{error}</FormMessage>
      </FormItem>
    </FormFieldContext.Provider>
  );
}

export interface FormAutocompleteProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends Pick<ControllerProps<TFieldValues, TName>, 'name' | 'control'> {
  label: string;
  error?: string;
  onValuesChange?: (values: (string | number)[]) => void;
  className?: string;
  children?: React.ReactNode;
  readOnly?: boolean;
  multiple?: boolean;
  creatable?: boolean;
  disabled?: boolean;
  renderValues?: ValueRenderer<FieldPathValue<TFieldValues, TName>>;
}

type ValueRenderer<T> = T extends (string | number)[] ? ((values: T) => React.ReactNode) : undefined;

export const FormAutocomplete = {
  Root: FormAutocompleteRoot,
  Group: Autocomplete.Group,
  Item: Autocomplete.Item,
  Separator: Autocomplete.Separator,
};
