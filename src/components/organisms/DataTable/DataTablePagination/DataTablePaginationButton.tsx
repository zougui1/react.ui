import React from 'react';

import { Button, type ButtonProps } from '../../../atoms/Button';

export const DataTablePaginationButton = React.forwardRef<
  HTMLButtonElement,
  DataTablePaginationButtonProps
>(({ className, ...rest }, ref) => {
  return (
    <Button
      variant="outline"
      size="sm"
      {...rest}
      ref={ref}
    />
  );
});

DataTablePaginationButton.displayName = 'DataTablePaginationButton';

export interface DataTablePaginationButtonProps extends ButtonProps {

}
