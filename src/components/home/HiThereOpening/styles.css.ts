import { style, keyframes } from '@vanilla-extract/css';

import { responsiveStyle } from '@/styles/responsive.css';

import * as hiThereMotionStyles from './HiThereMotion/styles.css';

const contentsContainerMarginTop = {
  desktop: 30,
  mobile: 15,
};
export const contentsContainerStyle = style([
  responsiveStyle({
    desktop: {
      marginTop: contentsContainerMarginTop.desktop,
      scale: 1,
    },
    mobile: {
      marginTop: contentsContainerMarginTop.mobile,
      scale: 0.75,
    },
  }),
  {
    alignItems: 'center',
    display: 'flex',
  },
]);

const fadeIn = keyframes({
  from: {
    opacity: 0,
    width: 0,
  },
  to: {
    opacity: 1,
    paddingLeft: '10px',
    width: '70px',
  },
});
const fadeInDuration = 1;
const fadeInDelay = hiThereMotionStyles.totalDuration;
const fadeInAnimation = `${fadeIn} ${fadeInDuration}s ease ${fadeInDelay}s forwards`;

const handshake = keyframes({
  [`${(100 * 0) / 6}%`]: { transform: 'rotate(0deg)' },
  [`${(100 * 1) / 6}%`]: { transform: 'rotate(15deg)' },
  [`${(100 * 3) / 6}%`]: { transform: 'rotate(-15deg)' },
  [`${(100 * 5) / 6}%`]: { transform: 'rotate(15deg)' },
  [`${(100 * 6) / 6}%`]: { transform: 'rotate(0deg)' },
});
const handshakeDuartion = 1;
const handshakeDelay = fadeInDelay + fadeInDuration;
const handshakeAnimation = `${handshake} ${handshakeDuartion}s ease-in-out ${handshakeDelay}s forwards`;

export const emojiContainerStyle = style({
  alignItems: 'center',
  animation: `${fadeInAnimation}, ${handshakeAnimation}`,
  display: 'flex',
  fontSize: '48px',
  justifyContent: 'center',
  lineHeight: '60px',
  opacity: 0,
  transformOrigin: 'bottom right',
  width: 0,
});

export const downsizeScale = { from: 1, to: 0.7 };
const downsizeTranslateY = {
  desktop: `calc(50vh - 50% - ${contentsContainerMarginTop.desktop}px)`,
  mobile: `calc(50vh - 50% - ${contentsContainerMarginTop.mobile}px)`,
};
const downsizeDesktop = keyframes({
  from: {
    scale: downsizeScale.from,
    transform: `translateY(${downsizeTranslateY.desktop})`,
  },
  to: {
    scale: downsizeScale.to,
    transform: 'translateY(0)',
  },
});
const downsizeMobile = keyframes({
  from: {
    scale: downsizeScale.from,
    transform: `translateY(${downsizeTranslateY.mobile})`,
  },
  to: {
    scale: downsizeScale.to,
    transform: 'translateY(0)',
  },
});
const downsizeDuration = 1.5;
const downsizeDelay = handshakeDelay + handshakeDuartion + 1;
export const elapsedTimeInHiTherePhase = downsizeDelay + downsizeDuration;

export const hiThereAnimationContainerStyle = style([
  responsiveStyle({
    desktop: {
      animation: `${downsizeDesktop} ${downsizeDuration}s ease ${downsizeDelay}s forwards`,
      transform: `translateY(${downsizeTranslateY.desktop})`,
    },
    mobile: {
      animation: `${downsizeMobile} ${downsizeDuration}s ease ${downsizeDelay}s forwards`,
      transform: `translateY(${downsizeTranslateY.mobile})`,
    },
  }),
]);
