import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';

export default function Content() {
  return (
    <>
      <Grid sx={{
        margin: 'auto 1rem',
      }} item xs={12} sm={12} md={6} lg={6}>
        <Box sx={{
          position: 'relative',
        }}>
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
        <Grid xs={12} sm={12} md={11} lg={11}>
        <Typography component='p'>
          Moro em Guarulhos/SP
          <br />
          Sou apaixonado por tecnologia e programação.
          <br />
          Atualmente estou focado em desenvolvimento web com ReactJS e NodeJS.
          <br />
          Meus hobbies são: ir a academia, estudar, jogar RPG com meus amigos e ouvir música.
          <br />
          Meus amores são: minha família e meu gato Naruto.
        </Typography>
        </Grid>
      </Grid>
    </>
  );
}
