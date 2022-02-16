import { globalCss } from './stitches.config';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  html: {
    fontSize: '62.5%',
    scrollBehavior: 'smooth',
    fontFamily: 'sans-serif'
  },

  button: {
    cursor: 'pointer',
  },

  '@media(min-width: 1080px)': {
    html: {
    },
  },

});
