import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Content from './components/Content/Content';
import ContainerImage from './components/Image/Container';

export default function Home() {
  return (
    <Container component='main' maxWidth="lg" sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      marginTop: '30px',
      marginBottom: '120px',
    }}>
      <Grid container component='section'
      spacing={2} sx={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        padding: '0 16px',
        margin: 'auto',
      }}>
        <Content />
        <ContainerImage />
      </Grid>
    </Container>
  );
}
