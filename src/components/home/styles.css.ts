import { style } from '@vanilla-extract/css';

import { responsiveStyle } from '@/styles/responsive.css';

export const rootContainerStyle = style({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  position: 'relative',
  width: '100vw',
});

export const profileContainerStyle = style([
  // responsiveStyle({
  //   desktop: {
  //     marginTop: 50,
  //   },
  //   mobile: {
  //     marginTop: 30,
  //   },
  // }),
  {
    height: '100%',
    width: '100%',
  },
]);
