import React from 'react';
import Grid from '@mui/material/Grid';
import Content from './components/Content/Content';
import ContainerImage from './components/Image/Container';
import HomeContainer from './Home.style';

export default function Home() {
  return (
    <HomeContainer component='main' maxWidth="lg">
      <Grid container component='section'
      spacing={2} sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 'auto',
      }} xs={12} sm={12} md={11} lg={12}>
        <Content />
        <ContainerImage />
      </Grid>
    </HomeContainer>
  );
}
