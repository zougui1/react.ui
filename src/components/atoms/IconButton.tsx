import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { tv, type VariantProps } from 'tailwind-variants';

import { Button, type ButtonProps } from './Button';

const iconButtonVariants = tv({

  slots: {
    base: 'p-0 box-content rounded-full',
    icon: '',
  },

  variants: {
    size: {
      default: {
        base: 'h-4 w-4 p-2',
        icon: 'w-4',
      },
      sm: {
        base: 'h-4 w-4 p-1.5',
        icon: 'w-3.5',
      },
      lg: {
        base: 'h-4 w-4 p-2.5',
        icon: 'w-5',
      },
    },
  },

  defaultVariants: {
    size: 'default',
  },
});

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, size, children, ...rest }, ref) => {
    const { base, icon } = iconButtonVariants({ size, className });

    return (
      <Button {...rest} ref={ref} variant="ghost" className={base()}>
        <Slot className={icon()}>
          {children}
        </Slot>
      </Button>
    );
  },
);

IconButton.displayName = 'IconButton';

export interface IconButtonProps
  extends Omit<ButtonProps, 'variant' | 'size'>,
  VariantProps<typeof iconButtonVariants> {

}
