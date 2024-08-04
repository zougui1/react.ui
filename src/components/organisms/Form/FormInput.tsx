'use client';

import {
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from 'react-hook-form';

import { FormField } from './FormField';
import { FormItem } from './FormItem';
import { FormLabel } from './FormLabel';
import { FormControl } from './FormControl';
import { FormMessage } from './FormMessage';

import { Input } from '../../atoms/Input';
import { cn } from '../../../utils';

export const FormInput = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({ label, error, onChange, className, readOnly, ...rest }: FormInputProps<TFieldValues, TName>) => {
  const handleNameChange = (handler: (e: React.ChangeEvent<HTMLInputElement>) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
    handler(e);
  }

  return (
    <FormField
      {...rest}
      render={({ field }) => (
        <FormItem className={cn('flex flex-col', className)}>
          <FormLabel>{label}</FormLabel>

          <FormControl>
            <Input
              {...field}
              readOnly={readOnly}
              onChange={handleNameChange(field.onChange)}
            />
          </FormControl>

          <FormMessage>{error}</FormMessage>
        </FormItem>
      )}
    />
  );
}

export interface FormInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends Pick<ControllerProps<TFieldValues, TName>, 'control' | 'name'> {
  label: string;
  error?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  readOnly?: boolean;
}
