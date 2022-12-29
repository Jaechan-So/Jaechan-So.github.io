/* eslint-disable sort-keys, sort-keys-fix/sort-keys-fix */
import {
  ComplexStyleRule,
  StyleRule,
  style,
  styleVariants,
} from '@vanilla-extract/css';

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

type ResponsiveRecipeProps<
  StyleMap extends Record<string, StyleRule>,
  Variants extends Record<
    string,
    { [K in keyof typeof breakPoints]?: keyof StyleMap | (keyof StyleMap)[] }
  >,
> = {
  baseStyle?: string;
  styleMap: StyleMap;
  variants: Variants;
};

export const responsiveRecipe = <
  StyleMap extends Record<string, StyleRule>,
  Variants extends Record<
    string,
    { [K in keyof typeof breakPoints]?: keyof StyleMap | (keyof StyleMap)[] }
  >,
>({
  baseStyle,
  styleMap,
  variants,
}: ResponsiveRecipeProps<StyleMap, Variants>) => {
  const rules = {} as Record<keyof Variants, ComplexStyleRule>;

  (
    Object.entries(variants) as [
      keyof Variants,
      { [K in keyof typeof breakPoints]?: keyof StyleMap | (keyof StyleMap)[] },
    ][]
  ).forEach(([varName, varMap]) => {
    let compositeResponsiveStyle: StyleRule = {};
    const mediaQueries: Record<string, StyleRule> = {};

    (
      Object.entries(varMap) as [
        keyof typeof varMap,
        keyof StyleMap | (keyof StyleMap)[],
      ][]
    ).forEach(([breakPoint, styleName]) => {
      const mediaQueryKey = mediaQueryTargets[breakPoint];
      let compositeStyle: StyleRule = {};

      if (Array.isArray(styleName)) {
        styleName.forEach((name) => {
          compositeStyle = { ...compositeStyle, ...styleMap[name] };
        });
      } else {
        compositeStyle = styleMap[styleName];
      }

      if (mediaQueryKey) {
        mediaQueries[mediaQueryKey] = compositeStyle;
      } else {
        compositeResponsiveStyle = {
          ...compositeResponsiveStyle,
          ...compositeStyle,
        };
      }
    });

    compositeResponsiveStyle = {
      ...compositeResponsiveStyle,
      '@media': mediaQueries,
    };

    rules[varName] = [
      ...(baseStyle ? [baseStyle] : []),
      compositeResponsiveStyle,
    ];
  });

  return styleVariants(rules);
};
