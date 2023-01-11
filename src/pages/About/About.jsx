import { Container, Grid } from '@mui/material';
import React from 'react'
import Text from './components/Text/Text'
import Video from './components/Video/Video'

function About() {
  return (
    <>
      <h1 style={{ textAlign: 'center', color: '#ffffffcb', }}>Quem sou eu</h1>
      <Container component='main' maxWidth='lg' sx={{
            color: '#ffffffcb',
            margin: 'auto',
          }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={8} lg={6} sx={{
            margin: 'auto'
          }}>
            <Video />
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={6} sx={{
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            <Text />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default About
