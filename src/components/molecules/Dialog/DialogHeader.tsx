import { cn } from '../../../utils';

export const DialogHeader = ({
  className,
  ...props
}: DialogHeaderProps) => (
  <div
    {...props}
    className={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)}
  />
);

DialogHeader.displayName = 'DialogHeader';

export interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {

}
