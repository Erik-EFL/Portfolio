import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import useFetch from '../../hooks/Fetch';
import {filtered} from '../../utils/Filtered';
import { CardStyled } from './Card.styled';

export default function Card() {

  const data = useFetch();
  const filteredData = filtered(data)

  const projects = filteredData?.map((item, index) => (
    <CardStyled key={index}>
      <h3>{ item.name }</h3>
      <p>{ item.description }</p>
      <p>{ item.language }</p>
    </CardStyled>
  ));

  return (
    <Container container component="main" sx={{
      maxWidth: '900px',
    }}>
      <Grid container spacing={2} xs={12} sm={12} md={12} lg={12} sx={{
        gap: '30px',
        justifyContent: 'center',
        position: 'relative',
        zIndex: '10',
        marginBottom: '120px',
      }}>
       { projects}
      </Grid>
    </Container>
  );
}
