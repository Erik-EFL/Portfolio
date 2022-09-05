import React from 'react';
import { Box, Grid } from '@mui/material';
import erik from './perfil.png';

export default function Container() {
  return (
    <>
      <Grid component='section' xs={8} sm={4} md={4} lg={4}>
        <Box component='div' sx={{
            marginRight: '20px',
            marginTop: '60px',
        }}>
          <Box component='img' src={erik} alt="imagem de Erik lima"  sx={{
            width: '100%',
            borderRadius: '50%',
          }} />
        </Box>
      </Grid>
    </>
  );
}
