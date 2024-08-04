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
import { Textarea } from '../../atoms/Textarea';
import { cn } from '../../../utils';

export const FormTextarea = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({ label, error, onChange, className, ...rest }: FormTextareaProps<TFieldValues, TName>) => {
  const handleNameChange = (handler: (e: React.ChangeEvent<HTMLTextAreaElement>) => void) => (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
            <Textarea {...field} onChange={handleNameChange(field.onChange)} />
          </FormControl>

          <FormMessage>{error}</FormMessage>
        </FormItem>
      )}
    />
  );
}

export interface FormTextareaProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends Pick<ControllerProps<TFieldValues, TName>, 'control' | 'name'> {
  label: string;
  error?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  className?: string;
}
