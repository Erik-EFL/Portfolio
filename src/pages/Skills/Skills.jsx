import React from 'react';
import Container from '@mui/material/Container';
import Card from './Components/Content/Card';

export default function Skills() {
  return (
    <Container component='main' maxWidth="lg" sx={{
      marginTop: '90px',
      marginBottom: '120px',
    }}>
      <Card />
    </Container>
  );
}
