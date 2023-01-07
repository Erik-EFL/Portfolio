import { Container, Grid } from '@mui/material';
import React from 'react';
import { CardStyled } from './Card.styled';
import data from '../../utils/Images'

export default function Card() {
  const projects = data?.map((item) => (
    <CardStyled key={item.id}>
      <div className="card-title">
        <a href={item.url} target="_blank" title={item.title}><h3>{ item.title }</h3></a>
      </div>
      <div className='description'>
        <p>{ item.description }</p>
      </div>
      <div className="containerImage">
        <img src={item.img} alt="imagem de projeto" />
      </div>
      <div className='tech'>
      {
        item.technologies.map((tech) => (
          <span>{tech}</span>
        ))
      }
      </div>
    </CardStyled>
  ));

  return (
    <Container container component="main" sx={{
      maxWidth: '900px',
      marginTop: '-30px',
    }}>
      <Grid container spacing={2} xs={14} sm={14} md={14} lg={14} sx={{
        gap: '30px',
        justifyContent: 'center',
        position: 'relative',
        zIndex: '10',
        marginBottom: '120px',
      }}>
       { projects }
      </Grid>
    </Container>
  );
}
