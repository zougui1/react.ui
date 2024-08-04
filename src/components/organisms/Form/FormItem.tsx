'use client';

import { forwardRef, useId } from 'react';

import { FormItemContext } from './context';
import { cn } from '../../../utils';

export const FormItem = forwardRef<
  HTMLDivElement,
  FormItemProps
>(({ className, ...props }, ref) => {
  const id = useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn('space-y-2', className)} {...props} />
    </FormItemContext.Provider>
  );
});

FormItem.displayName = 'FormItem';

export type FormItemProps = React.HTMLAttributes<HTMLDivElement>;
