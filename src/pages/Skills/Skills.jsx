import React from 'react';
import Container from '@mui/material/Container';
import Card from './Components/Content/Card';

export default function Skills() {
  return (
    <Container component='main' maxWidth="lg" sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      marginTop: '90px',
      marginBottom: '120px',
    }}>
      <Card />
    </Container>
  );
}
