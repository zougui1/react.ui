'use client';

import { forwardRef } from 'react';

import { useFormField } from './context';
import { cn } from '../../../utils';

export const FormDescription = forwardRef<
  HTMLParagraphElement,
  FormDescriptionProps
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  );
});

FormDescription.displayName = 'FormDescription';

export type FormDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;
