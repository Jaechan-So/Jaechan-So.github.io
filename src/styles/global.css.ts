import { globalStyle } from '@vanilla-extract/css';

globalStyle('html, body', {
  '@media': {
    '(prefers-color-scheme: dark)': {
      background: '#181D31',
    },
  },
  backgroundColor: '#FDF4DC',
  fontFamily: 'Pretendard, Arial',
});
