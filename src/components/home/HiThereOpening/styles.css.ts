import { style } from '@vanilla-extract/css';

import { convertInUrl } from '@/utils/styles';

/* Style values */

export const gradientId = 'paint0_linear_7_9';
export const gradientUrl = convertInUrl(gradientId);
export const variants = {
  end: { fill: gradientUrl, fillOpacity: 1, pathLength: 1 },
  start: { fill: gradientUrl, fillOpacity: 0, pathLength: 0 },
};
const fillTransition = {
  delay: 1.5,
  duration: 1,
};
export const transition = {
  default: { duration: 4.5 },
  fill: fillTransition,
  fillOpacity: fillTransition,
};
export const totalDuration = Object.values(fillTransition).reduce(
  (prev, curr) => prev + curr,
  0,
);

/* Styles */

export const pathStyle = style({
  stroke: gradientUrl,
  strokeWidth: 1,
});
