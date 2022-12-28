/* eslint-disable sort-keys, sort-keys-fix/sort-keys-fix */
import { ComplexStyleRule, style } from '@vanilla-extract/css';

const breakPoints = {
  mobile: 768,
  tablet: 1024,
  desktop: null,
} as const;

type MediaQueryTargets = {
  [K in keyof typeof breakPoints]: typeof breakPoints[K] extends null
    ? null
    : string;
};

const mediaQueryTargets = Object.entries(breakPoints).reduce(
  (prev, [key, value]) => ({
    ...prev,
    [key]: value ? `screen and (max-width: ${value - 1}px)` : null,
  }),
  {},
) as MediaQueryTargets;

type ResponsiveStyleProps = {
  [K in keyof typeof breakPoints]?: ComplexStyleRule;
};

export const responsiveStyle = (props: ResponsiveStyleProps) =>
  style({
    '@media': (
      Object.entries(props) as [keyof ResponsiveStyleProps, ComplexStyleRule][]
    ).reduce(
      (prev, [key, value]) =>
        mediaQueryTargets[key]
          ? { ...prev, [mediaQueryTargets[key] as string]: value }
          : { ...prev },
      {},
    ),
    ...props.desktop,
  });
