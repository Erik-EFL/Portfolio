import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

export default function Content() {
  return (
    <>
      <Grid sx={{
        margin: 'auto 1rem',
      }} item xs={12} sm={12} md={6} lg={6}>
        <Box sx={{ position: 'relative', marginBottom: '-10px'}}>
          <h3>
            <Typography component='span' sx={{
              position: 'relative',
              zIndex: '10',
              color: 'rgb(0, 0, 0)',
              backgroundColor: 'transparent',
              fontWeight: 'bold',
            }}>Sou</Typography>
            {' '}
            Erik Ferreira de Lima
          </h3>
          <Box sx={{
            position: 'absolute',
            top: '-22px',
            left: '-33px',
            width: '50px',
            height: '50px',
            borderRadius: '100%',
            backgroundColor: '#ffd001bd',
            marginLeft: '20px',
          }} />
        </Box>
        <TypeAnimation
          cursor
          sequence={['Um Full Stack Developer', 1000000]}
          wrapper="h1"
        />
        <Grid xs={12} sm={12} md={11} lg={11}  sx={{
          position: 'relative', marginTop: '-20px'
        }}>
          <Typography component='p'>
            <br />
            Apaixonado por tecnologia e programação.
            <br />
            Atualmente estou focado em desenvolvimento com React e React Native e no back-end com Node e seus frameWorks.
            <br />
            Saiba um pouco mais sobre mim <Link to='/about'>aqui</Link>
            <br />
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
