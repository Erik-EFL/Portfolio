import { Container, Grid } from '@mui/material';
import React from 'react'
import Text from './components/Text/Text'
import Video from './components/Video/Video'

function About() {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Quem sou eu</h1>
      <Container maxWidth='lg' sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto'
          }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={8} lg={6} sx={{
            margin: 'auto'
          }}>
            <Video />
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={6}>
            <Text />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default About
