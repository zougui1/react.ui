import { Typography, type TypographyProps } from './Typography';

export const LabelValue = ({ label, value, ...rest }: LabelValueProps) => {
  return (
    <Typography.Span {...rest}>
      {label}{' '}
      <strong>{value}</strong>
    </Typography.Span>
  );
}

export interface LabelValueProps extends Omit<TypographyProps<'p'>, 'children'> {
  label: string;
  value: string;
}
