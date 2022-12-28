import { createTheme } from '@vanilla-extract/css';

const themeTokens = {
  color: {
    navy: '#181D31',
    warmWhite: '#FDF4DC',
    white: '#FFFFFF',
  },
};

const theme = createTheme(themeTokens);

export const themeClass = theme[0];
export const vars = theme[1];
