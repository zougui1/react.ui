import { cn } from '../../../utils';

export const DialogFooter = ({
  className,
  ...props
}: DialogFooterProps) => (
  <div
    {...props}
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      className,
    )}
  />
);

DialogFooter.displayName = 'DialogFooter';

export interface DialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {

}
