import { style } from '@vanilla-extract/css';

import { responsiveStyle } from '@/styles/responsive.css';

export const cardContainerStyle = style([
  responsiveStyle({
    desktop: {
      borderRadius: 15,
      padding: '10px 10px',
    },
    mobile: {
      borderRadius: 10,
      padding: '6px 6px',
    },
  }),
  {
    background: 'rgba(255, 255, 255, 0.8)',
    width: '100%',
  },
]);
