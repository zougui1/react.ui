'use client';

import { forwardRef } from 'react';

import { useFormField } from './context';
import { cn } from '../../../utils';

export const FormMessage = forwardRef<
  HTMLParagraphElement,
  FormMessageProps
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn('text-destructive text-sm font-medium', className)}
      {...props}
    >
      {body}
    </p>
  );
});

FormMessage.displayName = 'FormMessage';

export type FormMessageProps = React.HTMLAttributes<HTMLParagraphElement>;
