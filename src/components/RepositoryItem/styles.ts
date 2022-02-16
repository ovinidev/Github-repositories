import { styled } from '../../styles/stitches.config';

export const Container = styled('div', {
  strong: {
    fontSize: '2.6rem'
  },

  li: {
    mt: '2rem',
    mb: '2rem',
    width: '50rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  a : {
    textDecoration: 'none',
    color: 'darkRed'
  },

  p: {
    fontSize: '1.8rem'
  }

})