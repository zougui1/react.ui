import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const typography = tv({
  variants: {
    variant: {
      span: 'text-base',
      p: 'text-base mb-[0.35em]',
      h1: 'text-5xl sm:text-7xl font-extrabold tracking-tight mb-[0.35em]',
      h2: 'text-4xl sm:text-6xl font-bold tracking-tight mb-[0.35em]',
      h3: 'text-3xl sm:text-5xl font-bold mb-[0.35em]',
      h4: 'text-2xl sm:text-4xl font-bold mb-[0.35em]',
      h5: 'text-xl sm:text-3xl font-semibold mb-[0.35em]',
      h6: 'text-lg sm:text-2xl font-semibold tracking-wide mb-[0.35em]',
    },
  },
});

const createTypography = <V extends Variant>(variant: V) => {
  const Component = variant as unknown as Variant;

  const Typography = React.forwardRef<TypographyHTMLElementMap[V], TypographyProps<V>>((props, ref) => {
    return (
      <Component
        {...props}
        ref={ref as React.ForwardedRef<HTMLSpanElement & HTMLParagraphElement & HTMLHeadingElement>}
        className={typography({ className: props.className, variant })}
      />
    )
  });

  Typography.displayName = `Typography.${variant}`;

  return Typography;
}

export const Typography = {
  Span: createTypography('span'),
  Paragraph: createTypography('p'),
  H1: createTypography('h1'),
  H2: createTypography('h2'),
  H3: createTypography('h3'),
  H4: createTypography('h4'),
  H5: createTypography('h5'),
  H6: createTypography('h6'),
};

type Variant = NonNullable<VariantProps<typeof typography>['variant']>;

type TypographyHTMLElementMap = {
  span: HTMLSpanElement;
  p: HTMLParagraphElement;
  h1: HTMLHeadingElement;
  h2: HTMLHeadingElement;
  h3: HTMLHeadingElement;
  h4: HTMLHeadingElement;
  h5: HTMLHeadingElement;
  h6: HTMLHeadingElement;
};

export interface TypographyProps<V extends Variant> extends React.DetailedHTMLProps<React.HTMLAttributes<TypographyHTMLElementMap[V]>, TypographyHTMLElementMap[V]> {

}
