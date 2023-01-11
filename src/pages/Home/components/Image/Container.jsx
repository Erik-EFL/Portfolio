import React from 'react';
import { Box, Grid } from '@mui/material';
import erik from './perfil.png';
import ImageContainer from './Container.style';

export default function Container() {
  return (
    <>
      <Grid component='section' xs={6} sm={5} md={5} lg={4}
        sx={{ margin: 'auto' }}
      >
        <Box component='div'>
          <ImageContainer component='img' src={erik} alt="imagem de Erik lima"  />
        </Box>
      </Grid>
    </>
  );
}
