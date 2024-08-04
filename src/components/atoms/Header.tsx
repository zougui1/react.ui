import React from 'react';

import { cn } from '../../utils';

export const Header = React.forwardRef<
  HTMLElement,
  HeaderProps
>(({ className, ...rest }, ref) => {
  return (
    <header
      {...rest}
      ref={ref}
      className={cn(
        'sticky top-0 h-14',
        'flex justify-between items-center',
        'backdrop-blur-[2px] bg-black/80 shadow-lg',
        className,
      )}
    />
  );
});

Header.displayName = 'Header';

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {

}
