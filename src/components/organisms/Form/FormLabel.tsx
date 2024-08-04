'use client';

import { forwardRef } from 'react';
import type * as LabelPrimitive from '@radix-ui/react-label';

import { useFormField } from './context';
import { Label, type LabelProps } from '../../atoms/Label';
import { cn } from '../../../utils';


export const FormLabel = forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  FormLabelProps
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      className={cn(error && 'text-destructive', className)}
      htmlFor={formItemId}
      {...props}
    />
  );
});

FormLabel.displayName = 'FormLabel';

export type FormLabelProps = LabelProps;
