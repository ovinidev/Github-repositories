import { styled } from '../../styles/stitches.config';

export const Container = styled("section", {
  width: '100vw',
  height: '100vh',

  display: 'flex',
  justifyContent: 'flex-start'
});

export const RepositoryContent = styled("div", {
  fontSize: '$2',
  ml: '10rem',
  mt: '10rem',
  
  ul: {
    listStyle: 'none',
  }
});

export const Title = styled("h1", {
  
});
