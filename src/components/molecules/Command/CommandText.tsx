import * as React from 'react';

import { Typography, TypographyProps } from '../../atoms/Typography';
import { cn } from '../../../utils';

export const CommandText = React.forwardRef<
  HTMLSpanElement,
  CommandTextProps
>(({ className, ...props }, ref) => (
  <Typography.Span
    {...props}
    ref={ref}
    className={cn(
      'overflow-hidden px-2 py-1.5 text-sm font-medium text-foreground',
      className,
    )}
  />
));

CommandText.displayName = 'Command.Text';

export interface CommandTextProps extends TypographyProps<'span'> {

}
