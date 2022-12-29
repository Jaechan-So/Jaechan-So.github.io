import { style, keyframes } from '@vanilla-extract/css';

import { responsiveStyle } from '@/styles/responsive.css';

export const rootContainerStyle = style({
  alignItems: 'center',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
});

const fadeIn = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(30px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

export const textStyle = style([
  responsiveStyle({
    desktop: { fontSize: 40, lineHeight: '60px' },
    mobile: { fontSize: 24, lineHeight: '28px' },
  }),
  {
    animation: `${fadeIn} 1s ease-in-out`,
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: 600,
    textAlign: 'center',
  },
]);
