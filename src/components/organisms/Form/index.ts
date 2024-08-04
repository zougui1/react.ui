'use client';

import { FormProvider, type FormProviderProps } from 'react-hook-form';

import { FormControl, type FormControlProps } from './FormControl';
import { FormDescription, type FormDescriptionProps } from './FormDescription';
import { FormField, type FormFieldProps } from './FormField';
import { FormInput, type FormInputProps } from './FormInput';
import { FormTextarea, type FormTextareaProps } from './FormTextarea';
import { FormItem, type FormItemProps } from './FormItem';
import { FormLabel, type FormLabelProps } from './FormLabel';
import { FormMessage, type FormMessageProps } from './FormMessage';
import { FormSelect, type FormSelectProps } from './FormSelect';
import { FormAutocomplete, type FormAutocompleteProps } from './FormAutocomplete';

export const Form = {
  Root: FormProvider,
  Control: FormControl,
  Description: FormDescription,
  Field: FormField,
  Input: FormInput,
  Textarea: FormTextarea,
  Item: FormItem,
  Label: FormLabel,
  Message: FormMessage,
  Select: FormSelect,
  Autocomplete: FormAutocomplete,
};

export type {
  FormProviderProps as FormRootProps,
  FormControlProps,
  FormDescriptionProps,
  FormFieldProps,
  FormInputProps,
  FormTextareaProps,
  FormItemProps,
  FormLabelProps,
  FormMessageProps,
  FormSelectProps,
  FormAutocompleteProps,
};
